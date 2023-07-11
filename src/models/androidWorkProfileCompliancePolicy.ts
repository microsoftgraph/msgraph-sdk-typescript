import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileCompliancePolicy extends DeviceCompliancePolicy, Parsable {
    /**
     * Require that devices have enabled device threat protection.
     */
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Device threat protection levels for the Device Threat Protection API.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /**
     * Minimum Android security patch level.
     */
    minAndroidSecurityPatchLevel?: string | undefined;
    /**
     * Maximum Android version.
     */
    osMaximumVersion?: string | undefined;
    /**
     * Minimum Android version.
     */
    osMinimumVersion?: string | undefined;
    /**
     * Number of days before the password expires. Valid values 1 to 365
     */
    passwordExpirationDays?: number | undefined;
    /**
     * Minimum password length. Valid values 4 to 16
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before a password is required.
     */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /**
     * Number of previous passwords to block. Valid values 1 to 24
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Require a password to unlock device.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Android required password type.
     */
    passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /**
     * Devices must not be jailbroken or rooted.
     */
    securityBlockJailbrokenDevices?: boolean | undefined;
    /**
     * Disable USB debugging on Android devices.
     */
    securityDisableUsbDebugging?: boolean | undefined;
    /**
     * Require that devices disallow installation of apps from unknown sources.
     */
    securityPreventInstallAppsFromUnknownSources?: boolean | undefined;
    /**
     * Require the device to pass the Company Portal client app runtime integrity check.
     */
    securityRequireCompanyPortalAppIntegrity?: boolean | undefined;
    /**
     * Require Google Play Services to be installed and enabled on the device.
     */
    securityRequireGooglePlayServices?: boolean | undefined;
    /**
     * Require the device to pass the SafetyNet basic integrity check.
     */
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean | undefined;
    /**
     * Require the device to pass the SafetyNet certified device check.
     */
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean | undefined;
    /**
     * Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date.
     */
    securityRequireUpToDateSecurityProviders?: boolean | undefined;
    /**
     * Require the Android Verify apps feature is turned on.
     */
    securityRequireVerifyApps?: boolean | undefined;
    /**
     * Require encryption on Android devices.
     */
    storageRequireEncryption?: boolean | undefined;
}
