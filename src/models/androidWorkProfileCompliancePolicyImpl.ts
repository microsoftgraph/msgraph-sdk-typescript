import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AndroidWorkProfileCompliancePolicy} from './androidWorkProfileCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {DeviceCompliancePolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileCompliancePolicyImpl extends DeviceCompliancePolicyImpl implements AndroidWorkProfileCompliancePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Require that devices have enabled device threat protection. */
    public deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
    public deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Minimum Android security patch level. */
    public minAndroidSecurityPatchLevel?: string | undefined;
    /** Maximum Android version. */
    public osMaximumVersion?: string | undefined;
    /** Minimum Android version. */
    public osMinimumVersion?: string | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    public passwordExpirationDays?: number | undefined;
    /** Minimum password length. Valid values 4 to 16 */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock device. */
    public passwordRequired?: boolean | undefined;
    /** Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any. */
    public passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /** Devices must not be jailbroken or rooted. */
    public securityBlockJailbrokenDevices?: boolean | undefined;
    /** Disable USB debugging on Android devices. */
    public securityDisableUsbDebugging?: boolean | undefined;
    /** Require that devices disallow installation of apps from unknown sources. */
    public securityPreventInstallAppsFromUnknownSources?: boolean | undefined;
    /** Require the device to pass the Company Portal client app runtime integrity check. */
    public securityRequireCompanyPortalAppIntegrity?: boolean | undefined;
    /** Require Google Play Services to be installed and enabled on the device. */
    public securityRequireGooglePlayServices?: boolean | undefined;
    /** Require the device to pass the SafetyNet basic integrity check. */
    public securityRequireSafetyNetAttestationBasicIntegrity?: boolean | undefined;
    /** Require the device to pass the SafetyNet certified device check. */
    public securityRequireSafetyNetAttestationCertifiedDevice?: boolean | undefined;
    /** Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date. */
    public securityRequireUpToDateSecurityProviders?: boolean | undefined;
    /** Require the Android Verify apps feature is turned on. */
    public securityRequireVerifyApps?: boolean | undefined;
    /** Require encryption on Android devices. */
    public storageRequireEncryption?: boolean | undefined;
    /**
     * Instantiates a new AndroidWorkProfileCompliancePolicy and sets the default values.
     * @param androidWorkProfileCompliancePolicyParameterValue 
     */
    public constructor(androidWorkProfileCompliancePolicyParameterValue?: AndroidWorkProfileCompliancePolicy | undefined) {
        super(androidWorkProfileCompliancePolicyParameterValue);
        this.additionalData = androidWorkProfileCompliancePolicyParameterValue?.additionalData ? androidWorkProfileCompliancePolicyParameterValue?.additionalData! : {};
        this.deviceThreatProtectionEnabled = androidWorkProfileCompliancePolicyParameterValue?.deviceThreatProtectionEnabled;
        this.deviceThreatProtectionRequiredSecurityLevel = androidWorkProfileCompliancePolicyParameterValue?.deviceThreatProtectionRequiredSecurityLevel;
        this.minAndroidSecurityPatchLevel = androidWorkProfileCompliancePolicyParameterValue?.minAndroidSecurityPatchLevel;
        this.osMaximumVersion = androidWorkProfileCompliancePolicyParameterValue?.osMaximumVersion;
        this.osMinimumVersion = androidWorkProfileCompliancePolicyParameterValue?.osMinimumVersion;
        this.passwordExpirationDays = androidWorkProfileCompliancePolicyParameterValue?.passwordExpirationDays;
        this.passwordMinimumLength = androidWorkProfileCompliancePolicyParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = androidWorkProfileCompliancePolicyParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordPreviousPasswordBlockCount = androidWorkProfileCompliancePolicyParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = androidWorkProfileCompliancePolicyParameterValue?.passwordRequired;
        this.passwordRequiredType = androidWorkProfileCompliancePolicyParameterValue?.passwordRequiredType;
        this.securityBlockJailbrokenDevices = androidWorkProfileCompliancePolicyParameterValue?.securityBlockJailbrokenDevices;
        this.securityDisableUsbDebugging = androidWorkProfileCompliancePolicyParameterValue?.securityDisableUsbDebugging;
        this.securityPreventInstallAppsFromUnknownSources = androidWorkProfileCompliancePolicyParameterValue?.securityPreventInstallAppsFromUnknownSources;
        this.securityRequireCompanyPortalAppIntegrity = androidWorkProfileCompliancePolicyParameterValue?.securityRequireCompanyPortalAppIntegrity;
        this.securityRequireGooglePlayServices = androidWorkProfileCompliancePolicyParameterValue?.securityRequireGooglePlayServices;
        this.securityRequireSafetyNetAttestationBasicIntegrity = androidWorkProfileCompliancePolicyParameterValue?.securityRequireSafetyNetAttestationBasicIntegrity;
        this.securityRequireSafetyNetAttestationCertifiedDevice = androidWorkProfileCompliancePolicyParameterValue?.securityRequireSafetyNetAttestationCertifiedDevice;
        this.securityRequireUpToDateSecurityProviders = androidWorkProfileCompliancePolicyParameterValue?.securityRequireUpToDateSecurityProviders;
        this.securityRequireVerifyApps = androidWorkProfileCompliancePolicyParameterValue?.securityRequireVerifyApps;
        this.storageRequireEncryption = androidWorkProfileCompliancePolicyParameterValue?.storageRequireEncryption;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
