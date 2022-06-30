import {ConversationThread} from './conversationThread';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {EntityImpl, PostImpl, RecipientImpl} from './index';
import {Post} from './post';
import {Recipient} from './recipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ConversationThreadImpl extends EntityImpl implements ConversationThread {
    /** The Cc: recipients for the thread. Returned only on $select. */
    private _ccRecipients?: Recipient[] | undefined;
    /** Indicates whether any of the posts within this thread has at least one attachment. Returned by default. */
    private _hasAttachments?: boolean | undefined;
    /** Indicates if the thread is locked. Returned by default. */
    private _isLocked?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. */
    private _lastDeliveredDateTime?: Date | undefined;
    /** The posts property */
    private _posts?: Post[] | undefined;
    /** A short summary from the body of the latest post in this conversation. Returned by default. */
    private _preview?: string | undefined;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default. */
    private _topic?: string | undefined;
    /** The To: recipients for the thread. Returned only on $select. */
    private _toRecipients?: Recipient[] | undefined;
    /** All the users that sent a message to this thread. Returned by default. */
    private _uniqueSenders?: string[] | undefined;
    /**
     * Gets the ccRecipients property value. The Cc: recipients for the thread. Returned only on $select.
     * @returns a RecipientInterface
     */
    public get ccRecipients() {
        return this._ccRecipients;
    };
    /**
     * Sets the ccRecipients property value. The Cc: recipients for the thread. Returned only on $select.
     * @param value Value to set for the ccRecipients property.
     */
    public set ccRecipients(value: Recipient[] | undefined) {
        if(value) {
            const ccRecipientsArrValue: RecipientImpl[] = [];
            this.ccRecipients?.forEach(element => {
                ccRecipientsArrValue.push((element instanceof RecipientImpl? element:new RecipientImpl(element)));
            });
            this._ccRecipients = ccRecipientsArrValue;
        }
    };
    /**
     * Instantiates a new conversationThread and sets the default values.
     * @param conversationThreadParameterValue 
     */
    public constructor(conversationThreadParameterValue?: ConversationThread | undefined) {
        super(conversationThreadParameterValue);
        this._ccRecipients = conversationThreadParameterValue?.ccRecipients;
        this._hasAttachments = conversationThreadParameterValue?.hasAttachments;
        this._isLocked = conversationThreadParameterValue?.isLocked;
        this._lastDeliveredDateTime = conversationThreadParameterValue?.lastDeliveredDateTime;
        this._posts = conversationThreadParameterValue?.posts;
        this._preview = conversationThreadParameterValue?.preview;
        this._topic = conversationThreadParameterValue?.topic;
        this._toRecipients = conversationThreadParameterValue?.toRecipients;
        this._uniqueSenders = conversationThreadParameterValue?.uniqueSenders;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ccRecipients": n => { this.ccRecipients = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "isLocked": n => { this.isLocked = n.getBooleanValue(); },
            "lastDeliveredDateTime": n => { this.lastDeliveredDateTime = n.getDateValue(); },
            "posts": n => { this.posts = n.getCollectionOfObjectValues<PostImpl>(createPostFromDiscriminatorValue); },
            "preview": n => { this.preview = n.getStringValue(); },
            "topic": n => { this.topic = n.getStringValue(); },
            "toRecipients": n => { this.toRecipients = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "uniqueSenders": n => { this.uniqueSenders = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the hasAttachments property value. Indicates whether any of the posts within this thread has at least one attachment. Returned by default.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether any of the posts within this thread has at least one attachment. Returned by default.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        if(value) {
            this._hasAttachments = value;
        }
    };
    /**
     * Gets the isLocked property value. Indicates if the thread is locked. Returned by default.
     * @returns a boolean
     */
    public get isLocked() {
        return this._isLocked;
    };
    /**
     * Sets the isLocked property value. Indicates if the thread is locked. Returned by default.
     * @param value Value to set for the isLocked property.
     */
    public set isLocked(value: boolean | undefined) {
        if(value) {
            this._isLocked = value;
        }
    };
    /**
     * Gets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default.
     * @returns a Date
     */
    public get lastDeliveredDateTime() {
        return this._lastDeliveredDateTime;
    };
    /**
     * Sets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default.
     * @param value Value to set for the lastDeliveredDateTime property.
     */
    public set lastDeliveredDateTime(value: Date | undefined) {
        if(value) {
            this._lastDeliveredDateTime = value;
        }
    };
    /**
     * Gets the posts property value. The posts property
     * @returns a PostInterface
     */
    public get posts() {
        return this._posts;
    };
    /**
     * Sets the posts property value. The posts property
     * @param value Value to set for the posts property.
     */
    public set posts(value: Post[] | undefined) {
        if(value) {
            const postsArrValue: PostImpl[] = [];
            this.posts?.forEach(element => {
                postsArrValue.push((element instanceof PostImpl? element:new PostImpl(element)));
            });
            this._posts = postsArrValue;
        }
    };
    /**
     * Gets the preview property value. A short summary from the body of the latest post in this conversation. Returned by default.
     * @returns a string
     */
    public get preview() {
        return this._preview;
    };
    /**
     * Sets the preview property value. A short summary from the body of the latest post in this conversation. Returned by default.
     * @param value Value to set for the preview property.
     */
    public set preview(value: string | undefined) {
        if(value) {
            this._preview = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ccRecipients && this.ccRecipients.length != 0){        const ccRecipientsArrValue: RecipientImpl[] = [];
        this.ccRecipients?.forEach(element => {
            ccRecipientsArrValue.push((element instanceof RecipientImpl? element:new RecipientImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RecipientImpl>("ccRecipients", ccRecipientsArrValue);
        }
        if(this.hasAttachments){
            writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.isLocked){
            writer.writeBooleanValue("isLocked", this.isLocked);
        }
        if(this.lastDeliveredDateTime){
            writer.writeDateValue("lastDeliveredDateTime", this.lastDeliveredDateTime);
        }
        if(this.posts && this.posts.length != 0){        const postsArrValue: PostImpl[] = [];
        this.posts?.forEach(element => {
            postsArrValue.push((element instanceof PostImpl? element:new PostImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PostImpl>("posts", postsArrValue);
        }
        if(this.preview){
            writer.writeStringValue("preview", this.preview);
        }
        if(this.topic){
            writer.writeStringValue("topic", this.topic);
        }
        if(this.toRecipients && this.toRecipients.length != 0){        const toRecipientsArrValue: RecipientImpl[] = [];
        this.toRecipients?.forEach(element => {
            toRecipientsArrValue.push((element instanceof RecipientImpl? element:new RecipientImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RecipientImpl>("toRecipients", toRecipientsArrValue);
        }
        if(this.uniqueSenders){
            writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", this.uniqueSenders);
        }
    };
    /**
     * Gets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        if(value) {
            this._topic = value;
        }
    };
    /**
     * Gets the toRecipients property value. The To: recipients for the thread. Returned only on $select.
     * @returns a RecipientInterface
     */
    public get toRecipients() {
        return this._toRecipients;
    };
    /**
     * Sets the toRecipients property value. The To: recipients for the thread. Returned only on $select.
     * @param value Value to set for the toRecipients property.
     */
    public set toRecipients(value: Recipient[] | undefined) {
        if(value) {
            const toRecipientsArrValue: RecipientImpl[] = [];
            this.toRecipients?.forEach(element => {
                toRecipientsArrValue.push((element instanceof RecipientImpl? element:new RecipientImpl(element)));
            });
            this._toRecipients = toRecipientsArrValue;
        }
    };
    /**
     * Gets the uniqueSenders property value. All the users that sent a message to this thread. Returned by default.
     * @returns a string
     */
    public get uniqueSenders() {
        return this._uniqueSenders;
    };
    /**
     * Sets the uniqueSenders property value. All the users that sent a message to this thread. Returned by default.
     * @param value Value to set for the uniqueSenders property.
     */
    public set uniqueSenders(value: string[] | undefined) {
        if(value) {
            this._uniqueSenders = value;
        }
    };
}
