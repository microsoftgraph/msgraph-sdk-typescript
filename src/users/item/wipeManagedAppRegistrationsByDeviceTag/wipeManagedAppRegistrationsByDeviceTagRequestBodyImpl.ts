import {WipeManagedAppRegistrationsByDeviceTagRequestBody} from './wipeManagedAppRegistrationsByDeviceTagRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the wipeManagedAppRegistrationsByDeviceTag method.  */
export class WipeManagedAppRegistrationsByDeviceTagRequestBodyImpl implements AdditionalDataHolder, Parsable, WipeManagedAppRegistrationsByDeviceTagRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The deviceTag property  */
    deviceTag?: string | undefined;
    /**
     * Instantiates a new wipeManagedAppRegistrationsByDeviceTagRequestBody and sets the default values.
     * @param wipeManagedAppRegistrationsByDeviceTagRequestBodyParameterValue 
     */
    public constructor(wipeManagedAppRegistrationsByDeviceTagRequestBodyParameterValue?: WipeManagedAppRegistrationsByDeviceTagRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = wipeManagedAppRegistrationsByDeviceTagRequestBodyParameterValue?.additionalData ? {} : wipeManagedAppRegistrationsByDeviceTagRequestBodyParameterValue?.additionalData!
        this.deviceTag = wipeManagedAppRegistrationsByDeviceTagRequestBodyParameterValue?.deviceTag ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceTag": n => { this.deviceTag = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deviceTag){
        if(this.deviceTag)
        writer.writeStringValue("deviceTag", this.deviceTag);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
