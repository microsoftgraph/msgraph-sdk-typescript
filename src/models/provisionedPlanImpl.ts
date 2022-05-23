import {ProvisionedPlan} from './provisionedPlan';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisionedPlanImpl implements AdditionalDataHolder, Parsable, ProvisionedPlan {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** For example, 'Enabled'. */
    public capabilityStatus?: string | undefined;
    /** For example, 'Success'. */
    public provisioningStatus?: string | undefined;
    /** The name of the service; for example, 'AccessControlS2S' */
    public service?: string | undefined;
    /**
     * Instantiates a new provisionedPlan and sets the default values.
     * @param provisionedPlanParameterValue 
     */
    public constructor(provisionedPlanParameterValue?: ProvisionedPlan | undefined) {
        this.additionalData = provisionedPlanParameterValue?.additionalData ? provisionedPlanParameterValue?.additionalData! : {}
        this.capabilityStatus = provisionedPlanParameterValue?.capabilityStatus ;
        this.provisioningStatus = provisionedPlanParameterValue?.provisioningStatus ;
        this.service = provisionedPlanParameterValue?.service ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "capabilityStatus": n => { this.capabilityStatus = n.getStringValue(); },
            "provisioningStatus": n => { this.provisioningStatus = n.getStringValue(); },
            "service": n => { this.service = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.capabilityStatus){
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        }
        if(this.provisioningStatus){
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        }
        if(this.service){
        writer.writeStringValue("service", this.service);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
