import {ConversationMember} from './conversationMember';
import {TeamInfo} from './teamInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

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
