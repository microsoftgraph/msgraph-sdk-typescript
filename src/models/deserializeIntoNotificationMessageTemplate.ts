import {createLocalizedNotificationMessageFromDiscriminatorValue} from './createLocalizedNotificationMessageFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationMessageTemplate(notificationMessageTemplate: NotificationMessageTemplate | undefined = {} as NotificationMessageTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(notificationMessageTemplate),
        "brandingOptions": n => { notificationMessageTemplate.brandingOptions = n.getEnumValue<NotificationTemplateBrandingOptions>(NotificationTemplateBrandingOptions); },
        "defaultLocale": n => { notificationMessageTemplate.defaultLocale = n.getStringValue(); },
        "displayName": n => { notificationMessageTemplate.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { notificationMessageTemplate.lastModifiedDateTime = n.getDateValue(); },
        "localizedNotificationMessages": n => { notificationMessageTemplate.localizedNotificationMessages = n.getCollectionOfObjectValues<LocalizedNotificationMessage>(createLocalizedNotificationMessageFromDiscriminatorValue); },
        "roleScopeTagIds": n => { notificationMessageTemplate.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
