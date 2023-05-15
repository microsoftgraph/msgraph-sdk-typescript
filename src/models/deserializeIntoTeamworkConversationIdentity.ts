import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkConversationIdentity(teamworkConversationIdentity: TeamworkConversationIdentity | undefined = {} as TeamworkConversationIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkConversationIdentity),
        "conversationIdentityType": n => { teamworkConversationIdentity.conversationIdentityType = n.getEnumValue<TeamworkConversationIdentityType>(TeamworkConversationIdentityType); },
    }
}
