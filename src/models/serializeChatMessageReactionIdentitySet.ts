import {ChatMessageReactionIdentitySet} from './chatMessageReactionIdentitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageReactionIdentitySet(chatMessageReactionIdentitySet: ChatMessageReactionIdentitySet | undefined = {} as ChatMessageReactionIdentitySet, writer: SerializationWriter) : void {
        serializeIdentitySet(writer, chatMessageReactionIdentitySet)
}
