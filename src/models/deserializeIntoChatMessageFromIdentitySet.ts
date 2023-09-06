import { type ChatMessageFromIdentitySet } from './chatMessageFromIdentitySet';
import { deserializeIntoIdentitySet } from './deserializeIntoIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageFromIdentitySet(chatMessageFromIdentitySet: ChatMessageFromIdentitySet | undefined = {} as ChatMessageFromIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageFromIdentitySet),
    }
}
