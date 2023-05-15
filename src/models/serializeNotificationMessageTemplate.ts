import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {serializeEntity} from './serializeEntity';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotificationMessageTemplate(writer: SerializationWriter, notificationMessageTemplate: NotificationMessageTemplate | undefined = {} as NotificationMessageTemplate) : void {
        serializeEntity(writer, notificationMessageTemplate)
        writer.writeEnumValue<NotificationTemplateBrandingOptions>("brandingOptions", notificationMessageTemplate.brandingOptions);
        writer.writeStringValue("defaultLocale", notificationMessageTemplate.defaultLocale);
        writer.writeStringValue("displayName", notificationMessageTemplate.displayName);
        writer.writeDateValue("lastModifiedDateTime", notificationMessageTemplate.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessage>("localizedNotificationMessages", notificationMessageTemplate.localizedNotificationMessages, serializeLocalizedNotificationMessage);
        writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", notificationMessageTemplate.roleScopeTagIds);
}
