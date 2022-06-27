import {AadUserConversationMemberResult} from './aadUserConversationMemberResult';
import {ActionResultPartImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserConversationMemberResultImpl extends ActionResultPartImpl implements AadUserConversationMemberResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The user object ID of the Azure AD user that was being added as part of the bulk operation. */
    public userId?: string | undefined;
    /**
     * Instantiates a new AadUserConversationMemberResult and sets the default values.
     * @param aadUserConversationMemberResultParameterValue 
     */
    public constructor(aadUserConversationMemberResultParameterValue?: AadUserConversationMemberResult | undefined) {
        super(aadUserConversationMemberResultParameterValue);
        this.additionalData = aadUserConversationMemberResultParameterValue?.additionalData ? aadUserConversationMemberResultParameterValue?.additionalData! : {};
        this.userId = aadUserConversationMemberResultParameterValue?.userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
