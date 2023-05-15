import {ChatMessageActions} from './chatMessageActions';
import {ChatMessageHistoryItem} from './chatMessageHistoryItem';
import {ChatMessageReaction} from './chatMessageReaction';
import {serializeChatMessageReaction} from './serializeChatMessageReaction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHistoryItem(writer: SerializationWriter, chatMessageHistoryItem: ChatMessageHistoryItem | undefined = {} as ChatMessageHistoryItem) : void {
        writer.writeEnumValue<ChatMessageActions>("actions", chatMessageHistoryItem.actions);
        writer.writeDateValue("modifiedDateTime", chatMessageHistoryItem.modifiedDateTime);
        writer.writeStringValue("@odata.type", chatMessageHistoryItem.odataType);
        writer.writeObjectValue<ChatMessageReaction>("reaction", chatMessageHistoryItem.reaction, serializeChatMessageReaction);
        writer.writeAdditionalData(chatMessageHistoryItem.additionalData);
}
