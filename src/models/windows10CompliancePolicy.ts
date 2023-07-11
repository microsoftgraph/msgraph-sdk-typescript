import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10CompliancePolicy extends DeviceCompliancePolicy, Parsable {
    /**
     * Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
     */
    bitLockerEnabled?: boolean | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation.
     */
    codeIntegrityEnabled?: boolean | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is enabled.
     */
    earlyLaunchAntiMalwareDriverEnabled?: boolean | undefined;
    /**
     * Maximum Windows Phone version.
     */
    mobileOsMaximumVersion?: string | undefined;
    /**
     * Minimum Windows Phone version.
     */
    mobileOsMinimumVersion?: string | undefined;
    /**
     * Maximum Windows 10 version.
     */
    osMaximumVersion?: string | undefined;
    /**
     * Minimum Windows 10 version.
     */
    osMinimumVersion?: string | undefined;
    /**
     * Indicates whether or not to block simple password.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * The password expiration in days.
     */
    passwordExpirationDays?: number | undefined;
    /**
     * The number of character sets required in the password.
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * The minimum password length.
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before a password is required.
     */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /**
     * The number of previous passwords to prevent re-use of.
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Require a password to unlock Windows device.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Require a password to unlock an idle device.
     */
    passwordRequiredToUnlockFromIdle?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation.
     */
    requireHealthyDeviceReport?: boolean | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
     */
    secureBootEnabled?: boolean | undefined;
    /**
     * Require encryption on windows devices.
     */
    storageRequireEncryption?: boolean | undefined;
}
