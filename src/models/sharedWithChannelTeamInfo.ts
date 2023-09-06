import { type ConversationMember } from './conversationMember';
import { type TeamInfo } from './teamInfo';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SharedWithChannelTeamInfo extends Parsable, TeamInfo {
    /**
     * A collection of team members who have access to the shared channel.
     */
    allowedMembers?: ConversationMember[] | undefined;
    /**
     * Indicates whether the team is the host of the channel.
     */
    isHostTeam?: boolean | undefined;
}
