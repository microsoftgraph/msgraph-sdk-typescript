import {CleanWindowsDeviceRequestBody} from './cleanWindowsDeviceRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cleanWindowsDevice method.  */
export class CleanWindowsDeviceRequestBodyImpl implements AdditionalDataHolder, CleanWindowsDeviceRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The keepUserData property  */
    keepUserData?: boolean | undefined;
    /**
     * Instantiates a new cleanWindowsDeviceRequestBody and sets the default values.
     * @param cleanWindowsDeviceRequestBodyParameterValue 
     */
    public constructor(cleanWindowsDeviceRequestBodyParameterValue?: CleanWindowsDeviceRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = cleanWindowsDeviceRequestBodyParameterValue?.additionalData ? {} : cleanWindowsDeviceRequestBodyParameterValue?.additionalData!
        this.keepUserData = cleanWindowsDeviceRequestBodyParameterValue?.keepUserData ;
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
        if(this.keepUserData)
        writer.writeBooleanValue("keepUserData", this.keepUserData);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
