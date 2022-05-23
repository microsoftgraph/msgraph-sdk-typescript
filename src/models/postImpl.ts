import {Attachment} from './attachment';
import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {Extension} from './extension';
import {AttachmentImpl, ExtensionImpl, ItemBodyImpl, MultiValueLegacyExtendedPropertyImpl, OutlookItemImpl, RecipientImpl, SingleValueLegacyExtendedPropertyImpl} from './index';
import {ItemBody} from './itemBody';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {Post} from './post';
import {Recipient} from './recipient';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PostImpl extends OutlookItemImpl implements Parsable, Post {
    /** The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand. */
    public attachments?: Attachment[] | undefined;
    /** The contents of the post. This is a default property. This property can be null. */
    public body?: ItemBody | undefined;
    /** Unique ID of the conversation. Read-only. */
    public conversationId?: string | undefined;
    /** Unique ID of the conversation thread. Read-only. */
    public conversationThreadId?: string | undefined;
    /** The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand. */
    public extensions?: Extension[] | undefined;
    /** The from property */
    public from?: Recipient | undefined;
    /** Indicates whether the post has at least one attachment. This is a default property. */
    public hasAttachments?: boolean | undefined;
    /** The earlier post that this post is replying to in the conversationThread. Read-only. Supports $expand. */
    public inReplyTo?: Post | undefined;
    /** The collection of multi-value extended properties defined for the post. Read-only. Nullable. */
    public multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** Conversation participants that were added to the thread as part of this post. */
    public newParticipants?: Recipient[] | undefined;
    /** Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public receivedDateTime?: Date | undefined;
    /** Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property. */
    public sender?: Recipient | undefined;
    /** The collection of single-value extended properties defined for the post. Read-only. Nullable. */
    public singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Instantiates a new post and sets the default values.
     * @param postParameterValue 
     */
    public constructor(postParameterValue?: Post | undefined) {
        super();
        this.attachments = postParameterValue?.attachments ;
        this.body = postParameterValue?.body ;
        this.conversationId = postParameterValue?.conversationId ;
        this.conversationThreadId = postParameterValue?.conversationThreadId ;
        this.extensions = postParameterValue?.extensions ;
        this.from = postParameterValue?.from ;
        this.hasAttachments = postParameterValue?.hasAttachments ;
        this.inReplyTo = postParameterValue?.inReplyTo ;
        this.multiValueExtendedProperties = postParameterValue?.multiValueExtendedProperties ;
        this.newParticipants = postParameterValue?.newParticipants ;
        this.receivedDateTime = postParameterValue?.receivedDateTime ;
        this.sender = postParameterValue?.sender ;
        this.singleValueExtendedProperties = postParameterValue?.singleValueExtendedProperties ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<AttachmentImpl>(createAttachmentFromDiscriminatorValue); },
            "body": n => { this.body = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "conversationId": n => { this.conversationId = n.getStringValue(); },
            "conversationThreadId": n => { this.conversationThreadId = n.getStringValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "from": n => { this.from = n.getObjectValue<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "inReplyTo": n => { this.inReplyTo = n.getObjectValue<PostImpl>(createPostFromDiscriminatorValue); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "newParticipants": n => { this.newParticipants = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "receivedDateTime": n => { this.receivedDateTime = n.getDateValue(); },
            "sender": n => { this.sender = n.getObjectValue<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attachments && this.attachments.length != 0){        const attachmentsArrValue: AttachmentImpl[] = []; this.attachments?.forEach(element => {attachmentsArrValue.push(new AttachmentImpl(element));});
        writer.writeCollectionOfObjectValues<AttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.body){
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.conversationId){
        writer.writeStringValue("conversationId", this.conversationId);
        }
        if(this.conversationThreadId){
        writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.from){
        writer.writeObjectValue<RecipientImpl>("from", new RecipientImpl(this.from));
        }
        if(this.hasAttachments){
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.inReplyTo){
        writer.writeObjectValue<PostImpl>("inReplyTo", new PostImpl(this.inReplyTo));
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(new MultiValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.newParticipants && this.newParticipants.length != 0){        const newParticipantsArrValue: RecipientImpl[] = []; this.newParticipants?.forEach(element => {newParticipantsArrValue.push(new RecipientImpl(element));});
        writer.writeCollectionOfObjectValues<RecipientImpl>("newParticipants", newParticipantsArrValue);
        }
        if(this.receivedDateTime){
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        }
        if(this.sender){
        writer.writeObjectValue<RecipientImpl>("sender", new RecipientImpl(this.sender));
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(new SingleValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
    };
}
