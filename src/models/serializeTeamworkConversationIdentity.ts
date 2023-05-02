import {serializeIdentity} from './serializeIdentity';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkConversationIdentity(writer: SerializationWriter, teamworkConversationIdentity: TeamworkConversationIdentity | undefined = {} as TeamworkConversationIdentity) : void {
        serializeIdentity(writer, teamworkConversationIdentity)
        writer.writeEnumValue<TeamworkConversationIdentityType>("conversationIdentityType", teamworkConversationIdentity.conversationIdentityType);
}
