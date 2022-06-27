import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo} from './detailsInfo';
import {DetailsInfoImpl, IdentityImpl} from './index';
import {ProvisioningSystem} from './provisioningSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningSystemImpl extends IdentityImpl implements ProvisioningSystem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Details of the system. */
    public details?: DetailsInfo | undefined;
    /**
     * Instantiates a new ProvisioningSystem and sets the default values.
     * @param provisioningSystemParameterValue 
     */
    public constructor(provisioningSystemParameterValue?: ProvisioningSystem | undefined) {
        super(provisioningSystemParameterValue);
        this.additionalData = provisioningSystemParameterValue?.additionalData ? provisioningSystemParameterValue?.additionalData! : {};
        this.details = provisioningSystemParameterValue?.details instanceof DetailsInfoImpl? provisioningSystemParameterValue?.details:new DetailsInfoImpl(provisioningSystemParameterValue?.details);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getObjectValue<DetailsInfoImpl>(createDetailsInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.details){
            writer.writeObjectValue<DetailsInfoImpl>("details", new DetailsInfoImpl(this.details));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
