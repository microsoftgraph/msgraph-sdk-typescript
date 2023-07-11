import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {DeviceConfiguration} from './deviceConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Indicates whether or not to block fingerprint unlock.
     */
    passwordBlockFingerprintUnlock?: boolean | undefined;
    /**
     * Indicates whether or not to block Smart Lock and other trust agents.
     */
    passwordBlockTrustAgents?: boolean | undefined;
    /**
     * Number of days before the password expires. Valid values 1 to 365
     */
    passwordExpirationDays?: number | undefined;
    /**
     * Minimum length of passwords. Valid values 4 to 16
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before the screen times out.
     */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /**
     * Number of previous passwords to block. Valid values 0 to 24
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Android Work Profile required password type.
     */
    passwordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    /**
     * Number of sign in failures allowed before factory reset. Valid values 1 to 16
     */
    passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /**
     * Require the Android Verify apps feature is turned on.
     */
    securityRequireVerifyApps?: boolean | undefined;
    /**
     * Block users from adding/removing accounts in work profile.
     */
    workProfileBlockAddingAccounts?: boolean | undefined;
    /**
     * Block work profile camera.
     */
    workProfileBlockCamera?: boolean | undefined;
    /**
     * Block display work profile caller ID in personal profile.
     */
    workProfileBlockCrossProfileCallerId?: boolean | undefined;
    /**
     * Block work profile contacts availability in personal profile.
     */
    workProfileBlockCrossProfileContactsSearch?: boolean | undefined;
    /**
     * Boolean that indicates if the setting disallow cross profile copy/paste is enabled.
     */
    workProfileBlockCrossProfileCopyPaste?: boolean | undefined;
    /**
     * Indicates whether or not to block notifications while device locked.
     */
    workProfileBlockNotificationsWhileDeviceLocked?: boolean | undefined;
    /**
     * Block screen capture in work profile.
     */
    workProfileBlockScreenCapture?: boolean | undefined;
    /**
     * Allow bluetooth devices to access enterprise contacts.
     */
    workProfileBluetoothEnableContactSharing?: boolean | undefined;
    /**
     * Android Work Profile cross profile data sharing type.
     */
    workProfileDataSharingType?: AndroidWorkProfileCrossProfileDataSharingType | undefined;
    /**
     * Android Work Profile default app permission policy type.
     */
    workProfileDefaultAppPermissionPolicy?: AndroidWorkProfileDefaultAppPermissionPolicyType | undefined;
    /**
     * Indicates whether or not to block fingerprint unlock for work profile.
     */
    workProfilePasswordBlockFingerprintUnlock?: boolean | undefined;
    /**
     * Indicates whether or not to block Smart Lock and other trust agents for work profile.
     */
    workProfilePasswordBlockTrustAgents?: boolean | undefined;
    /**
     * Number of days before the work profile password expires. Valid values 1 to 365
     */
    workProfilePasswordExpirationDays?: number | undefined;
    /**
     * Minimum length of work profile password. Valid values 4 to 16
     */
    workProfilePasswordMinimumLength?: number | undefined;
    /**
     * Minimum # of letter characters required in work profile password. Valid values 1 to 10
     */
    workProfilePasswordMinLetterCharacters?: number | undefined;
    /**
     * Minimum # of lower-case characters required in work profile password. Valid values 1 to 10
     */
    workProfilePasswordMinLowerCaseCharacters?: number | undefined;
    /**
     * Minimum # of non-letter characters required in work profile password. Valid values 1 to 10
     */
    workProfilePasswordMinNonLetterCharacters?: number | undefined;
    /**
     * Minimum # of numeric characters required in work profile password. Valid values 1 to 10
     */
    workProfilePasswordMinNumericCharacters?: number | undefined;
    /**
     * Minimum # of symbols required in work profile password. Valid values 1 to 10
     */
    workProfilePasswordMinSymbolCharacters?: number | undefined;
    /**
     * Minimum # of upper-case characters required in work profile password. Valid values 1 to 10
     */
    workProfilePasswordMinUpperCaseCharacters?: number | undefined;
    /**
     * Minutes of inactivity before the screen times out.
     */
    workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /**
     * Number of previous work profile passwords to block. Valid values 0 to 24
     */
    workProfilePasswordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Android Work Profile required password type.
     */
    workProfilePasswordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    /**
     * Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16
     */
    workProfilePasswordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /**
     * Password is required or not for work profile
     */
    workProfileRequirePassword?: boolean | undefined;
}
