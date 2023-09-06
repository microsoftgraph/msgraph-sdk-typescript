import { type ChatMessage } from './chatMessage';
import { createChatMessageFromDiscriminatorValue } from './createChatMessageFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PinnedChatMessageInfo } from './pinnedChatMessageInfo';
import { serializeChatMessage } from './serializeChatMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPinnedChatMessageInfo(pinnedChatMessageInfo: PinnedChatMessageInfo | undefined = {} as PinnedChatMessageInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(pinnedChatMessageInfo),
        "message": n => { pinnedChatMessageInfo.message = n.getObjectValue<ChatMessage>(createChatMessageFromDiscriminatorValue); },
    }
}
