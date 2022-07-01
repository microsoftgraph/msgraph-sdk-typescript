import {createProvisioningErrorInfoFromDiscriminatorValue} from './createProvisioningErrorInfoFromDiscriminatorValue';
import {ProvisioningErrorInfoImpl} from './index';
import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStatusInfoImpl implements ProvisioningStatusInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The errorInformation property */
    private _errorInformation?: ProvisioningErrorInfo | undefined;
    /** Possible values are: success, warning, failure, skipped, unknownFutureValue. */
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
     * Instantiates a new provisioningStatusInfo and sets the default values.
     * @param provisioningStatusInfoParameterValue 
     */
    public constructor(provisioningStatusInfoParameterValue?: ProvisioningStatusInfo | undefined) {
        this._additionalData = provisioningStatusInfoParameterValue?.additionalData ? provisioningStatusInfoParameterValue?.additionalData! : {};
        this._errorInformation = provisioningStatusInfoParameterValue?.errorInformation;
        this._status = provisioningStatusInfoParameterValue?.status;
    };
    /**
     * Gets the errorInformation property value. The errorInformation property
     * @returns a ProvisioningErrorInfoInterface
     */
    public get errorInformation() {
        return this._errorInformation;
    };
    /**
     * Sets the errorInformation property value. The errorInformation property
     * @param value Value to set for the errorInformation property.
     */
    public set errorInformation(value: ProvisioningErrorInfo | undefined) {
        if(value) {
            this._errorInformation = value instanceof ProvisioningErrorInfoImpl? value : new ProvisioningErrorInfoImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorInformation": n => { this.errorInformation = n.getObjectValue<ProvisioningErrorInfoImpl>(createProvisioningErrorInfoFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.errorInformation){
            writer.writeObjectValue<ProvisioningErrorInfoImpl>("errorInformation", (!this.errorInformation || this.errorInformation instanceof ProvisioningErrorInfoImpl? this.errorInformation : new ProvisioningErrorInfoImpl(this.errorInformation)));
        }
        if(this.status){
            writer.writeEnumValue<ProvisioningResult>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Possible values are: success, warning, failure, skipped, unknownFutureValue.
     * @returns a provisioningResult
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Possible values are: success, warning, failure, skipped, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: ProvisioningResult | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
