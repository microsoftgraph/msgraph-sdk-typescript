import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {DeviceConfiguration} from './deviceConfiguration';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81GeneralConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only.
     */
    applyOnlyToWindowsPhone81?: boolean | undefined;
    /**
     * Indicates whether or not to block copy paste.
     */
    appsBlockCopyPaste?: boolean | undefined;
    /**
     * Indicates whether or not to block bluetooth.
     */
    bluetoothBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block camera.
     */
    cameraBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked.
     */
    cellularBlockWifiTethering?: boolean | undefined;
    /**
     * Possible values of the compliance app list.
     */
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[] | undefined;
    /**
     * Indicates whether or not to block diagnostic data submission.
     */
    diagnosticDataBlockSubmission?: boolean | undefined;
    /**
     * Indicates whether or not to block custom email accounts.
     */
    emailBlockAddingAccounts?: boolean | undefined;
    /**
     * Indicates whether or not to block location services.
     */
    locationServicesBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block using a Microsoft Account.
     */
    microsoftAccountBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block Near-Field Communication.
     */
    nfcBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block syncing the calendar.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * Number of days before the password expires.
     */
    passwordExpirationDays?: number | undefined;
    /**
     * Number of character sets a password must contain.
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * Minimum length of passwords.
     */
    passwordMinimumLength?: number | undefined;
    /**
     * Minutes of inactivity before screen timeout.
     */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /**
     * Number of previous passwords to block. Valid values 0 to 24
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Indicates whether or not to require a password.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Number of sign in failures allowed before factory reset.
     */
    passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /**
     * Indicates whether or not to block screenshots.
     */
    screenCaptureBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block removable storage.
     */
    storageBlockRemovableStorage?: boolean | undefined;
    /**
     * Indicates whether or not to require encryption.
     */
    storageRequireEncryption?: boolean | undefined;
    /**
     * Indicates whether or not to block the web browser.
     */
    webBrowserBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
     */
    wifiBlockAutomaticConnectHotspots?: boolean | undefined;
    /**
     * Indicates whether or not to block Wi-Fi.
     */
    wifiBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked.
     */
    wifiBlockHotspotReporting?: boolean | undefined;
    /**
     * Indicates whether or not to block the Windows Store.
     */
    windowsStoreBlocked?: boolean | undefined;
}
