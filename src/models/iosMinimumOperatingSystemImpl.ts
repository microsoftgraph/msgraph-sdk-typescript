import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties of the minimum operating system required for an iOS mobile app. */
export class IosMinimumOperatingSystemImpl implements IosMinimumOperatingSystem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Version 10.0 or later. */
    public v10_0?: boolean | undefined;
    /** Version 11.0 or later. */
    public v11_0?: boolean | undefined;
    /** Version 12.0 or later. */
    public v12_0?: boolean | undefined;
    /** Version 13.0 or later. */
    public v13_0?: boolean | undefined;
    /** Version 14.0 or later. */
    public v14_0?: boolean | undefined;
    /** Version 8.0 or later. */
    public v8_0?: boolean | undefined;
    /** Version 9.0 or later. */
    public v9_0?: boolean | undefined;
    /**
     * Instantiates a new iosMinimumOperatingSystem and sets the default values.
     * @param iosMinimumOperatingSystemParameterValue 
     */
    public constructor(iosMinimumOperatingSystemParameterValue?: IosMinimumOperatingSystem | undefined) {
        this.additionalData = iosMinimumOperatingSystemParameterValue?.additionalData ? iosMinimumOperatingSystemParameterValue?.additionalData! : {};
        this.v10_0 = iosMinimumOperatingSystemParameterValue?.v10_0;
        this.v11_0 = iosMinimumOperatingSystemParameterValue?.v11_0;
        this.v12_0 = iosMinimumOperatingSystemParameterValue?.v12_0;
        this.v13_0 = iosMinimumOperatingSystemParameterValue?.v13_0;
        this.v14_0 = iosMinimumOperatingSystemParameterValue?.v14_0;
        this.v8_0 = iosMinimumOperatingSystemParameterValue?.v8_0;
        this.v9_0 = iosMinimumOperatingSystemParameterValue?.v9_0;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v11_0": n => { this.v11_0 = n.getBooleanValue(); },
            "v12_0": n => { this.v12_0 = n.getBooleanValue(); },
            "v13_0": n => { this.v13_0 = n.getBooleanValue(); },
            "v14_0": n => { this.v14_0 = n.getBooleanValue(); },
            "v8_0": n => { this.v8_0 = n.getBooleanValue(); },
            "v9_0": n => { this.v9_0 = n.getBooleanValue(); },
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
        if(this.v11_0){
            writer.writeBooleanValue("v11_0", this.v11_0);
        }
        if(this.v12_0){
            writer.writeBooleanValue("v12_0", this.v12_0);
        }
        if(this.v13_0){
            writer.writeBooleanValue("v13_0", this.v13_0);
        }
        if(this.v14_0){
            writer.writeBooleanValue("v14_0", this.v14_0);
        }
        if(this.v8_0){
            writer.writeBooleanValue("v8_0", this.v8_0);
        }
        if(this.v9_0){
            writer.writeBooleanValue("v9_0", this.v9_0);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
