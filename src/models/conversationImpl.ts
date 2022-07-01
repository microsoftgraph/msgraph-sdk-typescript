import {Conversation} from './conversation';
import {ConversationThread} from './conversationThread';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {ConversationThreadImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ConversationImpl extends EntityImpl implements Conversation {
    /** Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search. */
    private _hasAttachments?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, le, ge). */
    private _lastDeliveredDateTime?: Date | undefined;
    /** A short summary from the body of the latest post in this conversation. */
    private _preview?: string | undefined;
    /** A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable. */
    private _threads?: ConversationThread[] | undefined;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. */
    private _topic?: string | undefined;
    /** All the users that sent a message to this Conversation. */
    private _uniqueSenders?: string[] | undefined;
    /**
     * Instantiates a new conversation and sets the default values.
     * @param conversationParameterValue 
     */
    public constructor(conversationParameterValue?: Conversation | undefined) {
        super(conversationParameterValue);
        this._hasAttachments = conversationParameterValue?.hasAttachments;
        this._lastDeliveredDateTime = conversationParameterValue?.lastDeliveredDateTime;
        this._preview = conversationParameterValue?.preview;
        this._threads = conversationParameterValue?.threads;
        this._topic = conversationParameterValue?.topic;
        this._uniqueSenders = conversationParameterValue?.uniqueSenders;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "lastDeliveredDateTime": n => { this.lastDeliveredDateTime = n.getDateValue(); },
            "preview": n => { this.preview = n.getStringValue(); },
            "threads": n => { this.threads = n.getCollectionOfObjectValues<ConversationThreadImpl>(createConversationThreadFromDiscriminatorValue); },
            "topic": n => { this.topic = n.getStringValue(); },
            "uniqueSenders": n => { this.uniqueSenders = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the hasAttachments property value. Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        if(value) {
            this._hasAttachments = value;
        }
    };
    /**
     * Gets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, le, ge).
     * @returns a Date
     */
    public get lastDeliveredDateTime() {
        return this._lastDeliveredDateTime;
    };
    /**
     * Sets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, le, ge).
     * @param value Value to set for the lastDeliveredDateTime property.
     */
    public set lastDeliveredDateTime(value: Date | undefined) {
        if(value) {
            this._lastDeliveredDateTime = value;
        }
    };
    /**
     * Gets the preview property value. A short summary from the body of the latest post in this conversation.
     * @returns a string
     */
    public get preview() {
        return this._preview;
    };
    /**
     * Sets the preview property value. A short summary from the body of the latest post in this conversation.
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
        if(this.hasAttachments){
            writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        }
        if(this.lastDeliveredDateTime){
            writer.writeDateValue("lastDeliveredDateTime", this.lastDeliveredDateTime);
        }
        if(this.preview){
            writer.writeStringValue("preview", this.preview);
        }
        if(this.threads && this.threads.length != 0){        const threadsArrValue: ConversationThreadImpl[] = [];
        this.threads?.forEach(element => {
            threadsArrValue.push((element instanceof ConversationThreadImpl? element as ConversationThreadImpl:new ConversationThreadImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationThreadImpl>("threads", threadsArrValue);
        }
        if(this.topic){
            writer.writeStringValue("topic", this.topic);
        }
        if(this.uniqueSenders){
            writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", this.uniqueSenders);
        }
    };
    /**
     * Gets the threads property value. A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
     * @returns a ConversationThreadInterface
     */
    public get threads() {
        return this._threads;
    };
    /**
     * Sets the threads property value. A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
     * @param value Value to set for the threads property.
     */
    public set threads(value: ConversationThread[] | undefined) {
        if(value) {
            const threadsArrValue: ConversationThreadImpl[] = [];
            this.threads?.forEach(element => {
                threadsArrValue.push((element instanceof ConversationThreadImpl? element as ConversationThreadImpl:new ConversationThreadImpl(element)));
            });
            this._threads = threadsArrValue;
        }
    };
    /**
     * Gets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        if(value) {
            this._topic = value;
        }
    };
    /**
     * Gets the uniqueSenders property value. All the users that sent a message to this Conversation.
     * @returns a string
     */
    public get uniqueSenders() {
        return this._uniqueSenders;
    };
    /**
     * Sets the uniqueSenders property value. All the users that sent a message to this Conversation.
     * @param value Value to set for the uniqueSenders property.
     */
    public set uniqueSenders(value: string[] | undefined) {
        if(value) {
            this._uniqueSenders = value;
        }
    };
}
