import type {ChannelIdentity} from './channelIdentity';
import type {ChatMessage} from './chatMessage';
import type {ChatMessageAttachment} from './chatMessageAttachment';
import type {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import type {ChatMessageHistoryItem} from './chatMessageHistoryItem';
import type {ChatMessageHostedContent} from './chatMessageHostedContent';
import {ChatMessageImportance} from './chatMessageImportance';
import type {ChatMessageMention} from './chatMessageMention';
import type {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import type {ChatMessageReaction} from './chatMessageReaction';
import {ChatMessageType} from './chatMessageType';
import {createChannelIdentityFromDiscriminatorValue} from './createChannelIdentityFromDiscriminatorValue';
import {createChatMessageAttachmentFromDiscriminatorValue} from './createChatMessageAttachmentFromDiscriminatorValue';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createChatMessageFromIdentitySetFromDiscriminatorValue} from './createChatMessageFromIdentitySetFromDiscriminatorValue';
import {createChatMessageHistoryItemFromDiscriminatorValue} from './createChatMessageHistoryItemFromDiscriminatorValue';
import {createChatMessageHostedContentFromDiscriminatorValue} from './createChatMessageHostedContentFromDiscriminatorValue';
import {createChatMessageMentionFromDiscriminatorValue} from './createChatMessageMentionFromDiscriminatorValue';
import {createChatMessagePolicyViolationFromDiscriminatorValue} from './createChatMessagePolicyViolationFromDiscriminatorValue';
import {createChatMessageReactionFromDiscriminatorValue} from './createChatMessageReactionFromDiscriminatorValue';
import {createEventMessageDetailFromDiscriminatorValue} from './createEventMessageDetailFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {EventMessageDetail} from './eventMessageDetail';
import type {ItemBody} from './itemBody';
import {serializeChannelIdentity} from './serializeChannelIdentity';
import {serializeChatMessage} from './serializeChatMessage';
import {serializeChatMessageAttachment} from './serializeChatMessageAttachment';
import {serializeChatMessageFromIdentitySet} from './serializeChatMessageFromIdentitySet';
import {serializeChatMessageHistoryItem} from './serializeChatMessageHistoryItem';
import {serializeChatMessageHostedContent} from './serializeChatMessageHostedContent';
import {serializeChatMessageMention} from './serializeChatMessageMention';
import {serializeChatMessagePolicyViolation} from './serializeChatMessagePolicyViolation';
import {serializeChatMessageReaction} from './serializeChatMessageReaction';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
