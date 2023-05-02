import {ChatMessage} from './chatMessage';
import {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePinnedChatMessageInfo(writer: SerializationWriter, pinnedChatMessageInfo: PinnedChatMessageInfo | undefined = {} as PinnedChatMessageInfo) : void {
        serializeEntity(writer, pinnedChatMessageInfo)
        writer.writeObjectValue<ChatMessage>("message", pinnedChatMessageInfo.message, serializeChatMessage);
}
