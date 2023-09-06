import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type TeamworkConversationIdentity } from './teamworkConversationIdentity';
import { TeamworkConversationIdentityType } from './teamworkConversationIdentityType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkConversationIdentity(teamworkConversationIdentity: TeamworkConversationIdentity | undefined = {} as TeamworkConversationIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkConversationIdentity),
        "conversationIdentityType": n => { teamworkConversationIdentity.conversationIdentityType = n.getEnumValue<TeamworkConversationIdentityType>(TeamworkConversationIdentityType); },
    }
}
