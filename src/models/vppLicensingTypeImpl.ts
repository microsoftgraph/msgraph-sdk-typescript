import {VppLicensingType} from './vppLicensingType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for iOS Volume-Purchased Program (Vpp) Licensing Type. */
export class VppLicensingTypeImpl implements VppLicensingType {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether the program supports the device licensing type. */
    public supportsDeviceLicensing?: boolean | undefined;
    /** Whether the program supports the user licensing type. */
    public supportsUserLicensing?: boolean | undefined;
    /**
     * Instantiates a new vppLicensingType and sets the default values.
     * @param vppLicensingTypeParameterValue 
     */
    public constructor(vppLicensingTypeParameterValue?: VppLicensingType | undefined) {
        this.additionalData = vppLicensingTypeParameterValue?.additionalData ? vppLicensingTypeParameterValue?.additionalData! : {};
        this.supportsDeviceLicensing = vppLicensingTypeParameterValue?.supportsDeviceLicensing;
        this.supportsUserLicensing = vppLicensingTypeParameterValue?.supportsUserLicensing;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "supportsDeviceLicensing": n => { this.supportsDeviceLicensing = n.getBooleanValue(); },
            "supportsUserLicensing": n => { this.supportsUserLicensing = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.supportsDeviceLicensing){
            writer.writeBooleanValue("supportsDeviceLicensing", this.supportsDeviceLicensing);
        }
        if(this.supportsUserLicensing){
            writer.writeBooleanValue("supportsUserLicensing", this.supportsUserLicensing);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
