import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSCompliancePolicy extends DeviceCompliancePolicy implements Parsable {
    /** Require that devices have enabled device threat protection. */
    private _deviceThreatProtectionEnabled?: boolean | undefined;
    /** Device threat protection levels for the Device Threat Protection API. */
    private _deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Corresponds to the 'Block all incoming connections' option. */
    private _firewallBlockAllIncoming?: boolean | undefined;
    /** Whether the firewall should be enabled or not. */
    private _firewallEnabled?: boolean | undefined;
    /** Corresponds to 'Enable stealth mode.' */
    private _firewallEnableStealthMode?: boolean | undefined;
    /** Maximum MacOS version. */
    private _osMaximumVersion?: string | undefined;
    /** Minimum MacOS version. */
    private _osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple passwords. */
    private _passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 65535 */
    private _passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of password. Valid values 4 to 14 */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    private _passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    private _passwordRequired?: boolean | undefined;
    /** Possible values of required passwords. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require encryption on Mac OS devices. */
    private _storageRequireEncryption?: boolean | undefined;
    /** Require that devices have enabled system integrity protection. */
    private _systemIntegrityProtectionEnabled?: boolean | undefined;
    /**
     * Instantiates a new MacOSCompliancePolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceThreatProtectionEnabled property value. Require that devices have enabled device threat protection.
     * @returns a boolean
     */
    public get deviceThreatProtectionEnabled() {
        return this._deviceThreatProtectionEnabled;
    };
    /**
     * Sets the deviceThreatProtectionEnabled property value. Require that devices have enabled device threat protection.
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
     * Gets the firewallBlockAllIncoming property value. Corresponds to the 'Block all incoming connections' option.
     * @returns a boolean
     */
    public get firewallBlockAllIncoming() {
        return this._firewallBlockAllIncoming;
    };
    /**
     * Sets the firewallBlockAllIncoming property value. Corresponds to the 'Block all incoming connections' option.
     * @param value Value to set for the firewallBlockAllIncoming property.
     */
    public set firewallBlockAllIncoming(value: boolean | undefined) {
        this._firewallBlockAllIncoming = value;
    };
    /**
     * Gets the firewallEnabled property value. Whether the firewall should be enabled or not.
     * @returns a boolean
     */
    public get firewallEnabled() {
        return this._firewallEnabled;
    };
    /**
     * Sets the firewallEnabled property value. Whether the firewall should be enabled or not.
     * @param value Value to set for the firewallEnabled property.
     */
    public set firewallEnabled(value: boolean | undefined) {
        this._firewallEnabled = value;
    };
    /**
     * Gets the firewallEnableStealthMode property value. Corresponds to 'Enable stealth mode.'
     * @returns a boolean
     */
    public get firewallEnableStealthMode() {
        return this._firewallEnableStealthMode;
    };
    /**
     * Sets the firewallEnableStealthMode property value. Corresponds to 'Enable stealth mode.'
     * @param value Value to set for the firewallEnableStealthMode property.
     */
    public set firewallEnableStealthMode(value: boolean | undefined) {
        this._firewallEnableStealthMode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceThreatProtectionEnabled": n => { this.deviceThreatProtectionEnabled = n.getBooleanValue(); },
            "deviceThreatProtectionRequiredSecurityLevel": n => { this.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
            "firewallBlockAllIncoming": n => { this.firewallBlockAllIncoming = n.getBooleanValue(); },
            "firewallEnabled": n => { this.firewallEnabled = n.getBooleanValue(); },
            "firewallEnableStealthMode": n => { this.firewallEnableStealthMode = n.getBooleanValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeLock": n => { this.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
            "systemIntegrityProtectionEnabled": n => { this.systemIntegrityProtectionEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the osMaximumVersion property value. Maximum MacOS version.
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Maximum MacOS version.
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        this._osMaximumVersion = value;
    };
    /**
     * Gets the osMinimumVersion property value. Minimum MacOS version.
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Minimum MacOS version.
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        this._osMinimumVersion = value;
    };
    /**
     * Gets the passwordBlockSimple property value. Indicates whether or not to block simple passwords.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Indicates whether or not to block simple passwords.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        this._passwordBlockSimple = value;
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 65535
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 65535
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
    };
    /**
     * Gets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @returns a integer
     */
    public get passwordMinimumCharacterSetCount() {
        return this._passwordMinimumCharacterSetCount;
    };
    /**
     * Sets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @param value Value to set for the passwordMinimumCharacterSetCount property.
     */
    public set passwordMinimumCharacterSetCount(value: number | undefined) {
        this._passwordMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum length of password. Valid values 4 to 14
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum length of password. Valid values 4 to 14
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a password is required.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeLock() {
        return this._passwordMinutesOfInactivityBeforeLock;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a password is required.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeLock property.
     */
    public set passwordMinutesOfInactivityBeforeLock(value: number | undefined) {
        this._passwordMinutesOfInactivityBeforeLock = value;
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 1 to 24
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 1 to 24
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        this._passwordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the passwordRequired property value. Whether or not to require a password.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Whether or not to require a password.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        this._passwordRequired = value;
    };
    /**
     * Gets the passwordRequiredType property value. Possible values of required passwords.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. Possible values of required passwords.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        this._passwordRequiredType = value;
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
        writer.writeBooleanValue("firewallBlockAllIncoming", this.firewallBlockAllIncoming);
        writer.writeBooleanValue("firewallEnabled", this.firewallEnabled);
        writer.writeBooleanValue("firewallEnableStealthMode", this.firewallEnableStealthMode);
        writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", this.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        writer.writeBooleanValue("systemIntegrityProtectionEnabled", this.systemIntegrityProtectionEnabled);
    };
    /**
     * Gets the storageRequireEncryption property value. Require encryption on Mac OS devices.
     * @returns a boolean
     */
    public get storageRequireEncryption() {
        return this._storageRequireEncryption;
    };
    /**
     * Sets the storageRequireEncryption property value. Require encryption on Mac OS devices.
     * @param value Value to set for the storageRequireEncryption property.
     */
    public set storageRequireEncryption(value: boolean | undefined) {
        this._storageRequireEncryption = value;
    };
    /**
     * Gets the systemIntegrityProtectionEnabled property value. Require that devices have enabled system integrity protection.
     * @returns a boolean
     */
    public get systemIntegrityProtectionEnabled() {
        return this._systemIntegrityProtectionEnabled;
    };
    /**
     * Sets the systemIntegrityProtectionEnabled property value. Require that devices have enabled system integrity protection.
     * @param value Value to set for the systemIntegrityProtectionEnabled property.
     */
    public set systemIntegrityProtectionEnabled(value: boolean | undefined) {
        this._systemIntegrityProtectionEnabled = value;
    };
}
