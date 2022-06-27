import {ConversationMember} from './conversationMember';
import {TeamInfo} from './teamInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharedWithChannelTeamInfo extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeamInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of team members who have access to the shared channel. */
    allowedMembers?: ConversationMember[] | undefined;
    /** Indicates whether the team is the host of the channel. */
    isHostTeam?: boolean | undefined;
}
