import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkConversationIdentity} from './serializeTeamworkConversationIdentity';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageMentionedIdentitySet(chatMessageMentionedIdentitySet: ChatMessageMentionedIdentitySet | undefined = {} as ChatMessageMentionedIdentitySet, writer: SerializationWriter) : void {
        serializeIdentitySet(writer, chatMessageMentionedIdentitySet)
        writer.writeObjectValue<TeamworkConversationIdentity>("conversation", chatMessageMentionedIdentitySet.conversation, serializeTeamworkConversationIdentity);
}
