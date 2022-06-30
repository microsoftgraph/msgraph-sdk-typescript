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
export class ChatMessageImpl extends EntityImpl implements ChatMessage {
    /** References to attached objects like files, tabs, meetings etc. */
    private _attachments?: ChatMessageAttachment[] | undefined;
    /** The body property */
    private _body?: ItemBody | undefined;
    /** If the message was sent in a channel, represents identity of the channel. */
    private _channelIdentity?: ChannelIdentity | undefined;
    /** If the message was sent in a chat, represents the identity of the chat. */
    private _chatId?: string | undefined;
    /** Timestamp of when the chat message was created. */
    private _createdDateTime?: Date | undefined;
    /** Read only. Timestamp at which the chat message was deleted, or null if not deleted. */
    private _deletedDateTime?: Date | undefined;
    /** Read-only. Version number of the chat message. */
    private _etag?: string | undefined;
    /** Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage. */
    private _eventDetail?: EventMessageDetail | undefined;
    /** Details of the sender of the chat message. Can only be set during migration. */
    private _from?: ChatMessageFromIdentitySet | undefined;
    /** Content in a message hosted by Microsoft Teams - for example, images or code snippets. */
    private _hostedContents?: ChatMessageHostedContent[] | undefined;
    /** The importance of the chat message. The possible values are: normal, high, urgent. */
    private _importance?: ChatMessageImportance | undefined;
    /** Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null. */
    private _lastEditedDateTime?: Date | undefined;
    /** Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Locale of the chat message set by the client. Always set to en-us. */
    private _locale?: string | undefined;
    /** List of entities mentioned in the chat message. Supported entities are: user, bot, team, channel, and tag. */
    private _mentions?: ChatMessageMention[] | undefined;
    /** The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage. */
    private _messageType?: ChatMessageType | undefined;
    /** Defines the properties of a policy violation set by a data loss prevention (DLP) application. */
    private _policyViolation?: ChatMessagePolicyViolation | undefined;
    /** Reactions for this chat message (for example, Like). */
    private _reactions?: ChatMessageReaction[] | undefined;
    /** Replies for a specified message. Supports $expand for channel messages. */
    private _replies?: ChatMessage[] | undefined;
    /** Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.) */
    private _replyToId?: string | undefined;
    /** The subject of the chat message, in plaintext. */
    private _subject?: string | undefined;
    /** Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat. */
    private _summary?: string | undefined;
    /** Read-only. Link to the message in Microsoft Teams. */
    private _webUrl?: string | undefined;
    /**
     * Gets the attachments property value. References to attached objects like files, tabs, meetings etc.
     * @returns a ChatMessageAttachmentInterface
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. References to attached objects like files, tabs, meetings etc.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: ChatMessageAttachment[] | undefined) {
        if(value) {
            const attachmentsArrValue: ChatMessageAttachmentImpl[] = [];
            this.attachments?.forEach(element => {
                attachmentsArrValue.push((element instanceof ChatMessageAttachmentImpl? element:new ChatMessageAttachmentImpl(element)));
            });
            this._attachments = attachmentsArrValue;
        }
    };
    /**
     * Gets the body property value. The body property
     * @returns a ItemBodyInterface
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The body property
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        if(value) {
            this._body = value instanceof ItemBodyImpl? value : new ItemBodyImpl(value);
        }
    };
    /**
     * Gets the channelIdentity property value. If the message was sent in a channel, represents identity of the channel.
     * @returns a ChannelIdentityInterface
     */
    public get channelIdentity() {
        return this._channelIdentity;
    };
    /**
     * Sets the channelIdentity property value. If the message was sent in a channel, represents identity of the channel.
     * @param value Value to set for the channelIdentity property.
     */
    public set channelIdentity(value: ChannelIdentity | undefined) {
        if(value) {
            this._channelIdentity = value instanceof ChannelIdentityImpl? value : new ChannelIdentityImpl(value);
        }
    };
    /**
     * Gets the chatId property value. If the message was sent in a chat, represents the identity of the chat.
     * @returns a string
     */
    public get chatId() {
        return this._chatId;
    };
    /**
     * Sets the chatId property value. If the message was sent in a chat, represents the identity of the chat.
     * @param value Value to set for the chatId property.
     */
    public set chatId(value: string | undefined) {
        if(value) {
            this._chatId = value;
        }
    };
    /**
     * Instantiates a new chatMessage and sets the default values.
     * @param chatMessageParameterValue 
     */
    public constructor(chatMessageParameterValue?: ChatMessage | undefined) {
        super(chatMessageParameterValue);
        this._attachments = chatMessageParameterValue?.attachments;
        this._body = chatMessageParameterValue?.body;
        this._channelIdentity = chatMessageParameterValue?.channelIdentity;
        this._chatId = chatMessageParameterValue?.chatId;
        this._createdDateTime = chatMessageParameterValue?.createdDateTime;
        this._deletedDateTime = chatMessageParameterValue?.deletedDateTime;
        this._etag = chatMessageParameterValue?.etag;
        this._eventDetail = chatMessageParameterValue?.eventDetail;
        this._from = chatMessageParameterValue?.from;
        this._hostedContents = chatMessageParameterValue?.hostedContents;
        this._importance = chatMessageParameterValue?.importance;
        this._lastEditedDateTime = chatMessageParameterValue?.lastEditedDateTime;
        this._lastModifiedDateTime = chatMessageParameterValue?.lastModifiedDateTime;
        this._locale = chatMessageParameterValue?.locale;
        this._mentions = chatMessageParameterValue?.mentions;
        this._messageType = chatMessageParameterValue?.messageType;
        this._policyViolation = chatMessageParameterValue?.policyViolation;
        this._reactions = chatMessageParameterValue?.reactions;
        this._replies = chatMessageParameterValue?.replies;
        this._replyToId = chatMessageParameterValue?.replyToId;
        this._subject = chatMessageParameterValue?.subject;
        this._summary = chatMessageParameterValue?.summary;
        this._webUrl = chatMessageParameterValue?.webUrl;
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the chat message was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the chat message was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the deletedDateTime property value. Read only. Timestamp at which the chat message was deleted, or null if not deleted.
     * @returns a Date
     */
    public get deletedDateTime() {
        return this._deletedDateTime;
    };
    /**
     * Sets the deletedDateTime property value. Read only. Timestamp at which the chat message was deleted, or null if not deleted.
     * @param value Value to set for the deletedDateTime property.
     */
    public set deletedDateTime(value: Date | undefined) {
        if(value) {
            this._deletedDateTime = value;
        }
    };
    /**
     * Gets the etag property value. Read-only. Version number of the chat message.
     * @returns a string
     */
    public get etag() {
        return this._etag;
    };
    /**
     * Sets the etag property value. Read-only. Version number of the chat message.
     * @param value Value to set for the etag property.
     */
    public set etag(value: string | undefined) {
        if(value) {
            this._etag = value;
        }
    };
    /**
     * Gets the eventDetail property value. Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.
     * @returns a EventMessageDetailInterface
     */
    public get eventDetail() {
        return this._eventDetail;
    };
    /**
     * Sets the eventDetail property value. Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.
     * @param value Value to set for the eventDetail property.
     */
    public set eventDetail(value: EventMessageDetail | undefined) {
        if(value) {
            this._eventDetail = value instanceof EventMessageDetailImpl? value : new EventMessageDetailImpl(value);
        }
    };
    /**
     * Gets the from property value. Details of the sender of the chat message. Can only be set during migration.
     * @returns a ChatMessageFromIdentitySetInterface
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. Details of the sender of the chat message. Can only be set during migration.
     * @param value Value to set for the from property.
     */
    public set from(value: ChatMessageFromIdentitySet | undefined) {
        if(value) {
            this._from = value instanceof ChatMessageFromIdentitySetImpl? value : new ChatMessageFromIdentitySetImpl(value);
        }
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
     * Gets the hostedContents property value. Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     * @returns a ChatMessageHostedContentInterface
     */
    public get hostedContents() {
        return this._hostedContents;
    };
    /**
     * Sets the hostedContents property value. Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     * @param value Value to set for the hostedContents property.
     */
    public set hostedContents(value: ChatMessageHostedContent[] | undefined) {
        if(value) {
            const hostedContentsArrValue: ChatMessageHostedContentImpl[] = [];
            this.hostedContents?.forEach(element => {
                hostedContentsArrValue.push((element instanceof ChatMessageHostedContentImpl? element:new ChatMessageHostedContentImpl(element)));
            });
            this._hostedContents = hostedContentsArrValue;
        }
    };
    /**
     * Gets the importance property value. The importance of the chat message. The possible values are: normal, high, urgent.
     * @returns a chatMessageImportance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance of the chat message. The possible values are: normal, high, urgent.
     * @param value Value to set for the importance property.
     */
    public set importance(value: ChatMessageImportance | undefined) {
        if(value) {
            this._importance = value;
        }
    };
    /**
     * Gets the lastEditedDateTime property value. Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
     * @returns a Date
     */
    public get lastEditedDateTime() {
        return this._lastEditedDateTime;
    };
    /**
     * Sets the lastEditedDateTime property value. Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
     * @param value Value to set for the lastEditedDateTime property.
     */
    public set lastEditedDateTime(value: Date | undefined) {
        if(value) {
            this._lastEditedDateTime = value;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the locale property value. Locale of the chat message set by the client. Always set to en-us.
     * @returns a string
     */
    public get locale() {
        return this._locale;
    };
    /**
     * Sets the locale property value. Locale of the chat message set by the client. Always set to en-us.
     * @param value Value to set for the locale property.
     */
    public set locale(value: string | undefined) {
        if(value) {
            this._locale = value;
        }
    };
    /**
     * Gets the mentions property value. List of entities mentioned in the chat message. Supported entities are: user, bot, team, channel, and tag.
     * @returns a ChatMessageMentionInterface
     */
    public get mentions() {
        return this._mentions;
    };
    /**
     * Sets the mentions property value. List of entities mentioned in the chat message. Supported entities are: user, bot, team, channel, and tag.
     * @param value Value to set for the mentions property.
     */
    public set mentions(value: ChatMessageMention[] | undefined) {
        if(value) {
            const mentionsArrValue: ChatMessageMentionImpl[] = [];
            this.mentions?.forEach(element => {
                mentionsArrValue.push((element instanceof ChatMessageMentionImpl? element:new ChatMessageMentionImpl(element)));
            });
            this._mentions = mentionsArrValue;
        }
    };
    /**
     * Gets the messageType property value. The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage.
     * @returns a chatMessageType
     */
    public get messageType() {
        return this._messageType;
    };
    /**
     * Sets the messageType property value. The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage.
     * @param value Value to set for the messageType property.
     */
    public set messageType(value: ChatMessageType | undefined) {
        if(value) {
            this._messageType = value;
        }
    };
    /**
     * Gets the policyViolation property value. Defines the properties of a policy violation set by a data loss prevention (DLP) application.
     * @returns a ChatMessagePolicyViolationInterface
     */
    public get policyViolation() {
        return this._policyViolation;
    };
    /**
     * Sets the policyViolation property value. Defines the properties of a policy violation set by a data loss prevention (DLP) application.
     * @param value Value to set for the policyViolation property.
     */
    public set policyViolation(value: ChatMessagePolicyViolation | undefined) {
        if(value) {
            this._policyViolation = value instanceof ChatMessagePolicyViolationImpl? value : new ChatMessagePolicyViolationImpl(value);
        }
    };
    /**
     * Gets the reactions property value. Reactions for this chat message (for example, Like).
     * @returns a ChatMessageReactionInterface
     */
    public get reactions() {
        return this._reactions;
    };
    /**
     * Sets the reactions property value. Reactions for this chat message (for example, Like).
     * @param value Value to set for the reactions property.
     */
    public set reactions(value: ChatMessageReaction[] | undefined) {
        if(value) {
            const reactionsArrValue: ChatMessageReactionImpl[] = [];
            this.reactions?.forEach(element => {
                reactionsArrValue.push((element instanceof ChatMessageReactionImpl? element:new ChatMessageReactionImpl(element)));
            });
            this._reactions = reactionsArrValue;
        }
    };
    /**
     * Gets the replies property value. Replies for a specified message. Supports $expand for channel messages.
     * @returns a ChatMessageInterface
     */
    public get replies() {
        return this._replies;
    };
    /**
     * Sets the replies property value. Replies for a specified message. Supports $expand for channel messages.
     * @param value Value to set for the replies property.
     */
    public set replies(value: ChatMessage[] | undefined) {
        if(value) {
            const repliesArrValue: ChatMessageImpl[] = [];
            this.replies?.forEach(element => {
                repliesArrValue.push((element instanceof ChatMessageImpl? element:new ChatMessageImpl(element)));
            });
            this._replies = repliesArrValue;
        }
    };
    /**
     * Gets the replyToId property value. Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
     * @returns a string
     */
    public get replyToId() {
        return this._replyToId;
    };
    /**
     * Sets the replyToId property value. Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
     * @param value Value to set for the replyToId property.
     */
    public set replyToId(value: string | undefined) {
        if(value) {
            this._replyToId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attachments && this.attachments.length != 0){        const attachmentsArrValue: ChatMessageAttachmentImpl[] = [];
        this.attachments?.forEach(element => {
            attachmentsArrValue.push((element instanceof ChatMessageAttachmentImpl? element:new ChatMessageAttachmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChatMessageAttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.body){
            writer.writeObjectValue<ItemBodyImpl>("body", (!this.body || this.body instanceof ItemBodyImpl? this.body : new ItemBodyImpl(this.body)));
        }
        if(this.channelIdentity){
            writer.writeObjectValue<ChannelIdentityImpl>("channelIdentity", (!this.channelIdentity || this.channelIdentity instanceof ChannelIdentityImpl? this.channelIdentity : new ChannelIdentityImpl(this.channelIdentity)));
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
            writer.writeObjectValue<EventMessageDetailImpl>("eventDetail", (!this.eventDetail || this.eventDetail instanceof EventMessageDetailImpl? this.eventDetail : new EventMessageDetailImpl(this.eventDetail)));
        }
        if(this.from){
            writer.writeObjectValue<ChatMessageFromIdentitySetImpl>("from", (!this.from || this.from instanceof ChatMessageFromIdentitySetImpl? this.from : new ChatMessageFromIdentitySetImpl(this.from)));
        }
        if(this.hostedContents && this.hostedContents.length != 0){        const hostedContentsArrValue: ChatMessageHostedContentImpl[] = [];
        this.hostedContents?.forEach(element => {
            hostedContentsArrValue.push((element instanceof ChatMessageHostedContentImpl? element:new ChatMessageHostedContentImpl(element)));
        });
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
        if(this.mentions && this.mentions.length != 0){        const mentionsArrValue: ChatMessageMentionImpl[] = [];
        this.mentions?.forEach(element => {
            mentionsArrValue.push((element instanceof ChatMessageMentionImpl? element:new ChatMessageMentionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChatMessageMentionImpl>("mentions", mentionsArrValue);
        }
        if(this.messageType){
            writer.writeEnumValue<ChatMessageType>("messageType", this.messageType);
        }
        if(this.policyViolation){
            writer.writeObjectValue<ChatMessagePolicyViolationImpl>("policyViolation", (!this.policyViolation || this.policyViolation instanceof ChatMessagePolicyViolationImpl? this.policyViolation : new ChatMessagePolicyViolationImpl(this.policyViolation)));
        }
        if(this.reactions && this.reactions.length != 0){        const reactionsArrValue: ChatMessageReactionImpl[] = [];
        this.reactions?.forEach(element => {
            reactionsArrValue.push((element instanceof ChatMessageReactionImpl? element:new ChatMessageReactionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChatMessageReactionImpl>("reactions", reactionsArrValue);
        }
        if(this.replies && this.replies.length != 0){        const repliesArrValue: ChatMessageImpl[] = [];
        this.replies?.forEach(element => {
            repliesArrValue.push((element instanceof ChatMessageImpl? element:new ChatMessageImpl(element)));
        });
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
    /**
     * Gets the subject property value. The subject of the chat message, in plaintext.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject of the chat message, in plaintext.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        if(value) {
            this._subject = value;
        }
    };
    /**
     * Gets the summary property value. Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        if(value) {
            this._summary = value;
        }
    };
    /**
     * Gets the webUrl property value. Read-only. Link to the message in Microsoft Teams.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Read-only. Link to the message in Microsoft Teams.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
