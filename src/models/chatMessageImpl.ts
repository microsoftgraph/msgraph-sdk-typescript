import {ChannelIdentity} from './channelIdentity';
import {ChatMessage} from './chatMessage';
import {ChatMessageAttachment} from './chatMessageAttachment';
import {ChatMessageFromIdentitySet} from './chatMessageFromIdentitySet';
import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {ChatMessageImportance} from './chatMessageImportance';
import {ChatMessageMention} from './chatMessageMention';
import {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import {ChatMessageReaction} from './chatMessageReaction';
import {ChatMessageType} from './chatMessageType';
import {createChannelIdentityFromDiscriminatorValue} from './createChannelIdentityFromDiscriminatorValue';
import {createChatMessageAttachmentFromDiscriminatorValue} from './createChatMessageAttachmentFromDiscriminatorValue';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createChatMessageFromIdentitySetFromDiscriminatorValue} from './createChatMessageFromIdentitySetFromDiscriminatorValue';
import {createChatMessageHostedContentFromDiscriminatorValue} from './createChatMessageHostedContentFromDiscriminatorValue';
import {createChatMessageMentionFromDiscriminatorValue} from './createChatMessageMentionFromDiscriminatorValue';
import {createChatMessagePolicyViolationFromDiscriminatorValue} from './createChatMessagePolicyViolationFromDiscriminatorValue';
import {createChatMessageReactionFromDiscriminatorValue} from './createChatMessageReactionFromDiscriminatorValue';
import {createEventMessageDetailFromDiscriminatorValue} from './createEventMessageDetailFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {EventMessageDetail} from './eventMessageDetail';
import {ChannelIdentityImpl, ChatMessageAttachmentImpl, ChatMessageFromIdentitySetImpl, ChatMessageHostedContentImpl, ChatMessageMentionImpl, ChatMessagePolicyViolationImpl, ChatMessageReactionImpl, EntityImpl, EventMessageDetailImpl, ItemBodyImpl} from './index';
import {ItemBody} from './itemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class ChatMessageImpl extends EntityImpl implements ChatMessage, Parsable {
    /** References to attached objects like files, tabs, meetings etc. */
    public attachments?: ChatMessageAttachment[] | undefined;
    /** The body property */
    public body?: ItemBody | undefined;
    /** If the message was sent in a channel, represents identity of the channel. */
    public channelIdentity?: ChannelIdentity | undefined;
    /** If the message was sent in a chat, represents the identity of the chat. */
    public chatId?: string | undefined;
    /** Timestamp of when the chat message was created. */
    public createdDateTime?: Date | undefined;
    /** Read only. Timestamp at which the chat message was deleted, or null if not deleted. */
    public deletedDateTime?: Date | undefined;
    /** Read-only. Version number of the chat message. */
    public etag?: string | undefined;
    /** Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage. */
    public eventDetail?: EventMessageDetail | undefined;
    /** Details of the sender of the chat message. Can only be set during migration. */
    public from?: ChatMessageFromIdentitySet | undefined;
    /** Content in a message hosted by Microsoft Teams - for example, images or code snippets. */
    public hostedContents?: ChatMessageHostedContent[] | undefined;
    /** The importance of the chat message. The possible values are: normal, high, urgent. */
    public importance?: ChatMessageImportance | undefined;
    /** Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null. */
    public lastEditedDateTime?: Date | undefined;
    /** Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed. */
    public lastModifiedDateTime?: Date | undefined;
    /** Locale of the chat message set by the client. Always set to en-us. */
    public locale?: string | undefined;
    /** List of entities mentioned in the chat message. Supported entities are: user, bot, team, channel, and tag. */
    public mentions?: ChatMessageMention[] | undefined;
    /** The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage. */
    public messageType?: ChatMessageType | undefined;
    /** Defines the properties of a policy violation set by a data loss prevention (DLP) application. */
    public policyViolation?: ChatMessagePolicyViolation | undefined;
    /** Reactions for this chat message (for example, Like). */
    public reactions?: ChatMessageReaction[] | undefined;
    /** Replies for a specified message. Supports $expand for channel messages. */
    public replies?: ChatMessage[] | undefined;
    /** Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.) */
    public replyToId?: string | undefined;
    /** The subject of the chat message, in plaintext. */
    public subject?: string | undefined;
    /** Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat. */
    public summary?: string | undefined;
    /** Read-only. Link to the message in Microsoft Teams. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new chatMessage and sets the default values.
     * @param chatMessageParameterValue 
     */
    public constructor(chatMessageParameterValue?: ChatMessage | undefined) {
        super();
        this.attachments = chatMessageParameterValue?.attachments ;
        this.body = chatMessageParameterValue?.body ;
        this.channelIdentity = chatMessageParameterValue?.channelIdentity ;
        this.chatId = chatMessageParameterValue?.chatId ;
        this.createdDateTime = chatMessageParameterValue?.createdDateTime ;
        this.deletedDateTime = chatMessageParameterValue?.deletedDateTime ;
        this.etag = chatMessageParameterValue?.etag ;
        this.eventDetail = chatMessageParameterValue?.eventDetail ;
        this.from = chatMessageParameterValue?.from ;
        this.hostedContents = chatMessageParameterValue?.hostedContents ;
        this.importance = chatMessageParameterValue?.importance ;
        this.lastEditedDateTime = chatMessageParameterValue?.lastEditedDateTime ;
        this.lastModifiedDateTime = chatMessageParameterValue?.lastModifiedDateTime ;
        this.locale = chatMessageParameterValue?.locale ;
        this.mentions = chatMessageParameterValue?.mentions ;
        this.messageType = chatMessageParameterValue?.messageType ;
        this.policyViolation = chatMessageParameterValue?.policyViolation ;
        this.reactions = chatMessageParameterValue?.reactions ;
        this.replies = chatMessageParameterValue?.replies ;
        this.replyToId = chatMessageParameterValue?.replyToId ;
        this.subject = chatMessageParameterValue?.subject ;
        this.summary = chatMessageParameterValue?.summary ;
        this.webUrl = chatMessageParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<ChatMessageAttachmentImpl>(createChatMessageAttachmentFromDiscriminatorValue); },
            "body": n => { this.body = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "channelIdentity": n => { this.channelIdentity = n.getObjectValue<ChannelIdentityImpl>(createChannelIdentityFromDiscriminatorValue); },
            "chatId": n => { this.chatId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deletedDateTime": n => { this.deletedDateTime = n.getDateValue(); },
            "etag": n => { this.etag = n.getStringValue(); },
            "eventDetail": n => { this.eventDetail = n.getObjectValue<EventMessageDetailImpl>(createEventMessageDetailFromDiscriminatorValue); },
            "from": n => { this.from = n.getObjectValue<ChatMessageFromIdentitySetImpl>(createChatMessageFromIdentitySetFromDiscriminatorValue); },
            "hostedContents": n => { this.hostedContents = n.getCollectionOfObjectValues<ChatMessageHostedContentImpl>(createChatMessageHostedContentFromDiscriminatorValue); },
            "importance": n => { this.importance = n.getEnumValue<ChatMessageImportance>(ChatMessageImportance); },
            "lastEditedDateTime": n => { this.lastEditedDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "locale": n => { this.locale = n.getStringValue(); },
            "mentions": n => { this.mentions = n.getCollectionOfObjectValues<ChatMessageMentionImpl>(createChatMessageMentionFromDiscriminatorValue); },
            "messageType": n => { this.messageType = n.getEnumValue<ChatMessageType>(ChatMessageType); },
            "policyViolation": n => { this.policyViolation = n.getObjectValue<ChatMessagePolicyViolationImpl>(createChatMessagePolicyViolationFromDiscriminatorValue); },
            "reactions": n => { this.reactions = n.getCollectionOfObjectValues<ChatMessageReactionImpl>(createChatMessageReactionFromDiscriminatorValue); },
            "replies": n => { this.replies = n.getCollectionOfObjectValues<ChatMessageImpl>(createChatMessageFromDiscriminatorValue); },
            "replyToId": n => { this.replyToId = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attachments && this.attachments.length != 0){        const attachmentsArrValue: ChatMessageAttachmentImpl[] = []; this.attachments?.forEach(element => {attachmentsArrValue.push(new ChatMessageAttachmentImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageAttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.body){
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.channelIdentity){
        writer.writeObjectValue<ChannelIdentityImpl>("channelIdentity", new ChannelIdentityImpl(this.channelIdentity));
        }
        if(this.chatId){
        writer.writeStringValue("chatId", this.chatId);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.deletedDateTime){
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
        }
        if(this.etag){
        writer.writeStringValue("etag", this.etag);
        }
        if(this.eventDetail){
        writer.writeObjectValue<EventMessageDetailImpl>("eventDetail", new EventMessageDetailImpl(this.eventDetail));
        }
        if(this.from){
        writer.writeObjectValue<ChatMessageFromIdentitySetImpl>("from", new ChatMessageFromIdentitySetImpl(this.from));
        }
        if(this.hostedContents && this.hostedContents.length != 0){        const hostedContentsArrValue: ChatMessageHostedContentImpl[] = []; this.hostedContents?.forEach(element => {hostedContentsArrValue.push(new ChatMessageHostedContentImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageHostedContentImpl>("hostedContents", hostedContentsArrValue);
        }
        if(this.importance){
        writer.writeEnumValue<ChatMessageImportance>("importance", this.importance);
        }
        if(this.lastEditedDateTime){
        writer.writeDateValue("lastEditedDateTime", this.lastEditedDateTime);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.locale){
        writer.writeStringValue("locale", this.locale);
        }
        if(this.mentions && this.mentions.length != 0){        const mentionsArrValue: ChatMessageMentionImpl[] = []; this.mentions?.forEach(element => {mentionsArrValue.push(new ChatMessageMentionImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageMentionImpl>("mentions", mentionsArrValue);
        }
        if(this.messageType){
        writer.writeEnumValue<ChatMessageType>("messageType", this.messageType);
        }
        if(this.policyViolation){
        writer.writeObjectValue<ChatMessagePolicyViolationImpl>("policyViolation", new ChatMessagePolicyViolationImpl(this.policyViolation));
        }
        if(this.reactions && this.reactions.length != 0){        const reactionsArrValue: ChatMessageReactionImpl[] = []; this.reactions?.forEach(element => {reactionsArrValue.push(new ChatMessageReactionImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageReactionImpl>("reactions", reactionsArrValue);
        }
        if(this.replies && this.replies.length != 0){        const repliesArrValue: ChatMessageImpl[] = []; this.replies?.forEach(element => {repliesArrValue.push(new ChatMessageImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageImpl>("replies", repliesArrValue);
        }
        if(this.replyToId){
        writer.writeStringValue("replyToId", this.replyToId);
        }
        if(this.subject){
        writer.writeStringValue("subject", this.subject);
        }
        if(this.summary){
        writer.writeStringValue("summary", this.summary);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
