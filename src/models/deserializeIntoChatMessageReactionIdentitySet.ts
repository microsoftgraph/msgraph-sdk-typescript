import {ChatMessageReactionIdentitySet} from './chatMessageReactionIdentitySet';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageReactionIdentitySet(chatMessageReactionIdentitySet: ChatMessageReactionIdentitySet | undefined = {} as ChatMessageReactionIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageReactionIdentitySet),
    }
}
