import {ChatMessage} from './chatMessage';
import {ChatMessageInfo} from './chatMessageInfo';
import {ChatType} from './chatType';
import {ChatViewpoint} from './chatViewpoint';
import {ConversationMember} from './conversationMember';
import {Entity} from './entity';
import {PinnedChatMessageInfo} from './pinnedChatMessageInfo';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsTab} from './teamsTab';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Chat extends Entity, Parsable {
    /**
     * The chatType property
     */
    chatType?: ChatType | undefined;
    /**
     * Date and time at which the chat was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * A collection of all the apps in the chat. Nullable.
     */
    installedApps?: TeamsAppInstallation[] | undefined;
    /**
     * Preview of the last message sent in the chat. Null if no messages have been sent in the chat. Currently, only the list chats operation supports this property.
     */
    lastMessagePreview?: ChatMessageInfo | undefined;
    /**
     * Date and time at which the chat was renamed or list of members were last changed. Read-only.
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * A collection of all the members in the chat. Nullable.
     */
    members?: ConversationMember[] | undefined;
    /**
     * A collection of all the messages in the chat. Nullable.
     */
    messages?: ChatMessage[] | undefined;
    /**
     * Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only.
     */
    onlineMeetingInfo?: TeamworkOnlineMeetingInfo | undefined;
    /**
     * A collection of all the pinned messages in the chat. Nullable.
     */
    pinnedMessages?: PinnedChatMessageInfo[] | undefined;
    /**
     * A collection of all the tabs in the chat. Nullable.
     */
    tabs?: TeamsTab[] | undefined;
    /**
     * The identifier of the tenant in which the chat was created. Read-only.
     */
    tenantId?: string | undefined;
    /**
     * (Optional) Subject or topic for the chat. Only available for group chats.
     */
    topic?: string | undefined;
    /**
     * Represents caller-specific information about the chat, such as last message read date and time. This property is populated only when the request is made in a delegated context.
     */
    viewpoint?: ChatViewpoint | undefined;
    /**
     * The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only.
     */
    webUrl?: string | undefined;
}
