import { type LocalizedNotificationMessage } from './localizedNotificationMessage';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLocalizedNotificationMessage(writer: SerializationWriter, localizedNotificationMessage: LocalizedNotificationMessage | undefined = {} as LocalizedNotificationMessage) : void {
        serializeEntity(writer, localizedNotificationMessage)
        writer.writeBooleanValue("isDefault", localizedNotificationMessage.isDefault);
        writer.writeDateValue("lastModifiedDateTime", localizedNotificationMessage.lastModifiedDateTime);
        writer.writeStringValue("locale", localizedNotificationMessage.locale);
        writer.writeStringValue("messageTemplate", localizedNotificationMessage.messageTemplate);
        writer.writeStringValue("subject", localizedNotificationMessage.subject);
}
