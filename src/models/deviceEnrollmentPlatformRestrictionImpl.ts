import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Platform specific enrollment restrictions */
export class DeviceEnrollmentPlatformRestrictionImpl implements DeviceEnrollmentPlatformRestriction {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Max OS version supported */
    private _osMaximumVersion?: string | undefined;
    /** Min OS version supported */
    private _osMinimumVersion?: string | undefined;
    /** Block personally owned devices from enrolling */
    private _personalDeviceEnrollmentBlocked?: boolean | undefined;
    /** Block the platform from enrolling */
    private _platformBlocked?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new deviceEnrollmentPlatformRestriction and sets the default values.
     * @param deviceEnrollmentPlatformRestrictionParameterValue 
     */
    public constructor(deviceEnrollmentPlatformRestrictionParameterValue?: DeviceEnrollmentPlatformRestriction | undefined) {
        this._additionalData = deviceEnrollmentPlatformRestrictionParameterValue?.additionalData ? deviceEnrollmentPlatformRestrictionParameterValue?.additionalData! : {};
        this._osMaximumVersion = deviceEnrollmentPlatformRestrictionParameterValue?.osMaximumVersion;
        this._osMinimumVersion = deviceEnrollmentPlatformRestrictionParameterValue?.osMinimumVersion;
        this._personalDeviceEnrollmentBlocked = deviceEnrollmentPlatformRestrictionParameterValue?.personalDeviceEnrollmentBlocked;
        this._platformBlocked = deviceEnrollmentPlatformRestrictionParameterValue?.platformBlocked;
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
     * Gets the osMaximumVersion property value. Max OS version supported
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Max OS version supported
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        if(value) {
            this._osMaximumVersion = value;
        }
    };
    /**
     * Gets the osMinimumVersion property value. Min OS version supported
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Min OS version supported
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        if(value) {
            this._osMinimumVersion = value;
        }
    };
    /**
     * Gets the personalDeviceEnrollmentBlocked property value. Block personally owned devices from enrolling
     * @returns a boolean
     */
    public get personalDeviceEnrollmentBlocked() {
        return this._personalDeviceEnrollmentBlocked;
    };
    /**
     * Sets the personalDeviceEnrollmentBlocked property value. Block personally owned devices from enrolling
     * @param value Value to set for the personalDeviceEnrollmentBlocked property.
     */
    public set personalDeviceEnrollmentBlocked(value: boolean | undefined) {
        if(value) {
            this._personalDeviceEnrollmentBlocked = value;
        }
    };
    /**
     * Gets the platformBlocked property value. Block the platform from enrolling
     * @returns a boolean
     */
    public get platformBlocked() {
        return this._platformBlocked;
    };
    /**
     * Sets the platformBlocked property value. Block the platform from enrolling
     * @param value Value to set for the platformBlocked property.
     */
    public set platformBlocked(value: boolean | undefined) {
        if(value) {
            this._platformBlocked = value;
        }
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
