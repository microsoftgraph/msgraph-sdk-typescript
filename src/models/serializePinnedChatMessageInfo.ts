import type {ChatMessage} from './chatMessage';
import type {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePinnedChatMessageInfo(writer: SerializationWriter, pinnedChatMessageInfo: PinnedChatMessageInfo | undefined = {} as PinnedChatMessageInfo) : void {
        serializeEntity(writer, pinnedChatMessageInfo)
        writer.writeObjectValue<ChatMessage>("message", pinnedChatMessageInfo.message, serializeChatMessage);
}
