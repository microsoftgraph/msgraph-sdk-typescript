import { type ChatMessageAttachment } from './chatMessageAttachment';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageAttachment(chatMessageAttachment: ChatMessageAttachment | undefined = {} as ChatMessageAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { chatMessageAttachment.content = n.getStringValue(); },
        "contentType": n => { chatMessageAttachment.contentType = n.getStringValue(); },
        "contentUrl": n => { chatMessageAttachment.contentUrl = n.getStringValue(); },
        "id": n => { chatMessageAttachment.id = n.getStringValue(); },
        "name": n => { chatMessageAttachment.name = n.getStringValue(); },
        "@odata.type": n => { chatMessageAttachment.odataType = n.getStringValue(); },
        "teamsAppId": n => { chatMessageAttachment.teamsAppId = n.getStringValue(); },
        "thumbnailUrl": n => { chatMessageAttachment.thumbnailUrl = n.getStringValue(); },
    }
}
