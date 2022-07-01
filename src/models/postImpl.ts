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

export class PostImpl extends OutlookItemImpl implements Post {
    /** The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand. */
    private _attachments?: Attachment[] | undefined;
    /** The contents of the post. This is a default property. This property can be null. */
    private _body?: ItemBody | undefined;
    /** Unique ID of the conversation. Read-only. */
    private _conversationId?: string | undefined;
    /** Unique ID of the conversation thread. Read-only. */
    private _conversationThreadId?: string | undefined;
    /** The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand. */
    private _extensions?: Extension[] | undefined;
    /** The from property */
    private _from?: Recipient | undefined;
    /** Indicates whether the post has at least one attachment. This is a default property. */
    private _hasAttachments?: boolean | undefined;
    /** The earlier post that this post is replying to in the conversationThread. Read-only. Supports $expand. */
    private _inReplyTo?: Post | undefined;
    /** The collection of multi-value extended properties defined for the post. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** Conversation participants that were added to the thread as part of this post. */
    private _newParticipants?: Recipient[] | undefined;
    /** Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _receivedDateTime?: Date | undefined;
    /** Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property. */
    private _sender?: Recipient | undefined;
    /** The collection of single-value extended properties defined for the post. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the attachments property value. The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand.
     * @returns a AttachmentInterface
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        if(value) {
            const attachmentsArrValue: AttachmentImpl[] = [];
            this.attachments?.forEach(element => {
                attachmentsArrValue.push((element instanceof AttachmentImpl? element as AttachmentImpl:new AttachmentImpl(element)));
            });
            this._attachments = attachmentsArrValue;
        }
    };
    /**
     * Gets the body property value. The contents of the post. This is a default property. This property can be null.
     * @returns a ItemBodyInterface
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The contents of the post. This is a default property. This property can be null.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        if(value) {
            this._body = value instanceof ItemBodyImpl? value as ItemBodyImpl: new ItemBodyImpl(value);
        }
    };
    /**
     * Instantiates a new Post and sets the default values.
     * @param postParameterValue 
     */
    public constructor(postParameterValue?: Post | undefined) {
        super(postParameterValue);
        this._attachments = postParameterValue?.attachments;
        this._body = postParameterValue?.body;
        this._conversationId = postParameterValue?.conversationId;
        this._conversationThreadId = postParameterValue?.conversationThreadId;
        this._extensions = postParameterValue?.extensions;
        this._from = postParameterValue?.from;
        this._hasAttachments = postParameterValue?.hasAttachments;
        this._inReplyTo = postParameterValue?.inReplyTo;
        this._multiValueExtendedProperties = postParameterValue?.multiValueExtendedProperties;
        this._newParticipants = postParameterValue?.newParticipants;
        this._receivedDateTime = postParameterValue?.receivedDateTime;
        this._sender = postParameterValue?.sender;
        this._singleValueExtendedProperties = postParameterValue?.singleValueExtendedProperties;
    };
    /**
     * Gets the conversationId property value. Unique ID of the conversation. Read-only.
     * @returns a string
     */
    public get conversationId() {
        return this._conversationId;
    };
    /**
     * Sets the conversationId property value. Unique ID of the conversation. Read-only.
     * @param value Value to set for the conversationId property.
     */
    public set conversationId(value: string | undefined) {
        if(value) {
            this._conversationId = value;
        }
    };
    /**
     * Gets the conversationThreadId property value. Unique ID of the conversation thread. Read-only.
     * @returns a string
     */
    public get conversationThreadId() {
        return this._conversationThreadId;
    };
    /**
     * Sets the conversationThreadId property value. Unique ID of the conversation thread. Read-only.
     * @param value Value to set for the conversationThreadId property.
     */
    public set conversationThreadId(value: string | undefined) {
        if(value) {
            this._conversationThreadId = value;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element as ExtensionImpl:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
    };
    /**
     * Gets the from property value. The from property
     * @returns a RecipientInterface
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. The from property
     * @param value Value to set for the from property.
     */
    public set from(value: Recipient | undefined) {
        if(value) {
            this._from = value instanceof RecipientImpl? value as RecipientImpl: new RecipientImpl(value);
        }
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
     * Gets the hasAttachments property value. Indicates whether the post has at least one attachment. This is a default property.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether the post has at least one attachment. This is a default property.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        if(value) {
            this._hasAttachments = value;
        }
    };
    /**
     * Gets the inReplyTo property value. The earlier post that this post is replying to in the conversationThread. Read-only. Supports $expand.
     * @returns a PostInterface
     */
    public get inReplyTo() {
        return this._inReplyTo;
    };
    /**
     * Sets the inReplyTo property value. The earlier post that this post is replying to in the conversationThread. Read-only. Supports $expand.
     * @param value Value to set for the inReplyTo property.
     */
    public set inReplyTo(value: Post | undefined) {
        if(value) {
            this._inReplyTo = value instanceof PostImpl? value as PostImpl: new PostImpl(value);
        }
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the post. Read-only. Nullable.
     * @returns a MultiValueLegacyExtendedPropertyInterface
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the post. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
            this.multiValueExtendedProperties?.forEach(element => {
                multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element as MultiValueLegacyExtendedPropertyImpl:new MultiValueLegacyExtendedPropertyImpl(element)));
            });
            this._multiValueExtendedProperties = multiValueExtendedPropertiesArrValue;
        }
    };
    /**
     * Gets the newParticipants property value. Conversation participants that were added to the thread as part of this post.
     * @returns a RecipientInterface
     */
    public get newParticipants() {
        return this._newParticipants;
    };
    /**
     * Sets the newParticipants property value. Conversation participants that were added to the thread as part of this post.
     * @param value Value to set for the newParticipants property.
     */
    public set newParticipants(value: Recipient[] | undefined) {
        if(value) {
            const newParticipantsArrValue: RecipientImpl[] = [];
            this.newParticipants?.forEach(element => {
                newParticipantsArrValue.push((element instanceof RecipientImpl? element as RecipientImpl:new RecipientImpl(element)));
            });
            this._newParticipants = newParticipantsArrValue;
        }
    };
    /**
     * Gets the receivedDateTime property value. Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get receivedDateTime() {
        return this._receivedDateTime;
    };
    /**
     * Sets the receivedDateTime property value. Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the receivedDateTime property.
     */
    public set receivedDateTime(value: Date | undefined) {
        if(value) {
            this._receivedDateTime = value;
        }
    };
    /**
     * Gets the sender property value. Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
     * @returns a RecipientInterface
     */
    public get sender() {
        return this._sender;
    };
    /**
     * Sets the sender property value. Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
     * @param value Value to set for the sender property.
     */
    public set sender(value: Recipient | undefined) {
        if(value) {
            this._sender = value instanceof RecipientImpl? value as RecipientImpl: new RecipientImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attachments && this.attachments.length != 0){        const attachmentsArrValue: AttachmentImpl[] = [];
        this.attachments?.forEach(element => {
            attachmentsArrValue.push((element instanceof AttachmentImpl? element as AttachmentImpl:new AttachmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AttachmentImpl>("attachments", attachmentsArrValue);
        }
        if(this.body){
            writer.writeObjectValue<ItemBodyImpl>("body", (this.body instanceof ItemBodyImpl? this.body as ItemBodyImpl: new ItemBodyImpl(this.body)));
        }
        if(this.conversationId){
            writer.writeStringValue("conversationId", this.conversationId);
        }
        if(this.conversationThreadId){
            writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element as ExtensionImpl:new ExtensionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.from){
            writer.writeObjectValue<RecipientImpl>("from", (this.from instanceof RecipientImpl? this.from as RecipientImpl: new RecipientImpl(this.from)));
        }
        if(this.hasAttachments){
            writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.inReplyTo){
            writer.writeObjectValue<PostImpl>("inReplyTo", (this.inReplyTo instanceof PostImpl? this.inReplyTo as PostImpl: new PostImpl(this.inReplyTo)));
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
        this.multiValueExtendedProperties?.forEach(element => {
            multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element as MultiValueLegacyExtendedPropertyImpl:new MultiValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.newParticipants && this.newParticipants.length != 0){        const newParticipantsArrValue: RecipientImpl[] = [];
        this.newParticipants?.forEach(element => {
            newParticipantsArrValue.push((element instanceof RecipientImpl? element as RecipientImpl:new RecipientImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RecipientImpl>("newParticipants", newParticipantsArrValue);
        }
        if(this.receivedDateTime){
            writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        }
        if(this.sender){
            writer.writeObjectValue<RecipientImpl>("sender", (this.sender instanceof RecipientImpl? this.sender as RecipientImpl: new RecipientImpl(this.sender)));
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
        this.singleValueExtendedProperties?.forEach(element => {
            singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element as SingleValueLegacyExtendedPropertyImpl:new SingleValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the post. Read-only. Nullable.
     * @returns a SingleValueLegacyExtendedPropertyInterface
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the post. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
            this.singleValueExtendedProperties?.forEach(element => {
                singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element as SingleValueLegacyExtendedPropertyImpl:new SingleValueLegacyExtendedPropertyImpl(element)));
            });
            this._singleValueExtendedProperties = singleValueExtendedPropertiesArrValue;
        }
    };
}
