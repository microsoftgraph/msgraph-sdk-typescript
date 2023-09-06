import { ChatMessageActions } from './chatMessageActions';
import { type ChatMessageHistoryItem } from './chatMessageHistoryItem';
import { type ChatMessageReaction } from './chatMessageReaction';
import { serializeChatMessageReaction } from './serializeChatMessageReaction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageHistoryItem(writer: SerializationWriter, chatMessageHistoryItem: ChatMessageHistoryItem | undefined = {} as ChatMessageHistoryItem) : void {
        writer.writeEnumValue<ChatMessageActions[]>("actions", chatMessageHistoryItem.actions);
        writer.writeDateValue("modifiedDateTime", chatMessageHistoryItem.modifiedDateTime);
        writer.writeStringValue("@odata.type", chatMessageHistoryItem.odataType);
        writer.writeObjectValue<ChatMessageReaction>("reaction", chatMessageHistoryItem.reaction, serializeChatMessageReaction);
        writer.writeAdditionalData(chatMessageHistoryItem.additionalData);
}
