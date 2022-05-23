import {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './wipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the wipeManagedAppRegistrationsByDeviceTag method. */
export class WipeManagedAppRegistrationsByDeviceTagPostRequestBodyImpl implements AdditionalDataHolder, Parsable, WipeManagedAppRegistrationsByDeviceTagPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The deviceTag property */
    public deviceTag?: string | undefined;
    /**
     * Instantiates a new wipeManagedAppRegistrationsByDeviceTagPostRequestBody and sets the default values.
     * @param wipeManagedAppRegistrationsByDeviceTagPostRequestBodyParameterValue 
     */
    public constructor(wipeManagedAppRegistrationsByDeviceTagPostRequestBodyParameterValue?: WipeManagedAppRegistrationsByDeviceTagPostRequestBody | undefined) {
        this.additionalData = wipeManagedAppRegistrationsByDeviceTagPostRequestBodyParameterValue?.additionalData ? wipeManagedAppRegistrationsByDeviceTagPostRequestBodyParameterValue?.additionalData! : {}
        this.deviceTag = wipeManagedAppRegistrationsByDeviceTagPostRequestBodyParameterValue?.deviceTag ;
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
        writer.writeStringValue("deviceTag", this.deviceTag);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
