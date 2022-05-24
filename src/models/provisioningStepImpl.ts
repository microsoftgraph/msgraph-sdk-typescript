import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo} from './detailsInfo';
import {DetailsInfoImpl} from './index';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStep} from './provisioningStep';
import {ProvisioningStepType} from './provisioningStepType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStepImpl implements AdditionalDataHolder, Parsable, ProvisioningStep {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Summary of what occurred during the step. */
    public description?: string | undefined;
    /** Details of what occurred during the step. */
    public details?: DetailsInfo | undefined;
    /** Name of the step. */
    public name?: string | undefined;
    /** Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue. */
    public provisioningStepType?: ProvisioningStepType | undefined;
    /** Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue. */
    public status?: ProvisioningResult | undefined;
    /**
     * Instantiates a new provisioningStep and sets the default values.
     * @param provisioningStepParameterValue 
     */
    public constructor(provisioningStepParameterValue?: ProvisioningStep | undefined) {
        this.additionalData = provisioningStepParameterValue?.additionalData ? provisioningStepParameterValue?.additionalData! : {}
        this.description = provisioningStepParameterValue?.description ;
        this.details = provisioningStepParameterValue?.details ;
        this.name = provisioningStepParameterValue?.name ;
        this.provisioningStepType = provisioningStepParameterValue?.provisioningStepType ;
        this.status = provisioningStepParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getObjectValue<DetailsInfoImpl>(createDetailsInfoFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "provisioningStepType": n => { this.provisioningStepType = n.getEnumValue<ProvisioningStepType>(ProvisioningStepType); },
            "status": n => { this.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.details){
        writer.writeObjectValue<DetailsInfoImpl>("details", new DetailsInfoImpl(this.details));
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.provisioningStepType){
        writer.writeEnumValue<ProvisioningStepType>("provisioningStepType", this.provisioningStepType);
        }
        if(this.status){
        writer.writeEnumValue<ProvisioningResult>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
