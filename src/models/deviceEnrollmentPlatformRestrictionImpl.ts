import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Platform specific enrollment restrictions */
export class DeviceEnrollmentPlatformRestrictionImpl implements DeviceEnrollmentPlatformRestriction {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Max OS version supported */
    public osMaximumVersion?: string | undefined;
    /** Min OS version supported */
    public osMinimumVersion?: string | undefined;
    /** Block personally owned devices from enrolling */
    public personalDeviceEnrollmentBlocked?: boolean | undefined;
    /** Block the platform from enrolling */
    public platformBlocked?: boolean | undefined;
    /**
     * Instantiates a new deviceEnrollmentPlatformRestriction and sets the default values.
     * @param deviceEnrollmentPlatformRestrictionParameterValue 
     */
    public constructor(deviceEnrollmentPlatformRestrictionParameterValue?: DeviceEnrollmentPlatformRestriction | undefined) {
        this.additionalData = deviceEnrollmentPlatformRestrictionParameterValue?.additionalData ? deviceEnrollmentPlatformRestrictionParameterValue?.additionalData! : {};
        this.osMaximumVersion = deviceEnrollmentPlatformRestrictionParameterValue?.osMaximumVersion;
        this.osMinimumVersion = deviceEnrollmentPlatformRestrictionParameterValue?.osMinimumVersion;
        this.personalDeviceEnrollmentBlocked = deviceEnrollmentPlatformRestrictionParameterValue?.personalDeviceEnrollmentBlocked;
        this.platformBlocked = deviceEnrollmentPlatformRestrictionParameterValue?.platformBlocked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "personalDeviceEnrollmentBlocked": n => { this.personalDeviceEnrollmentBlocked = n.getBooleanValue(); },
            "platformBlocked": n => { this.platformBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.osMaximumVersion){
            writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        }
        if(this.osMinimumVersion){
            writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        }
        if(this.personalDeviceEnrollmentBlocked){
            writer.writeBooleanValue("personalDeviceEnrollmentBlocked", this.personalDeviceEnrollmentBlocked);
        }
        if(this.platformBlocked){
            writer.writeBooleanValue("platformBlocked", this.platformBlocked);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
