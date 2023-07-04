import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {DeviceConfiguration} from './deviceConfiguration';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Possible values of the compliance app list.
     */
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[] | undefined;
    /**
     * An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
     */
    emailInDomainSuffixes?: string[] | undefined;
    /**
     * Block simple passwords.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * Number of days before the password expires.
     */
    passwordExpirationDays?: number | undefined;
    /**
     * Number of character sets a password must contain. Valid values 0 to 4
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * Minimum length of passwords.
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity required before a password is required.
     */
    passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /**
     * Minutes of inactivity required before the screen times out.
     */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /**
     * Number of previous passwords to block.
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
}
