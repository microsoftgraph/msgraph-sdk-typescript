import { type ChatMessageReactionIdentitySet } from './chatMessageReactionIdentitySet';
import { deserializeIntoIdentitySet } from './deserializeIntoIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageReactionIdentitySet(chatMessageReactionIdentitySet: ChatMessageReactionIdentitySet | undefined = {} as ChatMessageReactionIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageReactionIdentitySet),
    }
}
