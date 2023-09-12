import { type ChatInfo } from './chatInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatInfo(chatInfo: ChatInfo | undefined = {} as ChatInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "messageId": n => { chatInfo.messageId = n.getStringValue(); },
        "@odata.type": n => { chatInfo.odataType = n.getStringValue(); },
        "replyChainMessageId": n => { chatInfo.replyChainMessageId = n.getStringValue(); },
        "threadId": n => { chatInfo.threadId = n.getStringValue(); },
    }
}
