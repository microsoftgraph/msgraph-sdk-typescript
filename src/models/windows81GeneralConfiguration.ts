import {DeviceConfiguration} from './deviceConfiguration';
import {InternetSiteSecurityLevel} from './internetSiteSecurityLevel';
import {RequiredPasswordType} from './requiredPasswordType';
import {SiteSecurityLevel} from './siteSecurityLevel';
import {WindowsUserAccountControlSettings} from './windowsUserAccountControlSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows81GeneralConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    /** Value indicating whether this policy only applies to Windows 8.1. This property is read-only. */
    applyOnlyToWindows81?: boolean | undefined;
    /** Indicates whether or not to block auto fill. */
    browserBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block automatic detection of Intranet sites. */
    browserBlockAutomaticDetectionOfIntranetSites?: boolean | undefined;
    /** Indicates whether or not to block enterprise mode access. */
    browserBlockEnterpriseModeAccess?: boolean | undefined;
    /** Indicates whether or not to Block the user from using JavaScript. */
    browserBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block plug-ins. */
    browserBlockPlugins?: boolean | undefined;
    /** Indicates whether or not to block popups. */
    browserBlockPopups?: boolean | undefined;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    browserBlockSendingDoNotTrackHeader?: boolean | undefined;
    /** Indicates whether or not to block a single word entry on Intranet sites. */
    browserBlockSingleWordEntryOnIntranetSites?: boolean | undefined;
    /** The enterprise mode site list location. Could be a local file, local network or http location. */
    browserEnterpriseModeSiteListLocation?: string | undefined;
    /** The internet security level. Possible values are: userDefined, medium, mediumHigh, high. */
    browserInternetSecurityLevel?: InternetSiteSecurityLevel | undefined;
    /** The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high. */
    browserIntranetSecurityLevel?: SiteSecurityLevel | undefined;
    /** The logging report location. */
    browserLoggingReportLocation?: string | undefined;
    /** Indicates whether or not to require a firewall. */
    browserRequireFirewall?: boolean | undefined;
    /** Indicates whether or not to require fraud warning. */
    browserRequireFraudWarning?: boolean | undefined;
    /** Indicates whether or not to require high security for restricted sites. */
    browserRequireHighSecurityForRestrictedSites?: boolean | undefined;
    /** Indicates whether or not to require the user to use the smart screen filter. */
    browserRequireSmartScreen?: boolean | undefined;
    /** The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high. */
    browserTrustedSitesSecurityLevel?: SiteSecurityLevel | undefined;
    /** Indicates whether or not to block data roaming. */
    cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    diagnosticsBlockDataSubmission?: boolean | undefined;
    /** Indicates whether or not to Block the user from using a pictures password and pin. */
    passwordBlockPicturePasswordAndPin?: boolean | undefined;
    /** Password expiration in days. */
    passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. */
    passwordMinimumLength?: number | undefined;
    /** The minutes of inactivity before the screen times out. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** The number of previous passwords to prevent re-use of. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /** The number of sign in failures before factory reset. */
    passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Indicates whether or not to require encryption on a mobile device. */
    storageRequireDeviceEncryption?: boolean | undefined;
    /** Indicates whether or not to require automatic updates. */
    updatesRequireAutomaticUpdates?: boolean | undefined;
    /** The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges, notifyOnAppChangesWithoutDimming, neverNotify. */
    userAccountControlSettings?: WindowsUserAccountControlSettings | undefined;
    /** The work folders url. */
    workFoldersUrl?: string | undefined;
}
