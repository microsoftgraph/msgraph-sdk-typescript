import {Channel} from './channel';
import {ConversationMember} from './conversationMember';
import {Entity} from './entity';
import {Group} from './group';
import {ProfilePhoto} from './profilePhoto';
import {Schedule} from './schedule';
import {TeamFunSettings} from './teamFunSettings';
import {TeamGuestSettings} from './teamGuestSettings';
import {TeamMemberSettings} from './teamMemberSettings';
import {TeamMessagingSettings} from './teamMessagingSettings';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamSpecialization} from './teamSpecialization';
import {TeamsTemplate} from './teamsTemplate';
import {TeamSummary} from './teamSummary';
import {TeamVisibilityType} from './teamVisibilityType';
import {TeamworkTag} from './teamworkTag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Team extends Entity, Parsable {
    /**
     * List of channels either hosted in or shared with the team (incoming channels).
     */
    allChannels?: Channel[] | undefined;
    /**
     * The collection of channels and messages associated with the team.
     */
    channels?: Channel[] | undefined;
    /**
     * An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
     */
    classification?: string | undefined;
    /**
     * Timestamp at which the team was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * An optional description for the team. Maximum length: 1024 characters.
     */
    description?: string | undefined;
    /**
     * The name of the team.
     */
    displayName?: string | undefined;
    /**
     * Settings to configure use of Giphy, memes, and stickers in the team.
     */
    funSettings?: TeamFunSettings | undefined;
    /**
     * The group property
     */
    group?: Group | undefined;
    /**
     * Settings to configure whether guests can create, update, or delete channels in the team.
     */
    guestSettings?: TeamGuestSettings | undefined;
    /**
     * List of channels shared with the team.
     */
    incomingChannels?: Channel[] | undefined;
    /**
     * The apps installed in this team.
     */
    installedApps?: TeamsAppInstallation[] | undefined;
    /**
     * A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
     */
    internalId?: string | undefined;
    /**
     * Whether this team is in read-only mode.
     */
    isArchived?: boolean | undefined;
    /**
     * Members and owners of the team.
     */
    members?: ConversationMember[] | undefined;
    /**
     * Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team.
     */
    memberSettings?: TeamMemberSettings | undefined;
    /**
     * Settings to configure messaging and mentions in the team.
     */
    messagingSettings?: TeamMessagingSettings | undefined;
    /**
     * The async operations that ran or are running on this team.
     */
    operations?: TeamsAsyncOperation[] | undefined;
    /**
     * The profile photo for the team.
     */
    photo?: ProfilePhoto | undefined;
    /**
     * The general channel for the team.
     */
    primaryChannel?: Channel | undefined;
    /**
     * The schedule of shifts for this team.
     */
    schedule?: Schedule | undefined;
    /**
     * Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case.
     */
    specialization?: TeamSpecialization | undefined;
    /**
     * Contains summary information about the team, including number of owners, members, and guests.
     */
    summary?: TeamSummary | undefined;
    /**
     * The tags associated with the team.
     */
    tags?: TeamworkTag[] | undefined;
    /**
     * The template this team was created from. See available templates.
     */
    template?: TeamsTemplate | undefined;
    /**
     * The ID of the Azure Active Directory tenant.
     */
    tenantId?: string | undefined;
    /**
     * The visibility of the group and team. Defaults to Public.
     */
    visibility?: TeamVisibilityType | undefined;
    /**
     * A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
     */
    webUrl?: string | undefined;
}
