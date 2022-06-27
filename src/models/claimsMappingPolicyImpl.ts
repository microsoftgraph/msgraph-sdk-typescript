import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {StsPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClaimsMappingPolicyImpl extends StsPolicyImpl implements ClaimsMappingPolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new ClaimsMappingPolicy and sets the default values.
     * @param claimsMappingPolicyParameterValue 
     */
    public constructor(claimsMappingPolicyParameterValue?: ClaimsMappingPolicy | undefined) {
        super(claimsMappingPolicyParameterValue);
        this.additionalData = claimsMappingPolicyParameterValue?.additionalData ? claimsMappingPolicyParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
