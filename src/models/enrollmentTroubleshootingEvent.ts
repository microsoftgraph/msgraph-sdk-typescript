import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementTroubleshootingEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent implements Parsable {
    /** Azure AD device identifier. */
    private _deviceId?: string | undefined;
    /** Possible ways of adding a mobile device to management. */
    private _enrollmentType?: DeviceEnrollmentType | undefined;
    /** Top level failure categories for enrollment. */
    private _failureCategory?: DeviceEnrollmentFailureReason | undefined;
    /** Detailed failure reason. */
    private _failureReason?: string | undefined;
    /** Device identifier created or collected by Intune. */
    private _managedDeviceIdentifier?: string | undefined;
    /** Operating System. */
    private _operatingSystem?: string | undefined;
    /** OS Version. */
    private _osVersion?: string | undefined;
    /** Identifier for the user that tried to enroll the device. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new EnrollmentTroubleshootingEvent and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.enrollmentTroubleshootingEvent";
    };
    /**
     * Gets the deviceId property value. Azure AD device identifier.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Azure AD device identifier.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Gets the enrollmentType property value. Possible ways of adding a mobile device to management.
     * @returns a deviceEnrollmentType
     */
    public get enrollmentType() {
        return this._enrollmentType;
    };
    /**
     * Sets the enrollmentType property value. Possible ways of adding a mobile device to management.
     * @param value Value to set for the enrollmentType property.
     */
    public set enrollmentType(value: DeviceEnrollmentType | undefined) {
        this._enrollmentType = value;
    };
    /**
     * Gets the failureCategory property value. Top level failure categories for enrollment.
     * @returns a deviceEnrollmentFailureReason
     */
    public get failureCategory() {
        return this._failureCategory;
    };
    /**
     * Sets the failureCategory property value. Top level failure categories for enrollment.
     * @param value Value to set for the failureCategory property.
     */
    public set failureCategory(value: DeviceEnrollmentFailureReason | undefined) {
        this._failureCategory = value;
    };
    /**
     * Gets the failureReason property value. Detailed failure reason.
     * @returns a string
     */
    public get failureReason() {
        return this._failureReason;
    };
    /**
     * Sets the failureReason property value. Detailed failure reason.
     * @param value Value to set for the failureReason property.
     */
    public set failureReason(value: string | undefined) {
        this._failureReason = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "enrollmentType": n => { this.enrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
            "failureCategory": n => { this.failureCategory = n.getEnumValue<DeviceEnrollmentFailureReason>(DeviceEnrollmentFailureReason); },
            "failureReason": n => { this.failureReason = n.getStringValue(); },
            "managedDeviceIdentifier": n => { this.managedDeviceIdentifier = n.getStringValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the managedDeviceIdentifier property value. Device identifier created or collected by Intune.
     * @returns a string
     */
    public get managedDeviceIdentifier() {
        return this._managedDeviceIdentifier;
    };
    /**
     * Sets the managedDeviceIdentifier property value. Device identifier created or collected by Intune.
     * @param value Value to set for the managedDeviceIdentifier property.
     */
    public set managedDeviceIdentifier(value: string | undefined) {
        this._managedDeviceIdentifier = value;
    };
    /**
     * Gets the operatingSystem property value. Operating System.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. Operating System.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Gets the osVersion property value. OS Version.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. OS Version.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        this._osVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeEnumValue<DeviceEnrollmentType>("enrollmentType", this.enrollmentType);
        writer.writeEnumValue<DeviceEnrollmentFailureReason>("failureCategory", this.failureCategory);
        writer.writeStringValue("failureReason", this.failureReason);
        writer.writeStringValue("managedDeviceIdentifier", this.managedDeviceIdentifier);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. Identifier for the user that tried to enroll the device.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Identifier for the user that tried to enroll the device.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
