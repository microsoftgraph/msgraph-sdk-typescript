import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AndroidWorkProfileCompliancePolicy} from './androidWorkProfileCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileCompliancePolicy(writer: SerializationWriter, androidWorkProfileCompliancePolicy: AndroidWorkProfileCompliancePolicy | undefined = {} as AndroidWorkProfileCompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, androidWorkProfileCompliancePolicy)
        writer.writeBooleanValue("deviceThreatProtectionEnabled", androidWorkProfileCompliancePolicy.deviceThreatProtectionEnabled);
        writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", androidWorkProfileCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel);
        writer.writeStringValue("minAndroidSecurityPatchLevel", androidWorkProfileCompliancePolicy.minAndroidSecurityPatchLevel);
        writer.writeStringValue("osMaximumVersion", androidWorkProfileCompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", androidWorkProfileCompliancePolicy.osMinimumVersion);
        writer.writeNumberValue("passwordExpirationDays", androidWorkProfileCompliancePolicy.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumLength", androidWorkProfileCompliancePolicy.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", androidWorkProfileCompliancePolicy.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", androidWorkProfileCompliancePolicy.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", androidWorkProfileCompliancePolicy.passwordRequired);
        writer.writeEnumValue<AndroidRequiredPasswordType>("passwordRequiredType", androidWorkProfileCompliancePolicy.passwordRequiredType);
        writer.writeBooleanValue("securityBlockJailbrokenDevices", androidWorkProfileCompliancePolicy.securityBlockJailbrokenDevices);
        writer.writeBooleanValue("securityDisableUsbDebugging", androidWorkProfileCompliancePolicy.securityDisableUsbDebugging);
        writer.writeBooleanValue("securityPreventInstallAppsFromUnknownSources", androidWorkProfileCompliancePolicy.securityPreventInstallAppsFromUnknownSources);
        writer.writeBooleanValue("securityRequireCompanyPortalAppIntegrity", androidWorkProfileCompliancePolicy.securityRequireCompanyPortalAppIntegrity);
        writer.writeBooleanValue("securityRequireGooglePlayServices", androidWorkProfileCompliancePolicy.securityRequireGooglePlayServices);
        writer.writeBooleanValue("securityRequireSafetyNetAttestationBasicIntegrity", androidWorkProfileCompliancePolicy.securityRequireSafetyNetAttestationBasicIntegrity);
        writer.writeBooleanValue("securityRequireSafetyNetAttestationCertifiedDevice", androidWorkProfileCompliancePolicy.securityRequireSafetyNetAttestationCertifiedDevice);
        writer.writeBooleanValue("securityRequireUpToDateSecurityProviders", androidWorkProfileCompliancePolicy.securityRequireUpToDateSecurityProviders);
        writer.writeBooleanValue("securityRequireVerifyApps", androidWorkProfileCompliancePolicy.securityRequireVerifyApps);
        writer.writeBooleanValue("storageRequireEncryption", androidWorkProfileCompliancePolicy.storageRequireEncryption);
}
