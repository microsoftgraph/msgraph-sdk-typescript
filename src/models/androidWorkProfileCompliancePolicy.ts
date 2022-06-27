import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileCompliancePolicy extends DeviceCompliancePolicy, Partial<Parsable> {
    /** Require that devices have enabled device threat protection. */
    deviceThreatProtectionEnabled?: boolean | undefined;
    /** Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured, low, medium, high, notSet. */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    /** Minimum Android security patch level. */
    minAndroidSecurityPatchLevel?: string | undefined;
    /** Maximum Android version. */
    osMaximumVersion?: string | undefined;
    /** Minimum Android version. */
    osMinimumVersion?: string | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    passwordExpirationDays?: number | undefined;
    /** Minimum password length. Valid values 4 to 16 */
    passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before a password is required. */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Number of previous passwords to block. Valid values 1 to 24 */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /** Require a password to unlock device. */
    passwordRequired?: boolean | undefined;
    /** Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any. */
    passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /** Devices must not be jailbroken or rooted. */
    securityBlockJailbrokenDevices?: boolean | undefined;
    /** Disable USB debugging on Android devices. */
    securityDisableUsbDebugging?: boolean | undefined;
    /** Require that devices disallow installation of apps from unknown sources. */
    securityPreventInstallAppsFromUnknownSources?: boolean | undefined;
    /** Require the device to pass the Company Portal client app runtime integrity check. */
    securityRequireCompanyPortalAppIntegrity?: boolean | undefined;
    /** Require Google Play Services to be installed and enabled on the device. */
    securityRequireGooglePlayServices?: boolean | undefined;
    /** Require the device to pass the SafetyNet basic integrity check. */
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean | undefined;
    /** Require the device to pass the SafetyNet certified device check. */
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean | undefined;
    /** Require the device to have up to date security providers. The device will require Google Play Services to be enabled and up to date. */
    securityRequireUpToDateSecurityProviders?: boolean | undefined;
    /** Require the Android Verify apps feature is turned on. */
    securityRequireVerifyApps?: boolean | undefined;
    /** Require encryption on Android devices. */
    storageRequireEncryption?: boolean | undefined;
}
