import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocalizedNotificationMessage(localizedNotificationMessage: LocalizedNotificationMessage | undefined = {} as LocalizedNotificationMessage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(localizedNotificationMessage),
        "isDefault": n => { localizedNotificationMessage.isDefault = n.getBooleanValue(); },
        "lastModifiedDateTime": n => { localizedNotificationMessage.lastModifiedDateTime = n.getDateValue(); },
        "locale": n => { localizedNotificationMessage.locale = n.getStringValue(); },
        "messageTemplate": n => { localizedNotificationMessage.messageTemplate = n.getStringValue(); },
        "subject": n => { localizedNotificationMessage.subject = n.getStringValue(); },
    }
}
