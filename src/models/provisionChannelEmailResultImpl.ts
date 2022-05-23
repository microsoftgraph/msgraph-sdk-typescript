import {ProvisionChannelEmailResult} from './provisionChannelEmailResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisionChannelEmailResultImpl implements AdditionalDataHolder, Parsable, ProvisionChannelEmailResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the provisioned email address. */
    public email?: string | undefined;
    /**
     * Instantiates a new ProvisionChannelEmailResult and sets the default values.
     * @param provisionChannelEmailResultParameterValue 
     */
    public constructor(provisionChannelEmailResultParameterValue?: ProvisionChannelEmailResult | undefined) {
        this.additionalData = provisionChannelEmailResultParameterValue?.additionalData ? provisionChannelEmailResultParameterValue?.additionalData! : {}
        this.email = provisionChannelEmailResultParameterValue?.email ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "email": n => { this.email = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.email){
        writer.writeStringValue("email", this.email);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
