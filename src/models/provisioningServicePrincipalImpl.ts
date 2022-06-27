import {IdentityImpl} from './index';
import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningServicePrincipalImpl extends IdentityImpl implements ProvisioningServicePrincipal {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new ProvisioningServicePrincipal and sets the default values.
     * @param provisioningServicePrincipalParameterValue 
     */
    public constructor(provisioningServicePrincipalParameterValue?: ProvisioningServicePrincipal | undefined) {
        super(provisioningServicePrincipalParameterValue);
        this.additionalData = provisioningServicePrincipalParameterValue?.additionalData ? provisioningServicePrincipalParameterValue?.additionalData! : {};
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
