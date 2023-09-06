import { type ChatMessageFromIdentitySet } from './chatMessageFromIdentitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageFromIdentitySet(writer: SerializationWriter, chatMessageFromIdentitySet: ChatMessageFromIdentitySet | undefined = {} as ChatMessageFromIdentitySet) : void {
        serializeIdentitySet(writer, chatMessageFromIdentitySet)
}
