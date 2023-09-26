import { createChannelIdentityFromDiscriminatorValue, serializeChannelIdentity, type ChannelIdentity } from './channelIdentity';
import { createChatMessageAttachmentFromDiscriminatorValue, serializeChatMessageAttachment, type ChatMessageAttachment } from './chatMessageAttachment';
import { createChatMessageFromIdentitySetFromDiscriminatorValue, serializeChatMessageFromIdentitySet, type ChatMessageFromIdentitySet } from './chatMessageFromIdentitySet';
import { createChatMessageHistoryItemFromDiscriminatorValue, serializeChatMessageHistoryItem, type ChatMessageHistoryItem } from './chatMessageHistoryItem';
import { createChatMessageHostedContentFromDiscriminatorValue, serializeChatMessageHostedContent, type ChatMessageHostedContent } from './chatMessageHostedContent';
import { ChatMessageImportance } from './chatMessageImportance';
import { createChatMessageMentionFromDiscriminatorValue, serializeChatMessageMention, type ChatMessageMention } from './chatMessageMention';
import { createChatMessagePolicyViolationFromDiscriminatorValue, serializeChatMessagePolicyViolation, type ChatMessagePolicyViolation } from './chatMessagePolicyViolation';
import { createChatMessageReactionFromDiscriminatorValue, serializeChatMessageReaction, type ChatMessageReaction } from './chatMessageReaction';
import { ChatMessageType } from './chatMessageType';
import { deserializeIntoEntity, serializeEntity, type Entity } from './entity';
import { createEventMessageDetailFromDiscriminatorValue, serializeEventMessageDetail, type EventMessageDetail } from './eventMessageDetail';
import { createItemBodyFromDiscriminatorValue, serializeItemBody, type ItemBody } from './itemBody';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ChatMessage extends Entity, Parsable {
    /**
     * References to attached objects like files, tabs, meetings etc.
     */
    attachments?: ChatMessageAttachment[];
    /**
     * The body property
     */
    body?: ItemBody;
    /**
     * If the message was sent in a channel, represents identity of the channel.
     */
    channelIdentity?: ChannelIdentity;
    /**
     * If the message was sent in a chat, represents the identity of the chat.
     */
    chatId?: string;
    /**
     * Timestamp of when the chat message was created.
     */
    createdDateTime?: Date;
    /**
     * Read only. Timestamp at which the chat message was deleted, or null if not deleted.
     */
    deletedDateTime?: Date;
    /**
     * Read-only. Version number of the chat message.
     */
    etag?: string;
    /**
     * Read-only. If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.
     */
    eventDetail?: EventMessageDetail;
    /**
     * Details of the sender of the chat message. Can only be set during migration.
     */
    from?: ChatMessageFromIdentitySet;
    /**
     * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     */
    hostedContents?: ChatMessageHostedContent[];
    /**
     * The importance property
     */
    importance?: ChatMessageImportance;
    /**
     * Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
     */
    lastEditedDateTime?: Date;
    /**
     * Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
     */
    lastModifiedDateTime?: Date;
    /**
     * Locale of the chat message set by the client. Always set to en-us.
     */
    locale?: string;
    /**
     * List of entities mentioned in the chat message. Supported entities are: user, bot, team, and channel.
     */
    mentions?: ChatMessageMention[];
    /**
     * List of activity history of a message item, including modification time and actions, such as reactionAdded, reactionRemoved, or reaction changes, on the message.
     */
    messageHistory?: ChatMessageHistoryItem[];
    /**
     * The messageType property
     */
    messageType?: ChatMessageType;
    /**
     * Defines the properties of a policy violation set by a data loss prevention (DLP) application.
     */
    policyViolation?: ChatMessagePolicyViolation;
    /**
     * Reactions for this chat message (for example, Like).
     */
    reactions?: ChatMessageReaction[];
    /**
     * Replies for a specified message. Supports $expand for channel messages.
     */
    replies?: ChatMessage[];
    /**
     * Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
     */
    replyToId?: string;
    /**
     * The subject of the chat message, in plaintext.
     */
    subject?: string;
    /**
     * Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
     */
    summary?: string;
    /**
     * Read-only. Link to the message in Microsoft Teams.
     */
    webUrl?: string;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function createChatMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessage;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function deserializeIntoChatMessage(chatMessage: ChatMessage | undefined = {} as ChatMessage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(chatMessage),
        "attachments": n => { chatMessage.attachments = n.getCollectionOfObjectValues<ChatMessageAttachment>(createChatMessageAttachmentFromDiscriminatorValue); },
        "body": n => { chatMessage.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "channelIdentity": n => { chatMessage.channelIdentity = n.getObjectValue<ChannelIdentity>(createChannelIdentityFromDiscriminatorValue); },
        "chatId": n => { chatMessage.chatId = n.getStringValue(); },
        "createdDateTime": n => { chatMessage.createdDateTime = n.getDateValue(); },
        "deletedDateTime": n => { chatMessage.deletedDateTime = n.getDateValue(); },
        "etag": n => { chatMessage.etag = n.getStringValue(); },
        "eventDetail": n => { chatMessage.eventDetail = n.getObjectValue<EventMessageDetail>(createEventMessageDetailFromDiscriminatorValue); },
        "from": n => { chatMessage.from = n.getObjectValue<ChatMessageFromIdentitySet>(createChatMessageFromIdentitySetFromDiscriminatorValue); },
        "hostedContents": n => { chatMessage.hostedContents = n.getCollectionOfObjectValues<ChatMessageHostedContent>(createChatMessageHostedContentFromDiscriminatorValue); },
        "importance": n => { chatMessage.importance = n.getEnumValue<ChatMessageImportance>(ChatMessageImportance); },
        "lastEditedDateTime": n => { chatMessage.lastEditedDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { chatMessage.lastModifiedDateTime = n.getDateValue(); },
        "locale": n => { chatMessage.locale = n.getStringValue(); },
        "mentions": n => { chatMessage.mentions = n.getCollectionOfObjectValues<ChatMessageMention>(createChatMessageMentionFromDiscriminatorValue); },
        "messageHistory": n => { chatMessage.messageHistory = n.getCollectionOfObjectValues<ChatMessageHistoryItem>(createChatMessageHistoryItemFromDiscriminatorValue); },
        "messageType": n => { chatMessage.messageType = n.getEnumValue<ChatMessageType>(ChatMessageType); },
        "policyViolation": n => { chatMessage.policyViolation = n.getObjectValue<ChatMessagePolicyViolation>(createChatMessagePolicyViolationFromDiscriminatorValue); },
        "reactions": n => { chatMessage.reactions = n.getCollectionOfObjectValues<ChatMessageReaction>(createChatMessageReactionFromDiscriminatorValue); },
        "replies": n => { chatMessage.replies = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
        "replyToId": n => { chatMessage.replyToId = n.getStringValue(); },
        "subject": n => { chatMessage.subject = n.getStringValue(); },
        "summary": n => { chatMessage.summary = n.getStringValue(); },
        "webUrl": n => { chatMessage.webUrl = n.getStringValue(); },
    }
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function serializeChatMessage(writer: SerializationWriter, chatMessage: ChatMessage | undefined = {} as ChatMessage) : void {
        serializeEntity(writer, chatMessage)
        writer.writeCollectionOfObjectValues<ChatMessageAttachment>("attachments", chatMessage.attachments, );
        writer.writeObjectValue<ItemBody>("body", chatMessage.body, );
        writer.writeObjectValue<ChannelIdentity>("channelIdentity", chatMessage.channelIdentity, );
        writer.writeStringValue("chatId", chatMessage.chatId);
        writer.writeDateValue("createdDateTime", chatMessage.createdDateTime);
        writer.writeDateValue("deletedDateTime", chatMessage.deletedDateTime);
        writer.writeStringValue("etag", chatMessage.etag);
        writer.writeObjectValue<EventMessageDetail>("eventDetail", chatMessage.eventDetail, );
        writer.writeObjectValue<ChatMessageFromIdentitySet>("from", chatMessage.from, );
        writer.writeCollectionOfObjectValues<ChatMessageHostedContent>("hostedContents", chatMessage.hostedContents, );
        writer.writeEnumValue<ChatMessageImportance>("importance", chatMessage.importance);
        writer.writeDateValue("lastEditedDateTime", chatMessage.lastEditedDateTime);
        writer.writeDateValue("lastModifiedDateTime", chatMessage.lastModifiedDateTime);
        writer.writeStringValue("locale", chatMessage.locale);
        writer.writeCollectionOfObjectValues<ChatMessageMention>("mentions", chatMessage.mentions, );
        writer.writeCollectionOfObjectValues<ChatMessageHistoryItem>("messageHistory", chatMessage.messageHistory, );
        writer.writeEnumValue<ChatMessageType>("messageType", chatMessage.messageType);
        writer.writeObjectValue<ChatMessagePolicyViolation>("policyViolation", chatMessage.policyViolation, );
        writer.writeCollectionOfObjectValues<ChatMessageReaction>("reactions", chatMessage.reactions, );
        writer.writeCollectionOfObjectValues<ChatMessage>("replies", chatMessage.replies, );
        writer.writeStringValue("replyToId", chatMessage.replyToId);
        writer.writeStringValue("subject", chatMessage.subject);
        writer.writeStringValue("summary", chatMessage.summary);
        writer.writeStringValue("webUrl", chatMessage.webUrl);
}
