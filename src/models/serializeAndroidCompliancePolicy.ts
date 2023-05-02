import {AndroidCompliancePolicy} from './androidCompliancePolicy';
import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidCompliancePolicy(writer: SerializationWriter, androidCompliancePolicy: AndroidCompliancePolicy | undefined = {} as AndroidCompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, androidCompliancePolicy)
        writer.writeBooleanValue("deviceThreatProtectionEnabled", androidCompliancePolicy.deviceThreatProtectionEnabled);
        writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", androidCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel);
        writer.writeStringValue("minAndroidSecurityPatchLevel", androidCompliancePolicy.minAndroidSecurityPatchLevel);
        writer.writeStringValue("osMaximumVersion", androidCompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", androidCompliancePolicy.osMinimumVersion);
        writer.writeNumberValue("passwordExpirationDays", androidCompliancePolicy.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumLength", androidCompliancePolicy.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", androidCompliancePolicy.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", androidCompliancePolicy.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", androidCompliancePolicy.passwordRequired);
        writer.writeEnumValue<AndroidRequiredPasswordType>("passwordRequiredType", androidCompliancePolicy.passwordRequiredType);
        writer.writeBooleanValue("securityBlockJailbrokenDevices", androidCompliancePolicy.securityBlockJailbrokenDevices);
        writer.writeBooleanValue("securityDisableUsbDebugging", androidCompliancePolicy.securityDisableUsbDebugging);
        writer.writeBooleanValue("securityPreventInstallAppsFromUnknownSources", androidCompliancePolicy.securityPreventInstallAppsFromUnknownSources);
        writer.writeBooleanValue("securityRequireCompanyPortalAppIntegrity", androidCompliancePolicy.securityRequireCompanyPortalAppIntegrity);
        writer.writeBooleanValue("securityRequireGooglePlayServices", androidCompliancePolicy.securityRequireGooglePlayServices);
        writer.writeBooleanValue("securityRequireSafetyNetAttestationBasicIntegrity", androidCompliancePolicy.securityRequireSafetyNetAttestationBasicIntegrity);
        writer.writeBooleanValue("securityRequireSafetyNetAttestationCertifiedDevice", androidCompliancePolicy.securityRequireSafetyNetAttestationCertifiedDevice);
        writer.writeBooleanValue("securityRequireUpToDateSecurityProviders", androidCompliancePolicy.securityRequireUpToDateSecurityProviders);
        writer.writeBooleanValue("securityRequireVerifyApps", androidCompliancePolicy.securityRequireVerifyApps);
        writer.writeBooleanValue("storageRequireEncryption", androidCompliancePolicy.storageRequireEncryption);
}
