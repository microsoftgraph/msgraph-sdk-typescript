import {StsPolicyImpl} from './index';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenLifetimePolicyImpl extends StsPolicyImpl implements TokenLifetimePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new TokenLifetimePolicy and sets the default values.
     * @param tokenLifetimePolicyParameterValue 
     */
    public constructor(tokenLifetimePolicyParameterValue?: TokenLifetimePolicy | undefined) {
        super(tokenLifetimePolicyParameterValue);
        this.additionalData = tokenLifetimePolicyParameterValue?.additionalData ? tokenLifetimePolicyParameterValue?.additionalData! : {};
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
