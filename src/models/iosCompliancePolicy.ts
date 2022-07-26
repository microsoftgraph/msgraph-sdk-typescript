import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosCompliancePolicy extends DeviceCompliancePolicy implements Parsable {
    /** Require that devices have enabled device threat protection . */
    private _deviceThreatProtectionEnabled?: boolean | undefined;
    /** Device threat protection levels for the Device Threat Protection API. */
    private _deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Indicates whether or not to require a managed email profile. */
    private _managedEmailProfileRequired?: boolean | undefined;
    /** Maximum IOS version. */
    private _osMaximumVersion?: string | undefined;
    /** Minimum IOS version. */
    private _osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple passcodes. */
    private _passcodeBlockSimple?: boolean | undefined;
    /** Number of days before the passcode expires. Valid values 1 to 65535 */
    private _passcodeExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passcodeMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passcode. Valid values 4 to 14 */
    private _passcodeMinimumLength?: number | undefined;
    /** Minutes of inactivity before a passcode is required. */
    private _passcodeMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passcodes to block. Valid values 1 to 24 */
    private _passcodePreviousPasscodeBlockCount?: number | undefined;
    /** Indicates whether or not to require a passcode. */
    private _passcodeRequired?: boolean | undefined;
    /** Possible values of required passwords. */
    private _passcodeRequiredType?: RequiredPasswordType | undefined;
    /** Devices must not be jailbroken or rooted. */
    private _securityBlockJailbrokenDevices?: boolean | undefined;
    /**
     * Instantiates a new IosCompliancePolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosCompliancePolicy";
    };
    /**
     * Gets the deviceThreatProtectionEnabled property value. Require that devices have enabled device threat protection .
     * @returns a boolean
     */
    public get deviceThreatProtectionEnabled() {
        return this._deviceThreatProtectionEnabled;
    };
    /**
     * Sets the deviceThreatProtectionEnabled property value. Require that devices have enabled device threat protection .
     * @param value Value to set for the deviceThreatProtectionEnabled property.
     */
    public set deviceThreatProtectionEnabled(value: boolean | undefined) {
        this._deviceThreatProtectionEnabled = value;
    };
    /**
     * Gets the deviceThreatProtectionRequiredSecurityLevel property value. Device threat protection levels for the Device Threat Protection API.
     * @returns a deviceThreatProtectionLevel
     */
    public get deviceThreatProtectionRequiredSecurityLevel() {
        return this._deviceThreatProtectionRequiredSecurityLevel;
    };
    /**
     * Sets the deviceThreatProtectionRequiredSecurityLevel property value. Device threat protection levels for the Device Threat Protection API.
     * @param value Value to set for the deviceThreatProtectionRequiredSecurityLevel property.
     */
    public set deviceThreatProtectionRequiredSecurityLevel(value: DeviceThreatProtectionLevel | undefined) {
        this._deviceThreatProtectionRequiredSecurityLevel = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceThreatProtectionEnabled": n => { this.deviceThreatProtectionEnabled = n.getBooleanValue(); },
            "deviceThreatProtectionRequiredSecurityLevel": n => { this.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
            "managedEmailProfileRequired": n => { this.managedEmailProfileRequired = n.getBooleanValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passcodeBlockSimple": n => { this.passcodeBlockSimple = n.getBooleanValue(); },
            "passcodeExpirationDays": n => { this.passcodeExpirationDays = n.getNumberValue(); },
            "passcodeMinimumCharacterSetCount": n => { this.passcodeMinimumCharacterSetCount = n.getNumberValue(); },
            "passcodeMinimumLength": n => { this.passcodeMinimumLength = n.getNumberValue(); },
            "passcodeMinutesOfInactivityBeforeLock": n => { this.passcodeMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passcodePreviousPasscodeBlockCount": n => { this.passcodePreviousPasscodeBlockCount = n.getNumberValue(); },
            "passcodeRequired": n => { this.passcodeRequired = n.getBooleanValue(); },
            "passcodeRequiredType": n => { this.passcodeRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "securityBlockJailbrokenDevices": n => { this.securityBlockJailbrokenDevices = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the managedEmailProfileRequired property value. Indicates whether or not to require a managed email profile.
     * @returns a boolean
     */
    public get managedEmailProfileRequired() {
        return this._managedEmailProfileRequired;
    };
    /**
     * Sets the managedEmailProfileRequired property value. Indicates whether or not to require a managed email profile.
     * @param value Value to set for the managedEmailProfileRequired property.
     */
    public set managedEmailProfileRequired(value: boolean | undefined) {
        this._managedEmailProfileRequired = value;
    };
    /**
     * Gets the osMaximumVersion property value. Maximum IOS version.
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Maximum IOS version.
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        this._osMaximumVersion = value;
    };
    /**
     * Gets the osMinimumVersion property value. Minimum IOS version.
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Minimum IOS version.
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        this._osMinimumVersion = value;
    };
    /**
     * Gets the passcodeBlockSimple property value. Indicates whether or not to block simple passcodes.
     * @returns a boolean
     */
    public get passcodeBlockSimple() {
        return this._passcodeBlockSimple;
    };
    /**
     * Sets the passcodeBlockSimple property value. Indicates whether or not to block simple passcodes.
     * @param value Value to set for the passcodeBlockSimple property.
     */
    public set passcodeBlockSimple(value: boolean | undefined) {
        this._passcodeBlockSimple = value;
    };
    /**
     * Gets the passcodeExpirationDays property value. Number of days before the passcode expires. Valid values 1 to 65535
     * @returns a integer
     */
    public get passcodeExpirationDays() {
        return this._passcodeExpirationDays;
    };
    /**
     * Sets the passcodeExpirationDays property value. Number of days before the passcode expires. Valid values 1 to 65535
     * @param value Value to set for the passcodeExpirationDays property.
     */
    public set passcodeExpirationDays(value: number | undefined) {
        this._passcodeExpirationDays = value;
    };
    /**
     * Gets the passcodeMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @returns a integer
     */
    public get passcodeMinimumCharacterSetCount() {
        return this._passcodeMinimumCharacterSetCount;
    };
    /**
     * Sets the passcodeMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @param value Value to set for the passcodeMinimumCharacterSetCount property.
     */
    public set passcodeMinimumCharacterSetCount(value: number | undefined) {
        this._passcodeMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passcodeMinimumLength property value. Minimum length of passcode. Valid values 4 to 14
     * @returns a integer
     */
    public get passcodeMinimumLength() {
        return this._passcodeMinimumLength;
    };
    /**
     * Sets the passcodeMinimumLength property value. Minimum length of passcode. Valid values 4 to 14
     * @param value Value to set for the passcodeMinimumLength property.
     */
    public set passcodeMinimumLength(value: number | undefined) {
        this._passcodeMinimumLength = value;
    };
    /**
     * Gets the passcodeMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a passcode is required.
     * @returns a integer
     */
    public get passcodeMinutesOfInactivityBeforeLock() {
        return this._passcodeMinutesOfInactivityBeforeLock;
    };
    /**
     * Sets the passcodeMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a passcode is required.
     * @param value Value to set for the passcodeMinutesOfInactivityBeforeLock property.
     */
    public set passcodeMinutesOfInactivityBeforeLock(value: number | undefined) {
        this._passcodeMinutesOfInactivityBeforeLock = value;
    };
    /**
     * Gets the passcodePreviousPasscodeBlockCount property value. Number of previous passcodes to block. Valid values 1 to 24
     * @returns a integer
     */
    public get passcodePreviousPasscodeBlockCount() {
        return this._passcodePreviousPasscodeBlockCount;
    };
    /**
     * Sets the passcodePreviousPasscodeBlockCount property value. Number of previous passcodes to block. Valid values 1 to 24
     * @param value Value to set for the passcodePreviousPasscodeBlockCount property.
     */
    public set passcodePreviousPasscodeBlockCount(value: number | undefined) {
        this._passcodePreviousPasscodeBlockCount = value;
    };
    /**
     * Gets the passcodeRequired property value. Indicates whether or not to require a passcode.
     * @returns a boolean
     */
    public get passcodeRequired() {
        return this._passcodeRequired;
    };
    /**
     * Sets the passcodeRequired property value. Indicates whether or not to require a passcode.
     * @param value Value to set for the passcodeRequired property.
     */
    public set passcodeRequired(value: boolean | undefined) {
        this._passcodeRequired = value;
    };
    /**
     * Gets the passcodeRequiredType property value. Possible values of required passwords.
     * @returns a requiredPasswordType
     */
    public get passcodeRequiredType() {
        return this._passcodeRequiredType;
    };
    /**
     * Sets the passcodeRequiredType property value. Possible values of required passwords.
     * @param value Value to set for the passcodeRequiredType property.
     */
    public set passcodeRequiredType(value: RequiredPasswordType | undefined) {
        this._passcodeRequiredType = value;
    };
    /**
     * Gets the securityBlockJailbrokenDevices property value. Devices must not be jailbroken or rooted.
     * @returns a boolean
     */
    public get securityBlockJailbrokenDevices() {
        return this._securityBlockJailbrokenDevices;
    };
    /**
     * Sets the securityBlockJailbrokenDevices property value. Devices must not be jailbroken or rooted.
     * @param value Value to set for the securityBlockJailbrokenDevices property.
     */
    public set securityBlockJailbrokenDevices(value: boolean | undefined) {
        this._securityBlockJailbrokenDevices = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("deviceThreatProtectionEnabled", this.deviceThreatProtectionEnabled);
        writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", this.deviceThreatProtectionRequiredSecurityLevel);
        writer.writeBooleanValue("managedEmailProfileRequired", this.managedEmailProfileRequired);
        writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        writer.writeBooleanValue("passcodeBlockSimple", this.passcodeBlockSimple);
        writer.writeNumberValue("passcodeExpirationDays", this.passcodeExpirationDays);
        writer.writeNumberValue("passcodeMinimumCharacterSetCount", this.passcodeMinimumCharacterSetCount);
        writer.writeNumberValue("passcodeMinimumLength", this.passcodeMinimumLength);
        writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", this.passcodeMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passcodePreviousPasscodeBlockCount", this.passcodePreviousPasscodeBlockCount);
        writer.writeBooleanValue("passcodeRequired", this.passcodeRequired);
        writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", this.passcodeRequiredType);
        writer.writeBooleanValue("securityBlockJailbrokenDevices", this.securityBlockJailbrokenDevices);
    };
}
