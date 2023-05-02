import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageFromIdentitySet(chatMessageFromIdentitySet: ChatMessageFromIdentitySet | undefined = {} as ChatMessageFromIdentitySet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageFromIdentitySet),
    }
}
