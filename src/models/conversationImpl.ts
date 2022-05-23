import {Conversation} from './conversation';
import {ConversationThread} from './conversationThread';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {ConversationThreadImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ConversationImpl extends EntityImpl implements Conversation, Parsable {
    /** Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search. */
    public hasAttachments?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, le, ge). */
    public lastDeliveredDateTime?: Date | undefined;
    /** A short summary from the body of the latest post in this conversation. */
    public preview?: string | undefined;
    /** A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable. */
    public threads?: ConversationThread[] | undefined;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. */
    public topic?: string | undefined;
    /** All the users that sent a message to this Conversation. */
    public uniqueSenders?: string[] | undefined;
    /**
     * Instantiates a new conversation and sets the default values.
     * @param conversationParameterValue 
     */
    public constructor(conversationParameterValue?: Conversation | undefined) {
        super();
        this.hasAttachments = conversationParameterValue?.hasAttachments ;
        this.lastDeliveredDateTime = conversationParameterValue?.lastDeliveredDateTime ;
        this.preview = conversationParameterValue?.preview ;
        this.threads = conversationParameterValue?.threads ;
        this.topic = conversationParameterValue?.topic ;
        this.uniqueSenders = conversationParameterValue?.uniqueSenders ;
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
        if(this.threads && this.threads.length != 0){        const threadsArrValue: ConversationThreadImpl[] = []; this.threads?.forEach(element => {threadsArrValue.push(new ConversationThreadImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationThreadImpl>("threads", threadsArrValue);
        }
        if(this.topic){
        writer.writeStringValue("topic", this.topic);
        }
        if(this.uniqueSenders){
        writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", this.uniqueSenders);
        }
    };
}
