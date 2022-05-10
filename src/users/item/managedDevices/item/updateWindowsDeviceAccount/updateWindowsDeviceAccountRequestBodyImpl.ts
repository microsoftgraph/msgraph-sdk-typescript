import {UpdateWindowsDeviceAccountActionParameterImpl} from '../../../../../models/';
import {createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue} from '../../../../../models/createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue';
import {UpdateWindowsDeviceAccountActionParameter} from '../../../../../models/updateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountRequestBody} from './updateWindowsDeviceAccountRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateWindowsDeviceAccount method.  */
export class UpdateWindowsDeviceAccountRequestBodyImpl implements AdditionalDataHolder, Parsable, UpdateWindowsDeviceAccountRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The updateWindowsDeviceAccountActionParameter property  */
    updateWindowsDeviceAccountActionParameter?: UpdateWindowsDeviceAccountActionParameter | undefined;
    /**
     * Instantiates a new updateWindowsDeviceAccountRequestBody and sets the default values.
     * @param updateWindowsDeviceAccountRequestBodyParameterValue 
     */
    public constructor(updateWindowsDeviceAccountRequestBodyParameterValue?: UpdateWindowsDeviceAccountRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = updateWindowsDeviceAccountRequestBodyParameterValue?.additionalData ? {} : updateWindowsDeviceAccountRequestBodyParameterValue?.additionalData!
        this.updateWindowsDeviceAccountActionParameter = updateWindowsDeviceAccountRequestBodyParameterValue?.updateWindowsDeviceAccountActionParameter ;
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
        if(this.updateWindowsDeviceAccountActionParameter)
        writer.writeObjectValue<UpdateWindowsDeviceAccountActionParameterImpl>("updateWindowsDeviceAccountActionParameter", new UpdateWindowsDeviceAccountActionParameterImpl(this.updateWindowsDeviceAccountActionParameter));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
