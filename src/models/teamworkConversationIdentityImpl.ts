import {IdentityImpl} from './index';
import {TeamworkConversationIdentity} from './teamworkConversationIdentity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkConversationIdentityImpl extends IdentityImpl implements TeamworkConversationIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Type of conversation. Possible values are: team, channel, and chat. */
    public conversationIdentityType?: TeamworkConversationIdentityType | undefined;
    /**
     * Instantiates a new TeamworkConversationIdentity and sets the default values.
     * @param teamworkConversationIdentityParameterValue 
     */
    public constructor(teamworkConversationIdentityParameterValue?: TeamworkConversationIdentity | undefined) {
        super(teamworkConversationIdentityParameterValue);
        this.additionalData = teamworkConversationIdentityParameterValue?.additionalData ? teamworkConversationIdentityParameterValue?.additionalData! : {};
        this.conversationIdentityType = teamworkConversationIdentityParameterValue?.conversationIdentityType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversationIdentityType": n => { this.conversationIdentityType = n.getEnumValue<TeamworkConversationIdentityType>(TeamworkConversationIdentityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.conversationIdentityType){
            writer.writeEnumValue<TeamworkConversationIdentityType>("conversationIdentityType", this.conversationIdentityType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
