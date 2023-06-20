import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageFromIdentitySet(chatMessageFromIdentitySet: ChatMessageFromIdentitySet | undefined = {} as ChatMessageFromIdentitySet, writer: SerializationWriter) : void {
        serializeIdentitySet(writer, chatMessageFromIdentitySet)
}
