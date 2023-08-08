import type {ChatMessageReactionIdentitySet} from './chatMessageReactionIdentitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageReactionIdentitySet(writer: SerializationWriter, chatMessageReactionIdentitySet: ChatMessageReactionIdentitySet | undefined = {} as ChatMessageReactionIdentitySet) : void {
        serializeIdentitySet(writer, chatMessageReactionIdentitySet)
}
