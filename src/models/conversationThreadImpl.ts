import {ConversationThread} from './conversationThread';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {EntityImpl, PostImpl, RecipientImpl} from './index';
import {Post} from './post';
import {Recipient} from './recipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ConversationThreadImpl extends EntityImpl implements ConversationThread, Parsable {
    /** The Cc: recipients for the thread. Returned only on $select. */
    public ccRecipients?: Recipient[] | undefined;
    /** Indicates whether any of the posts within this thread has at least one attachment. Returned by default. */
    public hasAttachments?: boolean | undefined;
    /** Indicates if the thread is locked. Returned by default. */
    public isLocked?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. */
    public lastDeliveredDateTime?: Date | undefined;
    /** Read-only. Nullable. */
    public posts?: Post[] | undefined;
    /** A short summary from the body of the latest post in this conversation. Returned by default. */
    public preview?: string | undefined;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default. */
    public topic?: string | undefined;
    /** The To: recipients for the thread. Returned only on $select. */
    public toRecipients?: Recipient[] | undefined;
    /** All the users that sent a message to this thread. Returned by default. */
    public uniqueSenders?: string[] | undefined;
    /**
     * Instantiates a new conversationThread and sets the default values.
     * @param conversationThreadParameterValue 
     */
    public constructor(conversationThreadParameterValue?: ConversationThread | undefined) {
        super();
        this.ccRecipients = conversationThreadParameterValue?.ccRecipients ;
        this.hasAttachments = conversationThreadParameterValue?.hasAttachments ;
        this.isLocked = conversationThreadParameterValue?.isLocked ;
        this.lastDeliveredDateTime = conversationThreadParameterValue?.lastDeliveredDateTime ;
        this.posts = conversationThreadParameterValue?.posts ;
        this.preview = conversationThreadParameterValue?.preview ;
        this.topic = conversationThreadParameterValue?.topic ;
        this.toRecipients = conversationThreadParameterValue?.toRecipients ;
        this.uniqueSenders = conversationThreadParameterValue?.uniqueSenders ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ccRecipients && this.ccRecipients.length != 0){        const ccRecipientsArrValue: RecipientImpl[] = []; this.ccRecipients?.forEach(element => {ccRecipientsArrValue.push(new RecipientImpl(element));});
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
        if(this.posts && this.posts.length != 0){        const postsArrValue: PostImpl[] = []; this.posts?.forEach(element => {postsArrValue.push(new PostImpl(element));});
        writer.writeCollectionOfObjectValues<PostImpl>("posts", postsArrValue);
        }
        if(this.preview){
        writer.writeStringValue("preview", this.preview);
        }
        if(this.topic){
        writer.writeStringValue("topic", this.topic);
        }
        if(this.toRecipients && this.toRecipients.length != 0){        const toRecipientsArrValue: RecipientImpl[] = []; this.toRecipients?.forEach(element => {toRecipientsArrValue.push(new RecipientImpl(element));});
        writer.writeCollectionOfObjectValues<RecipientImpl>("toRecipients", toRecipientsArrValue);
        }
        if(this.uniqueSenders){
        writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", this.uniqueSenders);
        }
    };
}
