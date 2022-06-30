import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AndroidWorkProfileCompliancePolicy} from './androidWorkProfileCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicyImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileCompliancePolicyImpl extends DeviceCompliancePolicyImpl implements AndroidWorkProfileCompliancePolicy {
    /** Require that devices have enabled device threat protection. */
    private _deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
    private _deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Minimum Android security patch level. */
    private _minAndroidSecurityPatchLevel?: string | undefined;
    /** Maximum Android version. */
    private _osMaximumVersion?: string | undefined;
    /** Minimum Android version. */
    private _osMinimumVersion?: string | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    private _passwordExpirationDays?: number | undefined;
    /** Minimum password length. Valid values 4 to 16 */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    private _passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock device. */
    private _passwordRequired?: boolean | undefined;
    /** Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any. */
    private _passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /** Devices must not be jailbroken or rooted. */
    private _securityBlockJailbrokenDevices?: boolean | undefined;
    /** Disable USB debugging on Android devices. */
    private _securityDisableUsbDebugging?: boolean | undefined;
    /** Require that devices disallow installation of apps from unknown sources. */
    private _securityPreventInstallAppsFromUnknownSources?: boolean | undefined;
    /** Require the device to pass the Company Portal client app runtime integrity check. */
    private _securityRequireCompanyPortalAppIntegrity?: boolean | undefined;
    /** Require Google Play Services to be installed and enabled on the device. */
    private _securityRequireGooglePlayServices?: boolean | undefined;
    /** Require the device to pass the SafetyNet basic integrity check. */
    private _securityRequireSafetyNetAttestationBasicIntegrity?: boolean | undefined;
    /** Require the device to pass the SafetyNet certified device check. */
    private _securityRequireSafetyNetAttestationCertifiedDevice?: boolean | undefined;
    /** Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date. */
    private _securityRequireUpToDateSecurityProviders?: boolean | undefined;
    /** Require the Android Verify apps feature is turned on. */
    private _securityRequireVerifyApps?: boolean | undefined;
    /** Require encryption on Android devices. */
    private _storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new AndroidWorkProfileCompliancePolicy and sets the default values.
     * @param androidWorkProfileCompliancePolicyParameterValue 
     */
    public constructor(androidWorkProfileCompliancePolicyParameterValue?: AndroidWorkProfileCompliancePolicy | undefined) {
        super(androidWorkProfileCompliancePolicyParameterValue);
        this._deviceThreatProtectionEnabled = androidWorkProfileCompliancePolicyParameterValue?.deviceThreatProtectionEnabled;
        this._deviceThreatProtectionRequiredSecurityLevel = androidWorkProfileCompliancePolicyParameterValue?.deviceThreatProtectionRequiredSecurityLevel;
        this._minAndroidSecurityPatchLevel = androidWorkProfileCompliancePolicyParameterValue?.minAndroidSecurityPatchLevel;
        this._osMaximumVersion = androidWorkProfileCompliancePolicyParameterValue?.osMaximumVersion;
        this._osMinimumVersion = androidWorkProfileCompliancePolicyParameterValue?.osMinimumVersion;
        this._passwordExpirationDays = androidWorkProfileCompliancePolicyParameterValue?.passwordExpirationDays;
        this._passwordMinimumLength = androidWorkProfileCompliancePolicyParameterValue?.passwordMinimumLength;
        this._passwordMinutesOfInactivityBeforeLock = androidWorkProfileCompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this._passwordPreviousPasswordBlockCount = androidWorkProfileCompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this._passwordRequired = androidWorkProfileCompliancePolicyParameterValue?.passwordRequired;
        this._passwordRequiredType = androidWorkProfileCompliancePolicyParameterValue?.passwordRequiredType;
        this._securityBlockJailbrokenDevices = androidWorkProfileCompliancePolicyParameterValue?.securityBlockJailbrokenDevices;
        this._securityDisableUsbDebugging = androidWorkProfileCompliancePolicyParameterValue?.securityDisableUsbDebugging;
        this._securityPreventInstallAppsFromUnknownSources = androidWorkProfileCompliancePolicyParameterValue?.securityPreventInstallAppsFromUnknownSources;
        this._securityRequireCompanyPortalAppIntegrity = androidWorkProfileCompliancePolicyParameterValue?.securityRequireCompanyPortalAppIntegrity;
        this._securityRequireGooglePlayServices = androidWorkProfileCompliancePolicyParameterValue?.securityRequireGooglePlayServices;
        this._securityRequireSafetyNetAttestationBasicIntegrity = androidWorkProfileCompliancePolicyParameterValue?.securityRequireSafetyNetAttestationBasicIntegrity;
        this._securityRequireSafetyNetAttestationCertifiedDevice = androidWorkProfileCompliancePolicyParameterValue?.securityRequireSafetyNetAttestationCertifiedDevice;
        this._securityRequireUpToDateSecurityProviders = androidWorkProfileCompliancePolicyParameterValue?.securityRequireUpToDateSecurityProviders;
        this._securityRequireVerifyApps = androidWorkProfileCompliancePolicyParameterValue?.securityRequireVerifyApps;
        this._storageRequireEncryption = androidWorkProfileCompliancePolicyParameterValue?.storageRequireEncryption;
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
            "minAndroidSecurityPatchLevel": n => { this.minAndroidSecurityPatchLevel = n.getStringValue(); },
            "osMaximumVersion": n => { this.osMaximumVersion = n.getStringValue(); },
            "osMinimumVersion": n => { this.osMinimumVersion = n.getStringValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeLock": n => { this.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType); },
            "securityBlockJailbrokenDevices": n => { this.securityBlockJailbrokenDevices = n.getBooleanValue(); },
            "securityDisableUsbDebugging": n => { this.securityDisableUsbDebugging = n.getBooleanValue(); },
            "securityPreventInstallAppsFromUnknownSources": n => { this.securityPreventInstallAppsFromUnknownSources = n.getBooleanValue(); },
            "securityRequireCompanyPortalAppIntegrity": n => { this.securityRequireCompanyPortalAppIntegrity = n.getBooleanValue(); },
            "securityRequireGooglePlayServices": n => { this.securityRequireGooglePlayServices = n.getBooleanValue(); },
            "securityRequireSafetyNetAttestationBasicIntegrity": n => { this.securityRequireSafetyNetAttestationBasicIntegrity = n.getBooleanValue(); },
            "securityRequireSafetyNetAttestationCertifiedDevice": n => { this.securityRequireSafetyNetAttestationCertifiedDevice = n.getBooleanValue(); },
            "securityRequireUpToDateSecurityProviders": n => { this.securityRequireUpToDateSecurityProviders = n.getBooleanValue(); },
            "securityRequireVerifyApps": n => { this.securityRequireVerifyApps = n.getBooleanValue(); },
            "storageRequireEncryption": n => { this.storageRequireEncryption = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the minAndroidSecurityPatchLevel property value. Minimum Android security patch level.
     * @returns a string
     */
    public get minAndroidSecurityPatchLevel() {
        return this._minAndroidSecurityPatchLevel;
    };
    /**
     * Sets the minAndroidSecurityPatchLevel property value. Minimum Android security patch level.
     * @param value Value to set for the minAndroidSecurityPatchLevel property.
     */
    public set minAndroidSecurityPatchLevel(value: string | undefined) {
        if(value) {
            this._minAndroidSecurityPatchLevel = value;
        }
    };
    /**
     * Gets the osMaximumVersion property value. Maximum Android version.
     * @returns a string
     */
    public get osMaximumVersion() {
        return this._osMaximumVersion;
    };
    /**
     * Sets the osMaximumVersion property value. Maximum Android version.
     * @param value Value to set for the osMaximumVersion property.
     */
    public set osMaximumVersion(value: string | undefined) {
        if(value) {
            this._osMaximumVersion = value;
        }
    };
    /**
     * Gets the osMinimumVersion property value. Minimum Android version.
     * @returns a string
     */
    public get osMinimumVersion() {
        return this._osMinimumVersion;
    };
    /**
     * Sets the osMinimumVersion property value. Minimum Android version.
     * @param value Value to set for the osMinimumVersion property.
     */
    public set osMinimumVersion(value: string | undefined) {
        if(value) {
            this._osMinimumVersion = value;
        }
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 365
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 365
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        if(value) {
            this._passwordExpirationDays = value;
        }
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum password length. Valid values 4 to 16
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum password length. Valid values 4 to 16
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
        if(value) {
            this._passwordPreviousPasswordBlockCount = value;
        }
    };
    /**
     * Gets the passwordRequired property value. Require a password to unlock device.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Require a password to unlock device.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        if(value) {
            this._passwordRequired = value;
        }
    };
    /**
     * Gets the passwordRequiredType property value. Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any.
     * @returns a androidRequiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: AndroidRequiredPasswordType | undefined) {
        if(value) {
            this._passwordRequiredType = value;
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
     * Gets the securityDisableUsbDebugging property value. Disable USB debugging on Android devices.
     * @returns a boolean
     */
    public get securityDisableUsbDebugging() {
        return this._securityDisableUsbDebugging;
    };
    /**
     * Sets the securityDisableUsbDebugging property value. Disable USB debugging on Android devices.
     * @param value Value to set for the securityDisableUsbDebugging property.
     */
    public set securityDisableUsbDebugging(value: boolean | undefined) {
        if(value) {
            this._securityDisableUsbDebugging = value;
        }
    };
    /**
     * Gets the securityPreventInstallAppsFromUnknownSources property value. Require that devices disallow installation of apps from unknown sources.
     * @returns a boolean
     */
    public get securityPreventInstallAppsFromUnknownSources() {
        return this._securityPreventInstallAppsFromUnknownSources;
    };
    /**
     * Sets the securityPreventInstallAppsFromUnknownSources property value. Require that devices disallow installation of apps from unknown sources.
     * @param value Value to set for the securityPreventInstallAppsFromUnknownSources property.
     */
    public set securityPreventInstallAppsFromUnknownSources(value: boolean | undefined) {
        if(value) {
            this._securityPreventInstallAppsFromUnknownSources = value;
        }
    };
    /**
     * Gets the securityRequireCompanyPortalAppIntegrity property value. Require the device to pass the Company Portal client app runtime integrity check.
     * @returns a boolean
     */
    public get securityRequireCompanyPortalAppIntegrity() {
        return this._securityRequireCompanyPortalAppIntegrity;
    };
    /**
     * Sets the securityRequireCompanyPortalAppIntegrity property value. Require the device to pass the Company Portal client app runtime integrity check.
     * @param value Value to set for the securityRequireCompanyPortalAppIntegrity property.
     */
    public set securityRequireCompanyPortalAppIntegrity(value: boolean | undefined) {
        if(value) {
            this._securityRequireCompanyPortalAppIntegrity = value;
        }
    };
    /**
     * Gets the securityRequireGooglePlayServices property value. Require Google Play Services to be installed and enabled on the device.
     * @returns a boolean
     */
    public get securityRequireGooglePlayServices() {
        return this._securityRequireGooglePlayServices;
    };
    /**
     * Sets the securityRequireGooglePlayServices property value. Require Google Play Services to be installed and enabled on the device.
     * @param value Value to set for the securityRequireGooglePlayServices property.
     */
    public set securityRequireGooglePlayServices(value: boolean | undefined) {
        if(value) {
            this._securityRequireGooglePlayServices = value;
        }
    };
    /**
     * Gets the securityRequireSafetyNetAttestationBasicIntegrity property value. Require the device to pass the SafetyNet basic integrity check.
     * @returns a boolean
     */
    public get securityRequireSafetyNetAttestationBasicIntegrity() {
        return this._securityRequireSafetyNetAttestationBasicIntegrity;
    };
    /**
     * Sets the securityRequireSafetyNetAttestationBasicIntegrity property value. Require the device to pass the SafetyNet basic integrity check.
     * @param value Value to set for the securityRequireSafetyNetAttestationBasicIntegrity property.
     */
    public set securityRequireSafetyNetAttestationBasicIntegrity(value: boolean | undefined) {
        if(value) {
            this._securityRequireSafetyNetAttestationBasicIntegrity = value;
        }
    };
    /**
     * Gets the securityRequireSafetyNetAttestationCertifiedDevice property value. Require the device to pass the SafetyNet certified device check.
     * @returns a boolean
     */
    public get securityRequireSafetyNetAttestationCertifiedDevice() {
        return this._securityRequireSafetyNetAttestationCertifiedDevice;
    };
    /**
     * Sets the securityRequireSafetyNetAttestationCertifiedDevice property value. Require the device to pass the SafetyNet certified device check.
     * @param value Value to set for the securityRequireSafetyNetAttestationCertifiedDevice property.
     */
    public set securityRequireSafetyNetAttestationCertifiedDevice(value: boolean | undefined) {
        if(value) {
            this._securityRequireSafetyNetAttestationCertifiedDevice = value;
        }
    };
    /**
     * Gets the securityRequireUpToDateSecurityProviders property value. Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date.
     * @returns a boolean
     */
    public get securityRequireUpToDateSecurityProviders() {
        return this._securityRequireUpToDateSecurityProviders;
    };
    /**
     * Sets the securityRequireUpToDateSecurityProviders property value. Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date.
     * @param value Value to set for the securityRequireUpToDateSecurityProviders property.
     */
    public set securityRequireUpToDateSecurityProviders(value: boolean | undefined) {
        if(value) {
            this._securityRequireUpToDateSecurityProviders = value;
        }
    };
    /**
     * Gets the securityRequireVerifyApps property value. Require the Android Verify apps feature is turned on.
     * @returns a boolean
     */
    public get securityRequireVerifyApps() {
        return this._securityRequireVerifyApps;
    };
    /**
     * Sets the securityRequireVerifyApps property value. Require the Android Verify apps feature is turned on.
     * @param value Value to set for the securityRequireVerifyApps property.
     */
    public set securityRequireVerifyApps(value: boolean | undefined) {
        if(value) {
            this._securityRequireVerifyApps = value;
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
        if(this.minAndroidSecurityPatchLevel){
            writer.writeStringValue("minAndroidSecurityPatchLevel", this.minAndroidSecurityPatchLevel);
        }
        if(this.osMaximumVersion){
            writer.writeStringValue("osMaximumVersion", this.osMaximumVersion);
        }
        if(this.osMinimumVersion){
            writer.writeStringValue("osMinimumVersion", this.osMinimumVersion);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
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
        if(this.passwordRequiredType){
            writer.writeEnumValue<AndroidRequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.securityBlockJailbrokenDevices){
            writer.writeBooleanValue("securityBlockJailbrokenDevices", this.securityBlockJailbrokenDevices);
        }
        if(this.securityDisableUsbDebugging){
            writer.writeBooleanValue("securityDisableUsbDebugging", this.securityDisableUsbDebugging);
        }
        if(this.securityPreventInstallAppsFromUnknownSources){
            writer.writeBooleanValue("securityPreventInstallAppsFromUnknownSources", this.securityPreventInstallAppsFromUnknownSources);
        }
        if(this.securityRequireCompanyPortalAppIntegrity){
            writer.writeBooleanValue("securityRequireCompanyPortalAppIntegrity", this.securityRequireCompanyPortalAppIntegrity);
        }
        if(this.securityRequireGooglePlayServices){
            writer.writeBooleanValue("securityRequireGooglePlayServices", this.securityRequireGooglePlayServices);
        }
        if(this.securityRequireSafetyNetAttestationBasicIntegrity){
            writer.writeBooleanValue("securityRequireSafetyNetAttestationBasicIntegrity", this.securityRequireSafetyNetAttestationBasicIntegrity);
        }
        if(this.securityRequireSafetyNetAttestationCertifiedDevice){
            writer.writeBooleanValue("securityRequireSafetyNetAttestationCertifiedDevice", this.securityRequireSafetyNetAttestationCertifiedDevice);
        }
        if(this.securityRequireUpToDateSecurityProviders){
            writer.writeBooleanValue("securityRequireUpToDateSecurityProviders", this.securityRequireUpToDateSecurityProviders);
        }
        if(this.securityRequireVerifyApps){
            writer.writeBooleanValue("securityRequireVerifyApps", this.securityRequireVerifyApps);
        }
        if(this.storageRequireEncryption){
            writer.writeBooleanValue("storageRequireEncryption", this.storageRequireEncryption);
        }
    };
    /**
     * Gets the storageRequireEncryption property value. Require encryption on Android devices.
     * @returns a boolean
     */
    public get storageRequireEncryption() {
        return this._storageRequireEncryption;
    };
    /**
     * Sets the storageRequireEncryption property value. Require encryption on Android devices.
     * @param value Value to set for the storageRequireEncryption property.
     */
    public set storageRequireEncryption(value: boolean | undefined) {
        if(value) {
            this._storageRequireEncryption = value;
        }
    };
}
