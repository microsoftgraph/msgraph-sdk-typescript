import {IosDeviceType} from './iosDeviceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties of the possible iOS device types the mobile app can run on. */
export class IosDeviceTypeImpl implements IosDeviceType {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether the app should run on iPads. */
    public iPad?: boolean | undefined;
    /** Whether the app should run on iPhones and iPods. */
    public iPhoneAndIPod?: boolean | undefined;
    /**
     * Instantiates a new iosDeviceType and sets the default values.
     * @param iosDeviceTypeParameterValue 
     */
    public constructor(iosDeviceTypeParameterValue?: IosDeviceType | undefined) {
        this.additionalData = iosDeviceTypeParameterValue?.additionalData ? iosDeviceTypeParameterValue?.additionalData! : {};
        this.iPad = iosDeviceTypeParameterValue?.iPad;
        this.iPhoneAndIPod = iosDeviceTypeParameterValue?.iPhoneAndIPod;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "iPad": n => { this.iPad = n.getBooleanValue(); },
            "iPhoneAndIPod": n => { this.iPhoneAndIPod = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.iPad){
            writer.writeBooleanValue("iPad", this.iPad);
        }
        if(this.iPhoneAndIPod){
            writer.writeBooleanValue("iPhoneAndIPod", this.iPhoneAndIPod);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
