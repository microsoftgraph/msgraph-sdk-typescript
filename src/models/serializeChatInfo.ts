import { type ChatInfo } from './chatInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatInfo(writer: SerializationWriter, chatInfo: ChatInfo | undefined = {} as ChatInfo) : void {
        writer.writeStringValue("messageId", chatInfo.messageId);
        writer.writeStringValue("@odata.type", chatInfo.odataType);
        writer.writeStringValue("replyChainMessageId", chatInfo.replyChainMessageId);
        writer.writeStringValue("threadId", chatInfo.threadId);
        writer.writeAdditionalData(chatInfo.additionalData);
}
