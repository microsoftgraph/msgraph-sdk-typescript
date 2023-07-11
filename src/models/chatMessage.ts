import {ChannelIdentity} from './channelIdentity';
import {ChatMessageAttachment} from './chatMessageAttachment';
import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {ChatMessageHistoryItem} from './chatMessageHistoryItem';
import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {ChatMessageImportance} from './chatMessageImportance';
import {ChatMessageMention} from './chatMessageMention';
import {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import {ChatMessageReaction} from './chatMessageReaction';
import {ChatMessageType} from './chatMessageType';
import {Entity} from './entity';
import {EventMessageDetail} from './eventMessageDetail';
import {ItemBody} from './itemBody';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessage extends Entity, Parsable {
    /**
     * References to attached objects like files, tabs, meetings etc.
     */
    attachments?: ChatMessageAttachment[] | undefined;
    /**
     * The body property
     */
    body?: ItemBody | undefined;
    /**
     * If the message was sent in a channel, represents identity of the channel.
     */
    channelIdentity?: ChannelIdentity | undefined;
    /**
     * If the message was sent in a chat, represents the identity of the chat.
     */
    chatId?: string | undefined;
    /**
     * Timestamp of when the chat message was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Read only. Timestamp at which the chat message was deleted, or null if not deleted.
     */
    deletedDateTime?: Date | undefined;
    /**
     * Read-only. Version number of the chat message.
     */
    etag?: string | undefined;
    /**
     * Read-only. If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.
     */
    eventDetail?: EventMessageDetail | undefined;
    /**
     * Details of the sender of the chat message. Can only be set during migration.
     */
    from?: ChatMessageFromIdentitySet | undefined;
    /**
     * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     */
    hostedContents?: ChatMessageHostedContent[] | undefined;
    /**
     * The importance property
     */
    importance?: ChatMessageImportance | undefined;
    /**
     * Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
     */
    lastEditedDateTime?: Date | undefined;
    /**
     * Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Locale of the chat message set by the client. Always set to en-us.
     */
    locale?: string | undefined;
    /**
     * List of entities mentioned in the chat message. Supported entities are: user, bot, team, and channel.
     */
    mentions?: ChatMessageMention[] | undefined;
    /**
     * List of activity history of a message item, including modification time and actions, such as reactionAdded, reactionRemoved, or reaction changes, on the message.
     */
    messageHistory?: ChatMessageHistoryItem[] | undefined;
    /**
     * The messageType property
     */
    messageType?: ChatMessageType | undefined;
    /**
     * Defines the properties of a policy violation set by a data loss prevention (DLP) application.
     */
    policyViolation?: ChatMessagePolicyViolation | undefined;
    /**
     * Reactions for this chat message (for example, Like).
     */
    reactions?: ChatMessageReaction[] | undefined;
    /**
     * Replies for a specified message. Supports $expand for channel messages.
     */
    replies?: ChatMessage[] | undefined;
    /**
     * Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
     */
    replyToId?: string | undefined;
    /**
     * The subject of the chat message, in plaintext.
     */
    subject?: string | undefined;
    /**
     * Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
     */
    summary?: string | undefined;
    /**
     * Read-only. Link to the message in Microsoft Teams.
     */
    webUrl?: string | undefined;
}
