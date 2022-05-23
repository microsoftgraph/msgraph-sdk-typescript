import {CleanWindowsDevicePostRequestBody} from './cleanWindowsDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cleanWindowsDevice method. */
export class CleanWindowsDevicePostRequestBodyImpl implements AdditionalDataHolder, CleanWindowsDevicePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The keepUserData property */
    public keepUserData?: boolean | undefined;
    /**
     * Instantiates a new cleanWindowsDevicePostRequestBody and sets the default values.
     * @param cleanWindowsDevicePostRequestBodyParameterValue 
     */
    public constructor(cleanWindowsDevicePostRequestBodyParameterValue?: CleanWindowsDevicePostRequestBody | undefined) {
        this.additionalData = cleanWindowsDevicePostRequestBodyParameterValue?.additionalData ? cleanWindowsDevicePostRequestBodyParameterValue?.additionalData! : {}
        this.keepUserData = cleanWindowsDevicePostRequestBodyParameterValue?.keepUserData ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "keepUserData": n => { this.keepUserData = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.keepUserData){
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
