import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10MobileCompliancePolicy extends DeviceCompliancePolicy, Parsable {
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
    osMaximumVersion?: string | undefined;
    /**
     * Minimum Windows Phone version.
     */
    osMinimumVersion?: string | undefined;
    /**
     * Whether or not to block syncing the calendar.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * Number of days before password expiration. Valid values 1 to 255
     */
    passwordExpirationDays?: number | undefined;
    /**
     * The number of character sets required in the password.
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * Minimum password length. Valid values 4 to 16
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
     * Require a password to unlock Windows Phone device.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Require a password to unlock an idle device.
     */
    passwordRequireToUnlockFromIdle?: boolean | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
     */
    secureBootEnabled?: boolean | undefined;
    /**
     * Require encryption on windows devices.
     */
    storageRequireEncryption?: boolean | undefined;
}
