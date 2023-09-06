import { serializeIdentity } from './serializeIdentity';
import { type TeamworkConversationIdentity } from './teamworkConversationIdentity';
import { TeamworkConversationIdentityType } from './teamworkConversationIdentityType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamworkConversationIdentity(writer: SerializationWriter, teamworkConversationIdentity: TeamworkConversationIdentity | undefined = {} as TeamworkConversationIdentity) : void {
        serializeIdentity(writer, teamworkConversationIdentity)
        writer.writeEnumValue<TeamworkConversationIdentityType>("conversationIdentityType", teamworkConversationIdentity.conversationIdentityType);
}
