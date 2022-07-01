import {UpdateWindowsDeviceAccountActionParameterImpl} from '../../../../../models/';
import {createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue} from '../../../../../models/createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue';
import {UpdateWindowsDeviceAccountActionParameter} from '../../../../../models/updateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountPostRequestBody} from './updateWindowsDeviceAccountPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateWindowsDeviceAccount method. */
export class UpdateWindowsDeviceAccountPostRequestBodyImpl implements UpdateWindowsDeviceAccountPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The updateWindowsDeviceAccountActionParameter property */
    private _updateWindowsDeviceAccountActionParameter?: UpdateWindowsDeviceAccountActionParameter | undefined;
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
     * Instantiates a new updateWindowsDeviceAccountPostRequestBody and sets the default values.
     * @param updateWindowsDeviceAccountPostRequestBodyParameterValue 
     */
    public constructor(updateWindowsDeviceAccountPostRequestBodyParameterValue?: UpdateWindowsDeviceAccountPostRequestBody | undefined) {
        this._additionalData = updateWindowsDeviceAccountPostRequestBodyParameterValue?.additionalData ? updateWindowsDeviceAccountPostRequestBodyParameterValue?.additionalData! : {};
        this._updateWindowsDeviceAccountActionParameter = updateWindowsDeviceAccountPostRequestBodyParameterValue?.updateWindowsDeviceAccountActionParameter;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "updateWindowsDeviceAccountActionParameter": n => { this.updateWindowsDeviceAccountActionParameter = n.getObjectValue<UpdateWindowsDeviceAccountActionParameterImpl>(createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.updateWindowsDeviceAccountActionParameter){
            writer.writeObjectValue<UpdateWindowsDeviceAccountActionParameterImpl>("updateWindowsDeviceAccountActionParameter", (this.updateWindowsDeviceAccountActionParameter instanceof UpdateWindowsDeviceAccountActionParameterImpl? this.updateWindowsDeviceAccountActionParameter as UpdateWindowsDeviceAccountActionParameterImpl: new UpdateWindowsDeviceAccountActionParameterImpl(this.updateWindowsDeviceAccountActionParameter)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the updateWindowsDeviceAccountActionParameter property value. The updateWindowsDeviceAccountActionParameter property
     * @returns a UpdateWindowsDeviceAccountActionParameterInterface
     */
    public get updateWindowsDeviceAccountActionParameter() {
        return this._updateWindowsDeviceAccountActionParameter;
    };
    /**
     * Sets the updateWindowsDeviceAccountActionParameter property value. The updateWindowsDeviceAccountActionParameter property
     * @param value Value to set for the updateWindowsDeviceAccountActionParameter property.
     */
    public set updateWindowsDeviceAccountActionParameter(value: UpdateWindowsDeviceAccountActionParameter | undefined) {
        if(value) {
            this._updateWindowsDeviceAccountActionParameter = value instanceof UpdateWindowsDeviceAccountActionParameterImpl? value as UpdateWindowsDeviceAccountActionParameterImpl: new UpdateWindowsDeviceAccountActionParameterImpl(value);
        }
    };
}
