import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows81CompliancePolicy extends DeviceCompliancePolicy, Parsable {
    /**
     * Maximum Windows 8.1 version.
     */
    osMaximumVersion?: string | undefined;
    /**
     * Minimum Windows 8.1 version.
     */
    osMinimumVersion?: string | undefined;
    /**
     * Indicates whether or not to block simple password.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * Password expiration in days.
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
     * The number of previous passwords to prevent re-use of. Valid values 0 to 24
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Require a password to unlock Windows device.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Indicates whether or not to require encryption on a windows 8.1 device.
     */
    storageRequireEncryption?: boolean | undefined;
}
