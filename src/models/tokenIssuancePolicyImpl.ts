import {StsPolicyImpl} from './index';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenIssuancePolicyImpl extends StsPolicyImpl implements TokenIssuancePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new TokenIssuancePolicy and sets the default values.
     * @param tokenIssuancePolicyParameterValue 
     */
    public constructor(tokenIssuancePolicyParameterValue?: TokenIssuancePolicy | undefined) {
        super(tokenIssuancePolicyParameterValue);
        this.additionalData = tokenIssuancePolicyParameterValue?.additionalData ? tokenIssuancePolicyParameterValue?.additionalData! : {};
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
