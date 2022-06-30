import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicyImpl} from './index';
import {IosCompliancePolicy} from './iosCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosCompliancePolicyImpl extends DeviceCompliancePolicyImpl implements IosCompliancePolicy {
    /** Require that devices have enabled device threat protection . */
    private _deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
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
    /** The required passcode type. Possible values are: deviceDefault, alphanumeric, numeric. */
    private _passcodeRequiredType?: RequiredPasswordType | undefined;
    /** Devices must not be jailbroken or rooted. */
    private _securityBlockJailbrokenDevices?: boolean | undefined;
    /**
     * Instantiates a new IosCompliancePolicy and sets the default values.
     * @param iosCompliancePolicyParameterValue 
     */
    public constructor(iosCompliancePolicyParameterValue?: IosCompliancePolicy | undefined) {
        super(iosCompliancePolicyParameterValue);
        this._deviceThreatProtectionEnabled = iosCompliancePolicyParameterValue?.deviceThreatProtectionEnabled;
        this._deviceThreatProtectionRequiredSecurityLevel = iosCompliancePolicyParameterValue?.deviceThreatProtectionRequiredSecurityLevel;
        this._managedEmailProfileRequired = iosCompliancePolicyParameterValue?.managedEmailProfileRequired;
        this._osMaximumVersion = iosCompliancePolicyParameterValue?.osMaximumVersion;
        this._osMinimumVersion = iosCompliancePolicyParameterValue?.osMinimumVersion;
        this._passcodeBlockSimple = iosCompliancePolicyParameterValue?.passcodeBlockSimple;
        this._passcodeExpirationDays = iosCompliancePolicyParameterValue?.passcodeExpirationDays;
        this._passcodeMinimumCharacterSetCount = iosCompliancePolicyParameterValue?.passcodeMinimumCharacterSetCount;
        this._passcodeMinimumLength = iosCompliancePolicyParameterValue?.passcodeMinimumLength;
        this._passcodeMinutesOfInactivityBeforeLock = iosCompliancePolicyParameterValue?.passcodeMinutesOfInactivityBeforeLock;
        this._passcodePreviousPasscodeBlockCount = iosCompliancePolicyParameterValue?.passcodePreviousPasscodeBlockCount;
        this._passcodeRequired = iosCompliancePolicyParameterValue?.passcodeRequired;
        this._passcodeRequiredType = iosCompliancePolicyParameterValue?.passcodeRequiredType;
        this._securityBlockJailbrokenDevices = iosCompliancePolicyParameterValue?.securityBlockJailbrokenDevices;
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
        if(value) {
            this._deviceThreatProtectionEnabled = value;
        }
    };
    /**
     * Gets the deviceThreatProtectionRequiredSecurityLevel property value. Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet.
     * @returns a deviceThreatProtectionLevel
     */
    public get deviceThreatProtectionRequiredSecurityLevel() {
        return this._deviceThreatProtectionRequiredSecurityLevel;
    };
    /**
     * Sets the deviceThreatProtectionRequiredSecurityLevel property value. Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet.
     * @param value Value to set for the deviceThreatProtectionRequiredSecurityLevel property.
     */
    public set deviceThreatProtectionRequiredSecurityLevel(value: DeviceThreatProtectionLevel | undefined) {
        if(value) {
            this._deviceThreatProtectionRequiredSecurityLevel = value;
        }
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
        if(value) {
            this._managedEmailProfileRequired = value;
        }
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
        if(value) {
            this._osMaximumVersion = value;
        }
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
        if(value) {
            this._osMinimumVersion = value;
        }
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
        if(value) {
            this._passcodeBlockSimple = value;
        }
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
        if(value) {
            this._passcodeExpirationDays = value;
        }
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
        if(value) {
            this._passcodeMinimumCharacterSetCount = value;
        }
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
        if(value) {
            this._passcodeMinimumLength = value;
        }
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
        if(value) {
            this._passcodeMinutesOfInactivityBeforeLock = value;
        }
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
        if(value) {
            this._passcodePreviousPasscodeBlockCount = value;
        }
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
        if(value) {
            this._passcodeRequired = value;
        }
    };
    /**
     * Gets the passcodeRequiredType property value. The required passcode type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @returns a requiredPasswordType
     */
    public get passcodeRequiredType() {
        return this._passcodeRequiredType;
    };
    /**
     * Sets the passcodeRequiredType property value. The required passcode type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @param value Value to set for the passcodeRequiredType property.
     */
    public set passcodeRequiredType(value: RequiredPasswordType | undefined) {
        if(value) {
            this._passcodeRequiredType = value;
        }
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
        if(value) {
            this._securityBlockJailbrokenDevices = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceThreatProtectionEnabled){
            writer.writeBooleanValue("deviceThreatProtectionEnabled", this.deviceThreatProtectionEnabled);
        }
        if(this.deviceThreatProtectionRequiredSecurityLevel){
            writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", this.deviceThreatProtectionRequiredSecurityLevel);
        }
        if(this.managedEmailProfileRequired){
            writer.writeBooleanValue("managedEmailProfileRequired", this.managedEmailProfileRequired);
        }
        if(this.osMaximumVersion){
            writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        }
        if(this.osMinimumVersion){
            writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        }
        if(this.passcodeBlockSimple){
            writer.writeBooleanValue("passcodeBlockSimple", this.passcodeBlockSimple);
        }
        if(this.passcodeExpirationDays){
            writer.writeNumberValue("passcodeExpirationDays", this.passcodeExpirationDays);
        }
        if(this.passcodeMinimumCharacterSetCount){
            writer.writeNumberValue("passcodeMinimumCharacterSetCount", this.passcodeMinimumCharacterSetCount);
        }
        if(this.passcodeMinimumLength){
            writer.writeNumberValue("passcodeMinimumLength", this.passcodeMinimumLength);
        }
        if(this.passcodeMinutesOfInactivityBeforeLock){
            writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", this.passcodeMinutesOfInactivityBeforeLock);
        }
        if(this.passcodePreviousPasscodeBlockCount){
            writer.writeNumberValue("passcodePreviousPasscodeBlockCount", this.passcodePreviousPasscodeBlockCount);
        }
        if(this.passcodeRequired){
            writer.writeBooleanValue("passcodeRequired", this.passcodeRequired);
        }
        if(this.passcodeRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", this.passcodeRequiredType);
        }
        if(this.securityBlockJailbrokenDevices){
            writer.writeBooleanValue("securityBlockJailbrokenDevices", this.securityBlockJailbrokenDevices);
        }
    };
}
