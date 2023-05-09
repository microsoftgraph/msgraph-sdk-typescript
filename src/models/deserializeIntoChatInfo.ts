import {ChatInfo} from './chatInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatInfo(chatInfo: ChatInfo | undefined = {} as ChatInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "messageId": n => { chatInfo.messageId = n.getStringValue(); },
        "@odata.type": n => { chatInfo.odataType = n.getStringValue(); },
        "replyChainMessageId": n => { chatInfo.replyChainMessageId = n.getStringValue(); },
        "threadId": n => { chatInfo.threadId = n.getStringValue(); },
    }
}
