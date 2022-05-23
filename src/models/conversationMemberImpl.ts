import {ConversationMember} from './conversationMember';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class ConversationMemberImpl extends EntityImpl implements ConversationMember, Parsable {
    /** The display name of the user. */
    public displayName?: string | undefined;
    /** The roles for that user. */
    public roles?: string[] | undefined;
    /** The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat. */
    public visibleHistoryStartDateTime?: Date | undefined;
    /**
     * Instantiates a new conversationMember and sets the default values.
     * @param conversationMemberParameterValue 
     */
    public constructor(conversationMemberParameterValue?: ConversationMember | undefined) {
        super();
        this.displayName = conversationMemberParameterValue?.displayName ;
        this.roles = conversationMemberParameterValue?.roles ;
        this.visibleHistoryStartDateTime = conversationMemberParameterValue?.visibleHistoryStartDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "roles": n => { this.roles = n.getCollectionOfPrimitiveValues<string>(); },
            "visibleHistoryStartDateTime": n => { this.visibleHistoryStartDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.roles){
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        if(this.visibleHistoryStartDateTime){
        writer.writeDateValue("visibleHistoryStartDateTime", this.visibleHistoryStartDateTime);
        }
    };
}
