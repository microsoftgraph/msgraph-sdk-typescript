import {AndroidCompliancePolicy} from './androidCompliancePolicy';
import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidCompliancePolicy(androidCompliancePolicy: AndroidCompliancePolicy | undefined = {} as AndroidCompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(androidCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { androidCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue(); },
        "deviceThreatProtectionRequiredSecurityLevel": n => { androidCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
        "minAndroidSecurityPatchLevel": n => { androidCompliancePolicy.minAndroidSecurityPatchLevel = n.getStringValue(); },
        "osMaximumVersion": n => { androidCompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { androidCompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordExpirationDays": n => { androidCompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumLength": n => { androidCompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { androidCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { androidCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { androidCompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { androidCompliancePolicy.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType); },
        "securityBlockJailbrokenDevices": n => { androidCompliancePolicy.securityBlockJailbrokenDevices = n.getBooleanValue(); },
        "securityDisableUsbDebugging": n => { androidCompliancePolicy.securityDisableUsbDebugging = n.getBooleanValue(); },
        "securityPreventInstallAppsFromUnknownSources": n => { androidCompliancePolicy.securityPreventInstallAppsFromUnknownSources = n.getBooleanValue(); },
        "securityRequireCompanyPortalAppIntegrity": n => { androidCompliancePolicy.securityRequireCompanyPortalAppIntegrity = n.getBooleanValue(); },
        "securityRequireGooglePlayServices": n => { androidCompliancePolicy.securityRequireGooglePlayServices = n.getBooleanValue(); },
        "securityRequireSafetyNetAttestationBasicIntegrity": n => { androidCompliancePolicy.securityRequireSafetyNetAttestationBasicIntegrity = n.getBooleanValue(); },
        "securityRequireSafetyNetAttestationCertifiedDevice": n => { androidCompliancePolicy.securityRequireSafetyNetAttestationCertifiedDevice = n.getBooleanValue(); },
        "securityRequireUpToDateSecurityProviders": n => { androidCompliancePolicy.securityRequireUpToDateSecurityProviders = n.getBooleanValue(); },
        "securityRequireVerifyApps": n => { androidCompliancePolicy.securityRequireVerifyApps = n.getBooleanValue(); },
        "storageRequireEncryption": n => { androidCompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
    }
}
