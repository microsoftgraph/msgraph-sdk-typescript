import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo} from './detailsInfo';
import {DetailsInfoImpl} from './index';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStep} from './provisioningStep';
import {ProvisioningStepType} from './provisioningStepType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStepImpl implements ProvisioningStep {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Summary of what occurred during the step. */
    private _description?: string | undefined;
    /** Details of what occurred during the step. */
    private _details?: DetailsInfo | undefined;
    /** Name of the step. */
    private _name?: string | undefined;
    /** Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue. */
    private _provisioningStepType?: ProvisioningStepType | undefined;
    /** Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue. */
    private _status?: ProvisioningResult | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new provisioningStep and sets the default values.
     * @param provisioningStepParameterValue 
     */
    public constructor(provisioningStepParameterValue?: ProvisioningStep | undefined) {
        this._additionalData = provisioningStepParameterValue?.additionalData ? provisioningStepParameterValue?.additionalData! : {};
        this._description = provisioningStepParameterValue?.description;
        this._details = provisioningStepParameterValue?.details;
        this._name = provisioningStepParameterValue?.name;
        this._provisioningStepType = provisioningStepParameterValue?.provisioningStepType;
        this._status = provisioningStepParameterValue?.status;
    };
    /**
     * Gets the description property value. Summary of what occurred during the step.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Summary of what occurred during the step.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the details property value. Details of what occurred during the step.
     * @returns a DetailsInfoInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of what occurred during the step.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | undefined) {
        if(value) {
            this._details = value instanceof DetailsInfoImpl? value : new DetailsInfoImpl(value);
        }
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
     * Gets the name property value. Name of the step.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the step.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the provisioningStepType property value. Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue.
     * @returns a provisioningStepType
     */
    public get provisioningStepType() {
        return this._provisioningStepType;
    };
    /**
     * Sets the provisioningStepType property value. Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export, unknownFutureValue.
     * @param value Value to set for the provisioningStepType property.
     */
    public set provisioningStepType(value: ProvisioningStepType | undefined) {
        if(value) {
            this._provisioningStepType = value;
        }
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
            writer.writeObjectValue<DetailsInfoImpl>("details", (!this.details || this.details instanceof DetailsInfoImpl? this.details : new DetailsInfoImpl(this.details)));
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
    /**
     * Gets the status property value. Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue.
     * @returns a provisioningResult
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the step. Possible values are: success, warning,  failure, skipped, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: ProvisioningResult | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
