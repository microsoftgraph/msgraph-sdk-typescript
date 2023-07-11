import {ChannelMembershipType} from './channelMembershipType';
import {ChatMessage} from './chatMessage';
import {ConversationMember} from './conversationMember';
import {DriveItem} from './driveItem';
import {Entity} from './entity';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {TeamsTab} from './teamsTab';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Channel extends Entity, Parsable {
    /**
     * Read only. Timestamp at which the channel was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Optional textual description for the channel.
     */
    description?: string | undefined;
    /**
     * Channel name as it will appear to the user in Microsoft Teams. The maximum length is 50 characters.
     */
    displayName?: string | undefined;
    /**
     * The email address for sending messages to the channel. Read-only.
     */
    email?: string | undefined;
    /**
     * Metadata for the location where the channel's files are stored.
     */
    filesFolder?: DriveItem | undefined;
    /**
     * Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
     */
    isFavoriteByDefault?: boolean | undefined;
    /**
     * A collection of membership records associated with the channel.
     */
    members?: ConversationMember[] | undefined;
    /**
     * The type of the channel. Can be set during creation and can't be changed. The possible values are: standard, private, unknownFutureValue, shared. The default value is standard. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: shared.
     */
    membershipType?: ChannelMembershipType | undefined;
    /**
     * A collection of all the messages in the channel. A navigation property. Nullable.
     */
    messages?: ChatMessage[] | undefined;
    /**
     * A collection of teams with which a channel is shared.
     */
    sharedWithTeams?: SharedWithChannelTeamInfo[] | undefined;
    /**
     * A collection of all the tabs in the channel. A navigation property.
     */
    tabs?: TeamsTab[] | undefined;
    /**
     * The ID of the Azure Active Directory tenant.
     */
    tenantId?: string | undefined;
    /**
     * A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
     */
    webUrl?: string | undefined;
}
