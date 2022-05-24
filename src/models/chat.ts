import {ChatMessage} from './chatMessage';
import {ChatType} from './chatType';
import {ConversationMember} from './conversationMember';
import {Entity} from './entity';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsTab} from './teamsTab';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';

export interface Chat extends Entity{
    /** Specifies the type of chat. Possible values are: group, oneOnOne, meeting, unknownFutureValue. */
    chatType?:ChatType | undefined;
    /** Date and time at which the chat was created. Read-only. */
    createdDateTime?:Date | undefined;
    /** A collection of all the apps in the chat. Nullable. */
    installedApps?:TeamsAppInstallation[] | undefined;
    /** Date and time at which the chat was renamed or list of members were last changed. Read-only. */
    lastUpdatedDateTime?:Date | undefined;
    /** A collection of all the members in the chat. Nullable. */
    members?:ConversationMember[] | undefined;
    /** A collection of all the messages in the chat. Nullable. */
    messages?:ChatMessage[] | undefined;
    /** Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only. */
    onlineMeetingInfo?:TeamworkOnlineMeetingInfo | undefined;
    /** A collection of all the tabs in the chat. Nullable. */
    tabs?:TeamsTab[] | undefined;
    /** The identifier of the tenant in which the chat was created. Read-only. */
    tenantId?:string | undefined;
    /** (Optional) Subject or topic for the chat. Only available for group chats. */
    topic?:string | undefined;
    /** The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only. */
    webUrl?:string | undefined;
}
