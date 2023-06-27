import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {DeviceConfiguration} from './deviceConfiguration';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidGeneralDeviceConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Indicates whether or not to block clipboard sharing to copy and paste between applications.
     */
    appsBlockClipboardSharing?: boolean | undefined;
    /**
     * Indicates whether or not to block copy and paste within applications.
     */
    appsBlockCopyPaste?: boolean | undefined;
    /**
     * Indicates whether or not to block the YouTube app.
     */
    appsBlockYouTube?: boolean | undefined;
    /**
     * List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements.
     */
    appsHideList?: AppListItem[] | undefined;
    /**
     * List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements.
     */
    appsInstallAllowList?: AppListItem[] | undefined;
    /**
     * List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500 elements.
     */
    appsLaunchBlockList?: AppListItem[] | undefined;
    /**
     * Indicates whether or not to block Bluetooth.
     */
    bluetoothBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block the use of the camera.
     */
    cameraBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block data roaming.
     */
    cellularBlockDataRoaming?: boolean | undefined;
    /**
     * Indicates whether or not to block SMS/MMS messaging.
     */
    cellularBlockMessaging?: boolean | undefined;
    /**
     * Indicates whether or not to block voice roaming.
     */
    cellularBlockVoiceRoaming?: boolean | undefined;
    /**
     * Indicates whether or not to block syncing Wi-Fi tethering.
     */
    cellularBlockWiFiTethering?: boolean | undefined;
    /**
     * Possible values of the compliance app list.
     */
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[] | undefined;
    /**
     * Indicates whether or not to allow device sharing mode.
     */
    deviceSharingAllowed?: boolean | undefined;
    /**
     * Indicates whether or not to block diagnostic data submission.
     */
    diagnosticDataBlockSubmission?: boolean | undefined;
    /**
     * Indicates whether or not to block user performing a factory reset.
     */
    factoryResetBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block Google account auto sync.
     */
    googleAccountBlockAutoSync?: boolean | undefined;
    /**
     * Indicates whether or not to block the Google Play store.
     */
    googlePlayStoreBlocked?: boolean | undefined;
    /**
     * A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of 500 elements.
     */
    kioskModeApps?: AppListItem[] | undefined;
    /**
     * Indicates whether or not to block the screen sleep button while in Kiosk Mode.
     */
    kioskModeBlockSleepButton?: boolean | undefined;
    /**
     * Indicates whether or not to block the volume buttons while in Kiosk Mode.
     */
    kioskModeBlockVolumeButtons?: boolean | undefined;
    /**
     * Indicates whether or not to block location services.
     */
    locationServicesBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block Near-Field Communication.
     */
    nfcBlocked?: boolean | undefined;
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
     * Indicates whether or not to require a password.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Android required password type.
     */
    passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    /**
     * Number of sign in failures allowed before factory reset. Valid values 1 to 16
     */
    passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /**
     * Indicates whether or not to block powering off the device.
     */
    powerOffBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block screenshots.
     */
    screenCaptureBlocked?: boolean | undefined;
    /**
     * Require the Android Verify apps feature is turned on.
     */
    securityRequireVerifyApps?: boolean | undefined;
    /**
     * Indicates whether or not to block Google Backup.
     */
    storageBlockGoogleBackup?: boolean | undefined;
    /**
     * Indicates whether or not to block removable storage usage.
     */
    storageBlockRemovableStorage?: boolean | undefined;
    /**
     * Indicates whether or not to require device encryption.
     */
    storageRequireDeviceEncryption?: boolean | undefined;
    /**
     * Indicates whether or not to require removable storage encryption.
     */
    storageRequireRemovableStorageEncryption?: boolean | undefined;
    /**
     * Indicates whether or not to block the use of the Voice Assistant.
     */
    voiceAssistantBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block voice dialing.
     */
    voiceDialingBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block the web browser's auto fill feature.
     */
    webBrowserBlockAutofill?: boolean | undefined;
    /**
     * Indicates whether or not to block the web browser.
     */
    webBrowserBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block JavaScript within the web browser.
     */
    webBrowserBlockJavaScript?: boolean | undefined;
    /**
     * Indicates whether or not to block popups within the web browser.
     */
    webBrowserBlockPopups?: boolean | undefined;
    /**
     * Web Browser Cookie Settings.
     */
    webBrowserCookieSettings?: WebBrowserCookieSettings | undefined;
    /**
     * Indicates whether or not to block syncing Wi-Fi.
     */
    wiFiBlocked?: boolean | undefined;
}
