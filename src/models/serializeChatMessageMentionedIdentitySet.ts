import { type ChatMessageMentionedIdentitySet } from './chatMessageMentionedIdentitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeTeamworkConversationIdentity } from './serializeTeamworkConversationIdentity';
import { type TeamworkConversationIdentity } from './teamworkConversationIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatMessageMentionedIdentitySet(writer: SerializationWriter, chatMessageMentionedIdentitySet: ChatMessageMentionedIdentitySet | undefined = {} as ChatMessageMentionedIdentitySet) : void {
        serializeIdentitySet(writer, chatMessageMentionedIdentitySet)
        writer.writeObjectValue<TeamworkConversationIdentity>("conversation", chatMessageMentionedIdentitySet.conversation, serializeTeamworkConversationIdentity);
}
