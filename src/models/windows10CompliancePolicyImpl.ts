import {DeviceCompliancePolicyImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows10CompliancePolicy} from './windows10CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10CompliancePolicyImpl extends DeviceCompliancePolicyImpl implements Windows10CompliancePolicy {
    /** Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled */
    private _bitLockerEnabled?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    private _codeIntegrityEnabled?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled. */
    private _earlyLaunchAntiMalwareDriverEnabled?: boolean | undefined;
    /** Maximum Windows Phone version. */
    private _mobileOsMaximumVersion?: string | undefined;
    /** Minimum Windows Phone version. */
    private _mobileOsMinimumVersion?: string | undefined;
    /** Maximum Windows 10 version. */
    private _osMaximumVersion?: string | undefined;
    /** Minimum Windows 10 version. */
    private _osMinimumVersion?: string | undefined;
    /** Indicates whether or not to block simple password. */
    private _passwordBlockSimple?: boolean | undefined;
    /** The password expiration in days. */
    private _passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    private _passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** The number of previous passwords to prevent re-use of. */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock Windows device. */
    private _passwordRequired?: boolean | undefined;
    /** Require a password to unlock an idle device. */
    private _passwordRequiredToUnlockFromIdle?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation. */
    private _requireHealthyDeviceReport?: boolean | undefined;
    /** Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled. */
    private _secureBootEnabled?: boolean | undefined;
    /** Require encryption on windows devices. */
    private _storageRequireEncryption?: boolean | undefined;
    /**
     * Gets the bitLockerEnabled property value. Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
     * @returns a boolean
     */
    public get bitLockerEnabled() {
        return this._bitLockerEnabled;
    };
    /**
     * Sets the bitLockerEnabled property value. Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
     * @param value Value to set for the bitLockerEnabled property.
     */
    public set bitLockerEnabled(value: boolean | undefined) {
        if(value) {
            this._bitLockerEnabled = value;
        }
    };
    /**
     * Gets the codeIntegrityEnabled property value. Require devices to be reported as healthy by Windows Device Health Attestation.
     * @returns a boolean
     */
    public get codeIntegrityEnabled() {
        return this._codeIntegrityEnabled;
    };
    /**
     * Sets the codeIntegrityEnabled property value. Require devices to be reported as healthy by Windows Device Health Attestation.
     * @param value Value to set for the codeIntegrityEnabled property.
     */
    public set codeIntegrityEnabled(value: boolean | undefined) {
        if(value) {
            this._codeIntegrityEnabled = value;
        }
    };
    /**
     * Instantiates a new Windows10CompliancePolicy and sets the default values.
     * @param windows10CompliancePolicyParameterValue 
     */
    public constructor(windows10CompliancePolicyParameterValue?: Windows10CompliancePolicy | undefined) {
        super(windows10CompliancePolicyParameterValue);
        this._bitLockerEnabled = windows10CompliancePolicyParameterValue?.bitLockerEnabled;
        this._codeIntegrityEnabled = windows10CompliancePolicyParameterValue?.codeIntegrityEnabled;
        this._earlyLaunchAntiMalwareDriverEnabled = windows10CompliancePolicyParameterValue?.earlyLaunchAntiMalwareDriverEnabled;
        this._mobileOsMaximumVersion = windows10CompliancePolicyParameterValue?.mobileOsMaximumVersion;
        this._mobileOsMinimumVersion = windows10CompliancePolicyParameterValue?.mobileOsMinimumVersion;
        this._osMaximumVersion = windows10CompliancePolicyParameterValue?.osMaximumVersion;
        this._osMinimumVersion = windows10CompliancePolicyParameterValue?.osMinimumVersion;
        this._passwordBlockSimple = windows10CompliancePolicyParameterValue?.passwordBlockSimple;
        this._passwordExpirationDays = windows10CompliancePolicyParameterValue?.passwordExpirationDays;
        this._passwordMinimumCharacterSetCount = windows10CompliancePolicyParameterValue?.passwordMinimumCharacterSetCount;
        this._passwordMinimumLength = windows10CompliancePolicyParameterValue?.passwordMinimumLength;
        this._passwordMinutesOfInactivityBeforeLock = windows10CompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this._passwordPreviousPasswordBlockCount = windows10CompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this._passwordRequired = windows10CompliancePolicyParameterValue?.passwordRequired;
        this._passwordRequiredToUnlockFromIdle = windows10CompliancePolicyParameterValue?.passwordRequiredToUnlockFromIdle;
        this._passwordRequiredType = windows10CompliancePolicyParameterValue?.passwordRequiredType;
        this._requireHealthyDeviceReport = windows10CompliancePolicyParameterValue?.requireHealthyDeviceReport;
        this._secureBootEnabled = windows10CompliancePolicyParameterValue?.secureBootEnabled;
        this._storageRequireEncryption = windows10CompliancePolicyParameterValue?.storageRequireEncryption;
    };
    /**
     * Gets the earlyLaunchAntiMalwareDriverEnabled property value. Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled.
     * @returns a boolean
     */
    public get earlyLaunchAntiMalwareDriverEnabled() {
        return this._earlyLaunchAntiMalwareDriverEnabled;
    };
    /**
     * Sets the earlyLaunchAntiMalwareDriverEnabled property value. Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled.
     * @param value Value to set for the earlyLaunchAntiMalwareDriverEnabled property.
     */
    public set earlyLaunchAntiMalwareDriverEnabled(value: boolean | undefined) {
        if(value) {
            this._earlyLaunchAntiMalwareDriverEnabled = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bitLockerEnabled": n => { this.bitLockerEnabled = n.getBooleanValue(); },
            "codeIntegrityEnabled": n => { this.codeIntegrityEnabled = n.getBooleanValue(); },
            "earlyLaunchAntiMalwareDriverEnabled": n => { this.earlyLaunchAntiMalwareDriverEnabled = n.getBooleanValue(); },
            "mobileOsMaximumVersion": n => { this.mobileOsMaximumVersion = n.getStringValue(); },
            "mobileOsMinimumVersion": n => { this.mobileOsMinimumVersion = n.getStringValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeLock": n => { this.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredToUnlockFromIdle": n => { this.passwordRequiredToUnlockFromIdle = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "requireHealthyDeviceReport": n => { this.requireHealthyDeviceReport = n.getBooleanValue(); },
            "secureBootEnabled": n => { this.secureBootEnabled = n.getBooleanValue(); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the mobileOsMaximumVersion property value. Maximum Windows Phone version.
     * @returns a string
     */
    public get mobileOsMaximumVersion() {
        return this._mobileOsMaximumVersion;
    };
    /**
     * Sets the mobileOsMaximumVersion property value. Maximum Windows Phone version.
     * @param value Value to set for the mobileOsMaximumVersion property.
     */
    public set mobileOsMaximumVersion(value: string | undefined) {
        if(value) {
            this._mobileOsMaximumVersion = value;
        }
    };
    /**
     * Gets the mobileOsMinimumVersion property value. Minimum Windows Phone version.
     * @returns a string
     */
    public get mobileOsMinimumVersion() {
        return this._mobileOsMinimumVersion;
    };
    /**
     * Sets the mobileOsMinimumVersion property value. Minimum Windows Phone version.
     * @param value Value to set for the mobileOsMinimumVersion property.
     */
    public set mobileOsMinimumVersion(value: string | undefined) {
        if(value) {
            this._mobileOsMinimumVersion = value;
        }
    };
    /**
     * Gets the osMaximumVersion property value. Maximum Windows 10 version.
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Maximum Windows 10 version.
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        if(value) {
            this._osMaximumVersion = value;
        }
    };
    /**
     * Gets the osMinimumVersion property value. Minimum Windows 10 version.
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Minimum Windows 10 version.
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        if(value) {
            this._osMinimumVersion = value;
        }
    };
    /**
     * Gets the passwordBlockSimple property value. Indicates whether or not to block simple password.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Indicates whether or not to block simple password.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        if(value) {
            this._passwordBlockSimple = value;
        }
    };
    /**
     * Gets the passwordExpirationDays property value. The password expiration in days.
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. The password expiration in days.
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        if(value) {
            this._passwordExpirationDays = value;
        }
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
        if(value) {
            this._passwordMinimumCharacterSetCount = value;
        }
    };
    /**
     * Gets the passwordMinimumLength property value. The minimum password length.
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. The minimum password length.
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        if(value) {
            this._passwordMinimumLength = value;
        }
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
        if(value) {
            this._passwordMinutesOfInactivityBeforeLock = value;
        }
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent re-use of.
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent re-use of.
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        if(value) {
            this._passwordPreviousPasswordBlockCount = value;
        }
    };
    /**
     * Gets the passwordRequired property value. Require a password to unlock Windows device.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Require a password to unlock Windows device.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        if(value) {
            this._passwordRequired = value;
        }
    };
    /**
     * Gets the passwordRequiredToUnlockFromIdle property value. Require a password to unlock an idle device.
     * @returns a boolean
     */
    public get passwordRequiredToUnlockFromIdle() {
        return this._passwordRequiredToUnlockFromIdle;
    };
    /**
     * Sets the passwordRequiredToUnlockFromIdle property value. Require a password to unlock an idle device.
     * @param value Value to set for the passwordRequiredToUnlockFromIdle property.
     */
    public set passwordRequiredToUnlockFromIdle(value: boolean | undefined) {
        if(value) {
            this._passwordRequiredToUnlockFromIdle = value;
        }
    };
    /**
     * Gets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        if(value) {
            this._passwordRequiredType = value;
        }
    };
    /**
     * Gets the requireHealthyDeviceReport property value. Require devices to be reported as healthy by Windows Device Health Attestation.
     * @returns a boolean
     */
    public get requireHealthyDeviceReport() {
        return this._requireHealthyDeviceReport;
    };
    /**
     * Sets the requireHealthyDeviceReport property value. Require devices to be reported as healthy by Windows Device Health Attestation.
     * @param value Value to set for the requireHealthyDeviceReport property.
     */
    public set requireHealthyDeviceReport(value: boolean | undefined) {
        if(value) {
            this._requireHealthyDeviceReport = value;
        }
    };
    /**
     * Gets the secureBootEnabled property value. Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
     * @returns a boolean
     */
    public get secureBootEnabled() {
        return this._secureBootEnabled;
    };
    /**
     * Sets the secureBootEnabled property value. Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
     * @param value Value to set for the secureBootEnabled property.
     */
    public set secureBootEnabled(value: boolean | undefined) {
        if(value) {
            this._secureBootEnabled = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bitLockerEnabled){
            writer.writeBooleanValue("bitLockerEnabled", this.bitLockerEnabled);
        }
        if(this.codeIntegrityEnabled){
            writer.writeBooleanValue("codeIntegrityEnabled", this.codeIntegrityEnabled);
        }
        if(this.earlyLaunchAntiMalwareDriverEnabled){
            writer.writeBooleanValue("earlyLaunchAntiMalwareDriverEnabled", this.earlyLaunchAntiMalwareDriverEnabled);
        }
        if(this.mobileOsMaximumVersion){
            writer.writeStringValue("mobileOsMaximumVersion", this.mobileOsMaximumVersion);
        }
        if(this.mobileOsMinimumVersion){
            writer.writeStringValue("mobileOsMinimumVersion", this.mobileOsMinimumVersion);
        }
        if(this.osMaximumVersion){
            writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        }
        if(this.osMinimumVersion){
            writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        }
        if(this.passwordBlockSimple){
            writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumCharacterSetCount){
            writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeLock){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", this.passwordMinutesOfInactivityBeforeLock);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequired){
            writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        }
        if(this.passwordRequiredToUnlockFromIdle){
            writer.writeBooleanValue("passwordRequiredToUnlockFromIdle", this.passwordRequiredToUnlockFromIdle);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.requireHealthyDeviceReport){
            writer.writeBooleanValue("requireHealthyDeviceReport", this.requireHealthyDeviceReport);
        }
        if(this.secureBootEnabled){
            writer.writeBooleanValue("secureBootEnabled", this.secureBootEnabled);
        }
        if(this.storageRequireEncryption){
            writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        }
    };
    /**
     * Gets the storageRequireEncryption property value. Require encryption on windows devices.
     * @returns a boolean
     */
    public get storageRequireEncryption() {
        return this._storageRequireEncryption;
    };
    /**
     * Sets the storageRequireEncryption property value. Require encryption on windows devices.
     * @param value Value to set for the storageRequireEncryption property.
     */
    public set storageRequireEncryption(value: boolean | undefined) {
        if(value) {
            this._storageRequireEncryption = value;
        }
    };
}
