import {ChatInfo} from './chatInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatInfo(chatInfo: ChatInfo | undefined = {} as ChatInfo, writer: SerializationWriter) : void {
        writer.writeStringValue("messageId", chatInfo.messageId);
        writer.writeStringValue("@odata.type", chatInfo.odataType);
        writer.writeStringValue("replyChainMessageId", chatInfo.replyChainMessageId);
        writer.writeStringValue("threadId", chatInfo.threadId);
        writer.writeAdditionalData(chatInfo.additionalData);
}
