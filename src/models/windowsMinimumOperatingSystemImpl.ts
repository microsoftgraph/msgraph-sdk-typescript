import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The minimum operating system required for a Windows mobile app. */
export class WindowsMinimumOperatingSystemImpl implements WindowsMinimumOperatingSystem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Windows version 10.0 or later. */
    public v10_0?: boolean | undefined;
    /** Windows version 8.0 or later. */
    public v8_0?: boolean | undefined;
    /** Windows version 8.1 or later. */
    public v8_1?: boolean | undefined;
    /**
     * Instantiates a new windowsMinimumOperatingSystem and sets the default values.
     * @param windowsMinimumOperatingSystemParameterValue 
     */
    public constructor(windowsMinimumOperatingSystemParameterValue?: WindowsMinimumOperatingSystem | undefined) {
        this.additionalData = windowsMinimumOperatingSystemParameterValue?.additionalData ? windowsMinimumOperatingSystemParameterValue?.additionalData! : {};
        this.v10_0 = windowsMinimumOperatingSystemParameterValue?.v10_0;
        this.v8_0 = windowsMinimumOperatingSystemParameterValue?.v8_0;
        this.v8_1 = windowsMinimumOperatingSystemParameterValue?.v8_1;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v8_0": n => { this.v8_0 = n.getBooleanValue(); },
            "v8_1": n => { this.v8_1 = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.v10_0){
            writer.writeBooleanValue("v10_0", this.v10_0);
        }
        if(this.v8_0){
            writer.writeBooleanValue("v8_0", this.v8_0);
        }
        if(this.v8_1){
            writer.writeBooleanValue("v8_1", this.v8_1);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
