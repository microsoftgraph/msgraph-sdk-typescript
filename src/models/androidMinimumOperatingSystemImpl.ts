import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the minimum operating system required for an Android mobile app. */
export class AndroidMinimumOperatingSystemImpl implements AndroidMinimumOperatingSystem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Version 10.0 or later. */
    public v10_0?: boolean | undefined;
    /** Version 11.0 or later. */
    public v11_0?: boolean | undefined;
    /** Version 4.0 or later. */
    public v4_0?: boolean | undefined;
    /** Version 4.0.3 or later. */
    public v4_0_3?: boolean | undefined;
    /** Version 4.1 or later. */
    public v4_1?: boolean | undefined;
    /** Version 4.2 or later. */
    public v4_2?: boolean | undefined;
    /** Version 4.3 or later. */
    public v4_3?: boolean | undefined;
    /** Version 4.4 or later. */
    public v4_4?: boolean | undefined;
    /** Version 5.0 or later. */
    public v5_0?: boolean | undefined;
    /** Version 5.1 or later. */
    public v5_1?: boolean | undefined;
    /**
     * Instantiates a new androidMinimumOperatingSystem and sets the default values.
     * @param androidMinimumOperatingSystemParameterValue 
     */
    public constructor(androidMinimumOperatingSystemParameterValue?: AndroidMinimumOperatingSystem | undefined) {
        this.additionalData = androidMinimumOperatingSystemParameterValue?.additionalData ? androidMinimumOperatingSystemParameterValue?.additionalData! : {};
        this.v10_0 = androidMinimumOperatingSystemParameterValue?.v10_0;
        this.v11_0 = androidMinimumOperatingSystemParameterValue?.v11_0;
        this.v4_0 = androidMinimumOperatingSystemParameterValue?.v4_0;
        this.v4_0_3 = androidMinimumOperatingSystemParameterValue?.v4_0_3;
        this.v4_1 = androidMinimumOperatingSystemParameterValue?.v4_1;
        this.v4_2 = androidMinimumOperatingSystemParameterValue?.v4_2;
        this.v4_3 = androidMinimumOperatingSystemParameterValue?.v4_3;
        this.v4_4 = androidMinimumOperatingSystemParameterValue?.v4_4;
        this.v5_0 = androidMinimumOperatingSystemParameterValue?.v5_0;
        this.v5_1 = androidMinimumOperatingSystemParameterValue?.v5_1;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v11_0": n => { this.v11_0 = n.getBooleanValue(); },
            "v4_0": n => { this.v4_0 = n.getBooleanValue(); },
            "v4_0_3": n => { this.v4_0_3 = n.getBooleanValue(); },
            "v4_1": n => { this.v4_1 = n.getBooleanValue(); },
            "v4_2": n => { this.v4_2 = n.getBooleanValue(); },
            "v4_3": n => { this.v4_3 = n.getBooleanValue(); },
            "v4_4": n => { this.v4_4 = n.getBooleanValue(); },
            "v5_0": n => { this.v5_0 = n.getBooleanValue(); },
            "v5_1": n => { this.v5_1 = n.getBooleanValue(); },
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
        if(this.v4_0){
            writer.writeBooleanValue("v4_0", this.v4_0);
        }
        if(this.v4_0_3){
            writer.writeBooleanValue("v4_0_3", this.v4_0_3);
        }
        if(this.v4_1){
            writer.writeBooleanValue("v4_1", this.v4_1);
        }
        if(this.v4_2){
            writer.writeBooleanValue("v4_2", this.v4_2);
        }
        if(this.v4_3){
            writer.writeBooleanValue("v4_3", this.v4_3);
        }
        if(this.v4_4){
            writer.writeBooleanValue("v4_4", this.v4_4);
        }
        if(this.v5_0){
            writer.writeBooleanValue("v5_0", this.v5_0);
        }
        if(this.v5_1){
            writer.writeBooleanValue("v5_1", this.v5_1);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
