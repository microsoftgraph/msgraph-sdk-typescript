import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AndroidWorkProfileCompliancePolicy} from './androidWorkProfileCompliancePolicy';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCompliancePolicy(androidWorkProfileCompliancePolicy: AndroidWorkProfileCompliancePolicy | undefined = {} as AndroidWorkProfileCompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(androidWorkProfileCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { androidWorkProfileCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue(); },
        "deviceThreatProtectionRequiredSecurityLevel": n => { androidWorkProfileCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
        "minAndroidSecurityPatchLevel": n => { androidWorkProfileCompliancePolicy.minAndroidSecurityPatchLevel = n.getStringValue(); },
        "osMaximumVersion": n => { androidWorkProfileCompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { androidWorkProfileCompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordExpirationDays": n => { androidWorkProfileCompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumLength": n => { androidWorkProfileCompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { androidWorkProfileCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { androidWorkProfileCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { androidWorkProfileCompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { androidWorkProfileCompliancePolicy.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType); },
        "securityBlockJailbrokenDevices": n => { androidWorkProfileCompliancePolicy.securityBlockJailbrokenDevices = n.getBooleanValue(); },
        "securityDisableUsbDebugging": n => { androidWorkProfileCompliancePolicy.securityDisableUsbDebugging = n.getBooleanValue(); },
        "securityPreventInstallAppsFromUnknownSources": n => { androidWorkProfileCompliancePolicy.securityPreventInstallAppsFromUnknownSources = n.getBooleanValue(); },
        "securityRequireCompanyPortalAppIntegrity": n => { androidWorkProfileCompliancePolicy.securityRequireCompanyPortalAppIntegrity = n.getBooleanValue(); },
        "securityRequireGooglePlayServices": n => { androidWorkProfileCompliancePolicy.securityRequireGooglePlayServices = n.getBooleanValue(); },
        "securityRequireSafetyNetAttestationBasicIntegrity": n => { androidWorkProfileCompliancePolicy.securityRequireSafetyNetAttestationBasicIntegrity = n.getBooleanValue(); },
        "securityRequireSafetyNetAttestationCertifiedDevice": n => { androidWorkProfileCompliancePolicy.securityRequireSafetyNetAttestationCertifiedDevice = n.getBooleanValue(); },
        "securityRequireUpToDateSecurityProviders": n => { androidWorkProfileCompliancePolicy.securityRequireUpToDateSecurityProviders = n.getBooleanValue(); },
        "securityRequireVerifyApps": n => { androidWorkProfileCompliancePolicy.securityRequireVerifyApps = n.getBooleanValue(); },
        "storageRequireEncryption": n => { androidWorkProfileCompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
    }
}
