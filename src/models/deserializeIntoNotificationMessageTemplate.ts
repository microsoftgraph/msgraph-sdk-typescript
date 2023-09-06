import { createLocalizedNotificationMessageFromDiscriminatorValue } from './createLocalizedNotificationMessageFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type LocalizedNotificationMessage } from './localizedNotificationMessage';
import { type NotificationMessageTemplate } from './notificationMessageTemplate';
import { NotificationTemplateBrandingOptions } from './notificationTemplateBrandingOptions';
import { serializeLocalizedNotificationMessage } from './serializeLocalizedNotificationMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationMessageTemplate(notificationMessageTemplate: NotificationMessageTemplate | undefined = {} as NotificationMessageTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(notificationMessageTemplate),
        "brandingOptions": n => { notificationMessageTemplate.brandingOptions = n.getCollectionOfEnumValues<NotificationTemplateBrandingOptions>(NotificationTemplateBrandingOptions); },
        "defaultLocale": n => { notificationMessageTemplate.defaultLocale = n.getStringValue(); },
        "displayName": n => { notificationMessageTemplate.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { notificationMessageTemplate.lastModifiedDateTime = n.getDateValue(); },
        "localizedNotificationMessages": n => { notificationMessageTemplate.localizedNotificationMessages = n.getCollectionOfObjectValues<LocalizedNotificationMessage>(createLocalizedNotificationMessageFromDiscriminatorValue); },
        "roleScopeTagIds": n => { notificationMessageTemplate.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
