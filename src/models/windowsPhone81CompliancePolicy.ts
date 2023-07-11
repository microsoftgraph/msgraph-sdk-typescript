import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81CompliancePolicy extends DeviceCompliancePolicy, Parsable {
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
     * Number of days before the password expires.
     */
    passwordExpirationDays?: number | undefined;
    /**
     * The number of character sets required in the password.
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * Minimum length of passwords.
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before a password is required.
     */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /**
     * Number of previous passwords to block. Valid values 0 to 24
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Whether or not to require a password.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Require encryption on windows phone devices.
     */
    storageRequireEncryption?: boolean | undefined;
}
