import {UpdateWindowsDeviceAccountActionParameterImpl} from '../../../../../models/';
import {createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue} from '../../../../../models/createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue';
import {UpdateWindowsDeviceAccountActionParameter} from '../../../../../models/updateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountPostRequestBody} from './updateWindowsDeviceAccountPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateWindowsDeviceAccount method. */
export class UpdateWindowsDeviceAccountPostRequestBodyImpl implements AdditionalDataHolder, Parsable, UpdateWindowsDeviceAccountPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The updateWindowsDeviceAccountActionParameter property */
    public updateWindowsDeviceAccountActionParameter?: UpdateWindowsDeviceAccountActionParameter | undefined;
    /**
     * Instantiates a new updateWindowsDeviceAccountPostRequestBody and sets the default values.
     * @param updateWindowsDeviceAccountPostRequestBodyParameterValue 
     */
    public constructor(updateWindowsDeviceAccountPostRequestBodyParameterValue?: UpdateWindowsDeviceAccountPostRequestBody | undefined) {
        this.additionalData = updateWindowsDeviceAccountPostRequestBodyParameterValue?.additionalData ? updateWindowsDeviceAccountPostRequestBodyParameterValue?.additionalData! : {}
        this.updateWindowsDeviceAccountActionParameter = updateWindowsDeviceAccountPostRequestBodyParameterValue?.updateWindowsDeviceAccountActionParameter ;
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
        writer.writeObjectValue<UpdateWindowsDeviceAccountActionParameterImpl>("updateWindowsDeviceAccountActionParameter", new UpdateWindowsDeviceAccountActionParameterImpl(this.updateWindowsDeviceAccountActionParameter));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
