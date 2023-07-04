import {DefenderCloudBlockLevelType} from './defenderCloudBlockLevelType';
import {DefenderDetectedMalwareActions} from './defenderDetectedMalwareActions';
import {DefenderMonitorFileActivity} from './defenderMonitorFileActivity';
import {DefenderPromptForSampleSubmission} from './defenderPromptForSampleSubmission';
import {DefenderScanType} from './defenderScanType';
import {DeviceConfiguration} from './deviceConfiguration';
import {DiagnosticDataSubmissionMode} from './diagnosticDataSubmissionMode';
import {EdgeCookiePolicy} from './edgeCookiePolicy';
import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {RequiredPasswordType} from './requiredPasswordType';
import {SafeSearchFilterType} from './safeSearchFilterType';
import {StateManagementSetting} from './stateManagementSetting';
import {VisibilitySetting} from './visibilitySetting';
import {WeeklySchedule} from './weeklySchedule';
import {Windows10NetworkProxyServer} from './windows10NetworkProxyServer';
import {WindowsSpotlightEnablementSettings} from './windowsSpotlightEnablementSettings';
import {WindowsStartMenuAppListVisibilityType} from './windowsStartMenuAppListVisibilityType';
import {WindowsStartMenuModeType} from './windowsStartMenuModeType';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface Windows10GeneralConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account.
     */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only).
     */
    antiTheftModeBlocked?: boolean | undefined;
    /**
     * State Management Setting.
     */
    appsAllowTrustedAppsSideloading?: StateManagementSetting | undefined;
    /**
     * Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were downloaded.
     */
    appsBlockWindowsStoreOriginatedApps?: boolean | undefined;
    /**
     * Specify a list of allowed Bluetooth services and profiles in hex formatted strings.
     */
    bluetoothAllowedServices?: string[] | undefined;
    /**
     * Whether or not to Block the user from using bluetooth advertising.
     */
    bluetoothBlockAdvertising?: boolean | undefined;
    /**
     * Whether or not to Block the user from using bluetooth discoverable mode.
     */
    bluetoothBlockDiscoverableMode?: boolean | undefined;
    /**
     * Whether or not to Block the user from using bluetooth.
     */
    bluetoothBlocked?: boolean | undefined;
    /**
     * Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device.
     */
    bluetoothBlockPrePairing?: boolean | undefined;
    /**
     * Whether or not to Block the user from accessing the camera of the device.
     */
    cameraBlocked?: boolean | undefined;
    /**
     * Whether or not to Block the user from using data over cellular while roaming.
     */
    cellularBlockDataWhenRoaming?: boolean | undefined;
    /**
     * Whether or not to Block the user from using VPN over cellular.
     */
    cellularBlockVpn?: boolean | undefined;
    /**
     * Whether or not to Block the user from using VPN when roaming over cellular.
     */
    cellularBlockVpnWhenRoaming?: boolean | undefined;
    /**
     * Whether or not to Block the user from doing manual root certificate installation.
     */
    certificatesBlockManualRootCertificateInstallation?: boolean | undefined;
    /**
     * Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote messaging, remote app sessions and other cross-device experiences.
     */
    connectedDevicesServiceBlocked?: boolean | undefined;
    /**
     * Whether or not to Block the user from using copy paste.
     */
    copyPasteBlocked?: boolean | undefined;
    /**
     * Whether or not to Block the user from using Cortana.
     */
    cortanaBlocked?: boolean | undefined;
    /**
     * Whether or not to block end user access to Defender.
     */
    defenderBlockEndUserAccess?: boolean | undefined;
    /**
     * Possible values of Cloud Block Level
     */
    defenderCloudBlockLevel?: DefenderCloudBlockLevelType | undefined;
    /**
     * Number of days before deleting quarantined malware. Valid values 0 to 90
     */
    defenderDaysBeforeDeletingQuarantinedMalware?: number | undefined;
    /**
     * Gets or sets Defender’s actions to take on detected Malware per threat level.
     */
    defenderDetectedMalwareActions?: DefenderDetectedMalwareActions | undefined;
    /**
     * File extensions to exclude from scans and real time protection.
     */
    defenderFileExtensionsToExclude?: string[] | undefined;
    /**
     * Files and folder to exclude from scans and real time protection.
     */
    defenderFilesAndFoldersToExclude?: string[] | undefined;
    /**
     * Possible values for monitoring file activity.
     */
    defenderMonitorFileActivity?: DefenderMonitorFileActivity | undefined;
    /**
     * Processes to exclude from scans and real time protection.
     */
    defenderProcessesToExclude?: string[] | undefined;
    /**
     * Possible values for prompting user for samples submission.
     */
    defenderPromptForSampleSubmission?: DefenderPromptForSampleSubmission | undefined;
    /**
     * Indicates whether or not to require behavior monitoring.
     */
    defenderRequireBehaviorMonitoring?: boolean | undefined;
    /**
     * Indicates whether or not to require cloud protection.
     */
    defenderRequireCloudProtection?: boolean | undefined;
    /**
     * Indicates whether or not to require network inspection system.
     */
    defenderRequireNetworkInspectionSystem?: boolean | undefined;
    /**
     * Indicates whether or not to require real time monitoring.
     */
    defenderRequireRealTimeMonitoring?: boolean | undefined;
    /**
     * Indicates whether or not to scan archive files.
     */
    defenderScanArchiveFiles?: boolean | undefined;
    /**
     * Indicates whether or not to scan downloads.
     */
    defenderScanDownloads?: boolean | undefined;
    /**
     * Indicates whether or not to scan incoming mail messages.
     */
    defenderScanIncomingMail?: boolean | undefined;
    /**
     * Indicates whether or not to scan mapped network drives during full scan.
     */
    defenderScanMappedNetworkDrivesDuringFullScan?: boolean | undefined;
    /**
     * Max CPU usage percentage during scan. Valid values 0 to 100
     */
    defenderScanMaxCpu?: number | undefined;
    /**
     * Indicates whether or not to scan files opened from a network folder.
     */
    defenderScanNetworkFiles?: boolean | undefined;
    /**
     * Indicates whether or not to scan removable drives during full scan.
     */
    defenderScanRemovableDrivesDuringFullScan?: boolean | undefined;
    /**
     * Indicates whether or not to scan scripts loaded in Internet Explorer browser.
     */
    defenderScanScriptsLoadedInInternetExplorer?: boolean | undefined;
    /**
     * Possible values for system scan type.
     */
    defenderScanType?: DefenderScanType | undefined;
    /**
     * The time to perform a daily quick scan.
     */
    defenderScheduledQuickScanTime?: TimeOnly | undefined;
    /**
     * The defender time for the system scan.
     */
    defenderScheduledScanTime?: TimeOnly | undefined;
    /**
     * The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24
     */
    defenderSignatureUpdateIntervalInHours?: number | undefined;
    /**
     * Possible values for a weekly schedule.
     */
    defenderSystemScanSchedule?: WeeklySchedule | undefined;
    /**
     * State Management Setting.
     */
    developerUnlockSetting?: StateManagementSetting | undefined;
    /**
     * Indicates whether or not to Block the user from resetting their phone.
     */
    deviceManagementBlockFactoryResetOnMobile?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from doing manual un-enrollment from device management.
     */
    deviceManagementBlockManualUnenroll?: boolean | undefined;
    /**
     * Allow the device to send diagnostic and usage telemetry data, such as Watson.
     */
    diagnosticsDataSubmissionMode?: DiagnosticDataSubmissionMode | undefined;
    /**
     * Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see by default when they open Edge.
     */
    edgeAllowStartPagesModification?: boolean | undefined;
    /**
     * Indicates whether or not to prevent access to about flags on Edge browser.
     */
    edgeBlockAccessToAboutFlags?: boolean | undefined;
    /**
     * Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections from Microsoft Edge to Microsoft services.
     */
    edgeBlockAddressBarDropdown?: boolean | undefined;
    /**
     * Indicates whether or not to block auto fill.
     */
    edgeBlockAutofill?: boolean | undefined;
    /**
     * Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with known compatibility issues.
     */
    edgeBlockCompatibilityList?: boolean | undefined;
    /**
     * Indicates whether or not to block developer tools in the Edge browser.
     */
    edgeBlockDeveloperTools?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from using the Edge browser.
     */
    edgeBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block extensions in the Edge browser.
     */
    edgeBlockExtensions?: boolean | undefined;
    /**
     * Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser.
     */
    edgeBlockInPrivateBrowsing?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from using JavaScript.
     */
    edgeBlockJavaScript?: boolean | undefined;
    /**
     * Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft Edge.
     */
    edgeBlockLiveTileDataCollection?: boolean | undefined;
    /**
     * Indicates whether or not to Block password manager.
     */
    edgeBlockPasswordManager?: boolean | undefined;
    /**
     * Indicates whether or not to block popups.
     */
    edgeBlockPopups?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from using the search suggestions in the address bar.
     */
    edgeBlockSearchSuggestions?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from sending the do not track header.
     */
    edgeBlockSendingDoNotTrackHeader?: boolean | undefined;
    /**
     * Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead.
     */
    edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean | undefined;
    /**
     * Clear browsing data on exiting Microsoft Edge.
     */
    edgeClearBrowsingDataOnExit?: boolean | undefined;
    /**
     * Possible values to specify which cookies are allowed in Microsoft Edge.
     */
    edgeCookiePolicy?: EdgeCookiePolicy | undefined;
    /**
     * Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those enrolled in zero emissions configurations, to block this page.
     */
    edgeDisableFirstRunPage?: boolean | undefined;
    /**
     * Indicates the enterprise mode site list location. Could be a local file, local network or http location.
     */
    edgeEnterpriseModeSiteListLocation?: string | undefined;
    /**
     * The first run URL for when Edge browser is opened for the first time.
     */
    edgeFirstRunUrl?: string | undefined;
    /**
     * The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser.
     */
    edgeHomepageUrls?: string[] | undefined;
    /**
     * Indicates whether or not to Require the user to use the smart screen filter.
     */
    edgeRequireSmartScreen?: boolean | undefined;
    /**
     * Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set.
     */
    edgeSearchEngine?: EdgeSearchEngineBase | undefined;
    /**
     * Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer.
     */
    edgeSendIntranetTrafficToInternetExplorer?: boolean | undefined;
    /**
     * Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order changes to favorites are shared between browsers.
     */
    edgeSyncFavoritesWithInternetExplorer?: boolean | undefined;
    /**
     * Endpoint for discovering cloud printers.
     */
    enterpriseCloudPrintDiscoveryEndPoint?: string | undefined;
    /**
     * Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid values 1 to 65535
     */
    enterpriseCloudPrintDiscoveryMaxLimit?: number | undefined;
    /**
     * OAuth resource URI for printer discovery service as configured in Azure portal.
     */
    enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string | undefined;
    /**
     * Authentication endpoint for acquiring OAuth tokens.
     */
    enterpriseCloudPrintOAuthAuthority?: string | undefined;
    /**
     * GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority.
     */
    enterpriseCloudPrintOAuthClientIdentifier?: string | undefined;
    /**
     * OAuth resource URI for print service as configured in the Azure portal.
     */
    enterpriseCloudPrintResourceIdentifier?: string | undefined;
    /**
     * Indicates whether or not to enable device discovery UX.
     */
    experienceBlockDeviceDiscovery?: boolean | undefined;
    /**
     * Indicates whether or not to allow the error dialog from displaying if no SIM card is detected.
     */
    experienceBlockErrorDialogWhenNoSIM?: boolean | undefined;
    /**
     * Indicates whether or not to enable task switching on the device.
     */
    experienceBlockTaskSwitcher?: boolean | undefined;
    /**
     * Indicates whether or not to block DVR and broadcasting.
     */
    gameDvrBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from using internet sharing.
     */
    internetSharingBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from location services.
     */
    locationServicesBlocked?: boolean | undefined;
    /**
     * Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored.
     */
    lockScreenAllowTimeoutConfiguration?: boolean | undefined;
    /**
     * Indicates whether or not to block action center notifications over lock screen.
     */
    lockScreenBlockActionCenterNotifications?: boolean | undefined;
    /**
     * Indicates whether or not the user can interact with Cortana using speech while the system is locked.
     */
    lockScreenBlockCortana?: boolean | undefined;
    /**
     * Indicates whether to allow toast notifications above the device lock screen.
     */
    lockScreenBlockToastNotifications?: boolean | undefined;
    /**
     * Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices. Supported values are 11-1800. Valid values 11 to 1800
     */
    lockScreenTimeoutInSeconds?: number | undefined;
    /**
     * Disables the ability to quickly switch between users that are logged on simultaneously without logging off.
     */
    logonBlockFastUserSwitching?: boolean | undefined;
    /**
     * Indicates whether or not to Block a Microsoft account.
     */
    microsoftAccountBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to Block Microsoft account settings sync.
     */
    microsoftAccountBlockSettingsSync?: boolean | undefined;
    /**
     * If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to the user account that’s enrolled into MDM.
     */
    networkProxyApplySettingsDeviceWide?: boolean | undefined;
    /**
     * Address to the proxy auto-config (PAC) script you want to use.
     */
    networkProxyAutomaticConfigurationUrl?: string | undefined;
    /**
     * Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC) script.
     */
    networkProxyDisableAutoDetect?: boolean | undefined;
    /**
     * Specifies manual proxy server settings.
     */
    networkProxyServer?: Windows10NetworkProxyServer | undefined;
    /**
     * Indicates whether or not to Block the user from using near field communication.
     */
    nfcBlocked?: boolean | undefined;
    /**
     * Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive.
     */
    oneDriveDisableFileSync?: boolean | undefined;
    /**
     * Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the use of picture passwords.
     */
    passwordBlockSimple?: boolean | undefined;
    /**
     * The password expiration in days. Valid values 0 to 730
     */
    passwordExpirationDays?: number | undefined;
    /**
     * The number of character sets required in the password.
     */
    passwordMinimumCharacterSetCount?: number | undefined;
    /**
     * The minimum password length. Valid values 4 to 16
     */
    passwordMinimumLength?: number | undefined;
    /**
     * The minutes of inactivity before the screen times out.
     */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /**
     * The number of previous passwords to prevent reuse of. Valid values 0 to 50
     */
    passwordPreviousPasswordBlockCount?: number | undefined;
    /**
     * Indicates whether or not to require the user to have a password.
     */
    passwordRequired?: boolean | undefined;
    /**
     * Possible values of required passwords.
     */
    passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Indicates whether or not to require a password upon resuming from an idle state.
     */
    passwordRequireWhenResumeFromIdleState?: boolean | undefined;
    /**
     * The number of sign in failures before factory reset. Valid values 0 to 999
     */
    passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /**
     * A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url to a local image on the file system that needs to used as the Desktop Image.
     */
    personalizationDesktopImageUrl?: string | undefined;
    /**
     * A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a file Url to a local image on the file system that needs to be used as the Lock Screen Image.
     */
    personalizationLockScreenImageUrl?: string | undefined;
    /**
     * State Management Setting.
     */
    privacyAdvertisingId?: StateManagementSetting | undefined;
    /**
     * Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when launching apps.
     */
    privacyAutoAcceptPairingAndConsentPrompts?: boolean | undefined;
    /**
     * Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store applications.
     */
    privacyBlockInputPersonalization?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from reset protection mode.
     */
    resetProtectionModeBlocked?: boolean | undefined;
    /**
     * Specifies what level of safe search (filtering adult content) is required
     */
    safeSearchFilter?: SafeSearchFilterType | undefined;
    /**
     * Indicates whether or not to Block the user from taking Screenshots.
     */
    screenCaptureBlocked?: boolean | undefined;
    /**
     * Specifies if search can use diacritics.
     */
    searchBlockDiacritics?: boolean | undefined;
    /**
     * Specifies whether to use automatic language detection when indexing content and properties.
     */
    searchDisableAutoLanguageDetection?: boolean | undefined;
    /**
     * Indicates whether or not to disable the search indexer backoff feature.
     */
    searchDisableIndexerBackoff?: boolean | undefined;
    /**
     * Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for Cortana or Explorer.
     */
    searchDisableIndexingEncryptedItems?: boolean | undefined;
    /**
     * Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed.
     */
    searchDisableIndexingRemovableDrive?: boolean | undefined;
    /**
     * Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops.
     */
    searchEnableAutomaticIndexSizeManangement?: boolean | undefined;
    /**
     * Indicates whether or not to block remote queries of this computer’s index.
     */
    searchEnableRemoteQueries?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Accounts in Settings app.
     */
    settingsBlockAccountsPage?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from installing provisioning packages.
     */
    settingsBlockAddProvisioningPackage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Apps in Settings app.
     */
    settingsBlockAppsPage?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from changing the language settings.
     */
    settingsBlockChangeLanguage?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from changing power and sleep settings.
     */
    settingsBlockChangePowerSleep?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from changing the region settings.
     */
    settingsBlockChangeRegion?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from changing date and time settings.
     */
    settingsBlockChangeSystemTime?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Devices in Settings app.
     */
    settingsBlockDevicesPage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Ease of Access in Settings app.
     */
    settingsBlockEaseOfAccessPage?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from editing the device name.
     */
    settingsBlockEditDeviceName?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Gaming in Settings app.
     */
    settingsBlockGamingPage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Network & Internet in Settings app.
     */
    settingsBlockNetworkInternetPage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Personalization in Settings app.
     */
    settingsBlockPersonalizationPage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Privacy in Settings app.
     */
    settingsBlockPrivacyPage?: boolean | undefined;
    /**
     * Indicates whether or not to block the runtime configuration agent from removing provisioning packages.
     */
    settingsBlockRemoveProvisioningPackage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Settings app.
     */
    settingsBlockSettingsApp?: boolean | undefined;
    /**
     * Indicates whether or not to block access to System in Settings app.
     */
    settingsBlockSystemPage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Time & Language in Settings app.
     */
    settingsBlockTimeLanguagePage?: boolean | undefined;
    /**
     * Indicates whether or not to block access to Update & Security in Settings app.
     */
    settingsBlockUpdateSecurityPage?: boolean | undefined;
    /**
     * Indicates whether or not to block multiple users of the same app to share data.
     */
    sharedUserAppDataAllowed?: boolean | undefined;
    /**
     * Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites.
     */
    smartScreenBlockPromptOverride?: boolean | undefined;
    /**
     * Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files
     */
    smartScreenBlockPromptOverrideForFiles?: boolean | undefined;
    /**
     * This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT Admins to control whether users are allowed to install apps from places other than the Store.
     */
    smartScreenEnableAppInstallControl?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from unpinning apps from taskbar.
     */
    startBlockUnpinningAppsFromTaskbar?: boolean | undefined;
    /**
     * Type of start menu app list visibility.
     */
    startMenuAppListVisibility?: WindowsStartMenuAppListVisibilityType | undefined;
    /**
     * Enabling this policy hides the change account setting from appearing in the user tile in the start menu.
     */
    startMenuHideChangeAccountSettings?: boolean | undefined;
    /**
     * Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in the Settings app.
     */
    startMenuHideFrequentlyUsedApps?: boolean | undefined;
    /**
     * Enabling this policy hides hibernate from appearing in the power button in the start menu.
     */
    startMenuHideHibernate?: boolean | undefined;
    /**
     * Enabling this policy hides lock from appearing in the user tile in the start menu.
     */
    startMenuHideLock?: boolean | undefined;
    /**
     * Enabling this policy hides the power button from appearing in the start menu.
     */
    startMenuHidePowerButton?: boolean | undefined;
    /**
     * Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding toggle in the Settings app.
     */
    startMenuHideRecentJumpLists?: boolean | undefined;
    /**
     * Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle in the Settings app.
     */
    startMenuHideRecentlyAddedApps?: boolean | undefined;
    /**
     * Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu.
     */
    startMenuHideRestartOptions?: boolean | undefined;
    /**
     * Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu.
     */
    startMenuHideShutDown?: boolean | undefined;
    /**
     * Enabling this policy hides sign out from appearing in the user tile in the start menu.
     */
    startMenuHideSignOut?: boolean | undefined;
    /**
     * Enabling this policy hides sleep from appearing in the power button in the start menu.
     */
    startMenuHideSleep?: boolean | undefined;
    /**
     * Enabling this policy hides switch account from appearing in the user tile in the start menu.
     */
    startMenuHideSwitchAccount?: boolean | undefined;
    /**
     * Enabling this policy hides the user tile from appearing in the start menu.
     */
    startMenuHideUserTile?: boolean | undefined;
    /**
     * This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is modified. The value should be a UTF-8 Base64 encoded byte array.
     */
    startMenuLayoutEdgeAssetsXml?: string | undefined;
    /**
     * Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format.
     */
    startMenuLayoutXml?: string | undefined;
    /**
     * Type of display modes for the start menu.
     */
    startMenuMode?: WindowsStartMenuModeType | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderDocuments?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderDownloads?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderFileExplorer?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderHomeGroup?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderMusic?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderNetwork?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderPersonalFolder?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderPictures?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderSettings?: VisibilitySetting | undefined;
    /**
     * Generic visibility state.
     */
    startMenuPinnedFolderVideos?: VisibilitySetting | undefined;
    /**
     * Indicates whether or not to Block the user from using removable storage.
     */
    storageBlockRemovableStorage?: boolean | undefined;
    /**
     * Indicating whether or not to require encryption on a mobile device.
     */
    storageRequireMobileDeviceEncryption?: boolean | undefined;
    /**
     * Indicates whether application data is restricted to the system drive.
     */
    storageRestrictAppDataToSystemVolume?: boolean | undefined;
    /**
     * Indicates whether the installation of applications is restricted to the system drive.
     */
    storageRestrictAppInstallToSystemVolume?: boolean | undefined;
    /**
     * Whether the device is required to connect to the network.
     */
    tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from USB connection.
     */
    usbBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from voice recording.
     */
    voiceRecordingBlocked?: boolean | undefined;
    /**
     * Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC
     */
    webRtcBlockLocalhostIpAddress?: boolean | undefined;
    /**
     * Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
     */
    wiFiBlockAutomaticConnectHotspots?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from using Wi-Fi.
     */
    wiFiBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from using Wi-Fi manual configuration.
     */
    wiFiBlockManualConfiguration?: boolean | undefined;
    /**
     * Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low frequency. Valid values 1 to 500
     */
    wiFiScanInterval?: number | undefined;
    /**
     * Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership notifications, Post-OOBE app install and redirect tiles.
     */
    windowsSpotlightBlockConsumerSpecificFeatures?: boolean | undefined;
    /**
     * Allows IT admins to turn off all Windows Spotlight features
     */
    windowsSpotlightBlocked?: boolean | undefined;
    /**
     * Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce users to what is new or changed
     */
    windowsSpotlightBlockOnActionCenter?: boolean | undefined;
    /**
     * Block personalized content in Windows spotlight based on user’s device usage.
     */
    windowsSpotlightBlockTailoredExperiences?: boolean | undefined;
    /**
     * Block third party content delivered via Windows Spotlight
     */
    windowsSpotlightBlockThirdPartyNotifications?: boolean | undefined;
    /**
     * Block Windows Spotlight Windows welcome experience
     */
    windowsSpotlightBlockWelcomeExperience?: boolean | undefined;
    /**
     * Allows IT admins to turn off the popup of Windows Tips.
     */
    windowsSpotlightBlockWindowsTips?: boolean | undefined;
    /**
     * Allows IT admind to set a predefined default search engine for MDM-Controlled devices
     */
    windowsSpotlightConfigureOnLockScreen?: WindowsSpotlightEnablementSettings | undefined;
    /**
     * Indicates whether or not to block automatic update of apps from Windows Store.
     */
    windowsStoreBlockAutoUpdate?: boolean | undefined;
    /**
     * Indicates whether or not to Block the user from using the Windows store.
     */
    windowsStoreBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to enable Private Store Only.
     */
    windowsStoreEnablePrivateStoreOnly?: boolean | undefined;
    /**
     * Indicates whether or not to allow other devices from discovering this PC for projection.
     */
    wirelessDisplayBlockProjectionToThisDevice?: boolean | undefined;
    /**
     * Indicates whether or not to allow user input from wireless display receiver.
     */
    wirelessDisplayBlockUserInputFromReceiver?: boolean | undefined;
    /**
     * Indicates whether or not to require a PIN for new devices to initiate pairing.
     */
    wirelessDisplayRequirePinForPairing?: boolean | undefined;
}
