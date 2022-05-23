import {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDeviceAccountImpl implements AdditionalDataHolder, Parsable, WindowsDeviceAccount {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Not yet documented */
    public password?: string | undefined;
    /**
     * Instantiates a new windowsDeviceAccount and sets the default values.
     * @param windowsDeviceAccountParameterValue 
     */
    public constructor(windowsDeviceAccountParameterValue?: WindowsDeviceAccount | undefined) {
        this.additionalData = windowsDeviceAccountParameterValue?.additionalData ? windowsDeviceAccountParameterValue?.additionalData! : {}
        this.password = windowsDeviceAccountParameterValue?.password ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "password": n => { this.password = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.password){
        writer.writeStringValue("password", this.password);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
