import {createDefenderDetectedMalwareActionsFromDiscriminatorValue} from './createDefenderDetectedMalwareActionsFromDiscriminatorValue';
import {createEdgeSearchEngineBaseFromDiscriminatorValue} from './createEdgeSearchEngineBaseFromDiscriminatorValue';
import {createWindows10NetworkProxyServerFromDiscriminatorValue} from './createWindows10NetworkProxyServerFromDiscriminatorValue';
import {DefenderCloudBlockLevelType} from './defenderCloudBlockLevelType';
import {DefenderDetectedMalwareActions} from './defenderDetectedMalwareActions';
import {DefenderMonitorFileActivity} from './defenderMonitorFileActivity';
import {DefenderPromptForSampleSubmission} from './defenderPromptForSampleSubmission';
import {DefenderScanType} from './defenderScanType';
import {DiagnosticDataSubmissionMode} from './diagnosticDataSubmissionMode';
import {EdgeCookiePolicy} from './edgeCookiePolicy';
import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {DefenderDetectedMalwareActionsImpl, DeviceConfigurationImpl, EdgeSearchEngineBaseImpl, Windows10NetworkProxyServerImpl} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {SafeSearchFilterType} from './safeSearchFilterType';
import {StateManagementSetting} from './stateManagementSetting';
import {VisibilitySetting} from './visibilitySetting';
import {WeeklySchedule} from './weeklySchedule';
import {Windows10GeneralConfiguration} from './windows10GeneralConfiguration';
import {Windows10NetworkProxyServer} from './windows10NetworkProxyServer';
import {WindowsSpotlightEnablementSettings} from './windowsSpotlightEnablementSettings';
import {WindowsStartMenuAppListVisibilityType} from './windowsStartMenuAppListVisibilityType';
import {WindowsStartMenuModeType} from './windowsStartMenuModeType';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class Windows10GeneralConfigurationImpl extends DeviceConfigurationImpl implements Windows10GeneralConfiguration {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    public accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    /** Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only). */
    public antiTheftModeBlocked?: boolean | undefined;
    /** Indicates whether apps from AppX packages signed with a trusted certificate can be side loaded. Possible values are: notConfigured, blocked, allowed. */
    public appsAllowTrustedAppsSideloading?: StateManagementSetting | undefined;
    /** Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were downloaded. */
    public appsBlockWindowsStoreOriginatedApps?: boolean | undefined;
    /** Specify a list of allowed Bluetooth services and profiles in hex formatted strings. */
    public bluetoothAllowedServices?: string[] | undefined;
    /** Whether or not to Block the user from using bluetooth advertising. */
    public bluetoothBlockAdvertising?: boolean | undefined;
    /** Whether or not to Block the user from using bluetooth discoverable mode. */
    public bluetoothBlockDiscoverableMode?: boolean | undefined;
    /** Whether or not to Block the user from using bluetooth. */
    public bluetoothBlocked?: boolean | undefined;
    /** Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device. */
    public bluetoothBlockPrePairing?: boolean | undefined;
    /** Whether or not to Block the user from accessing the camera of the device. */
    public cameraBlocked?: boolean | undefined;
    /** Whether or not to Block the user from using data over cellular while roaming. */
    public cellularBlockDataWhenRoaming?: boolean | undefined;
    /** Whether or not to Block the user from using VPN over cellular. */
    public cellularBlockVpn?: boolean | undefined;
    /** Whether or not to Block the user from using VPN when roaming over cellular. */
    public cellularBlockVpnWhenRoaming?: boolean | undefined;
    /** Whether or not to Block the user from doing manual root certificate installation. */
    public certificatesBlockManualRootCertificateInstallation?: boolean | undefined;
    /** Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote messaging, remote app sessions and other cross-device experiences. */
    public connectedDevicesServiceBlocked?: boolean | undefined;
    /** Whether or not to Block the user from using copy paste. */
    public copyPasteBlocked?: boolean | undefined;
    /** Whether or not to Block the user from using Cortana. */
    public cortanaBlocked?: boolean | undefined;
    /** Whether or not to block end user access to Defender. */
    public defenderBlockEndUserAccess?: boolean | undefined;
    /** Specifies the level of cloud-delivered protection. Possible values are: notConfigured, high, highPlus, zeroTolerance. */
    public defenderCloudBlockLevel?: DefenderCloudBlockLevelType | undefined;
    /** Number of days before deleting quarantined malware. Valid values 0 to 90 */
    public defenderDaysBeforeDeletingQuarantinedMalware?: number | undefined;
    /** Gets or sets Defender’s actions to take on detected Malware per threat level. */
    public defenderDetectedMalwareActions?: DefenderDetectedMalwareActions | undefined;
    /** File extensions to exclude from scans and real time protection. */
    public defenderFileExtensionsToExclude?: string[] | undefined;
    /** Files and folder to exclude from scans and real time protection. */
    public defenderFilesAndFoldersToExclude?: string[] | undefined;
    /** Value for monitoring file activity. Possible values are: userDefined, disable, monitorAllFiles, monitorIncomingFilesOnly, monitorOutgoingFilesOnly. */
    public defenderMonitorFileActivity?: DefenderMonitorFileActivity | undefined;
    /** Processes to exclude from scans and real time protection. */
    public defenderProcessesToExclude?: string[] | undefined;
    /** The configuration for how to prompt user for sample submission. Possible values are: userDefined, alwaysPrompt, promptBeforeSendingPersonalData, neverSendData, sendAllDataWithoutPrompting. */
    public defenderPromptForSampleSubmission?: DefenderPromptForSampleSubmission | undefined;
    /** Indicates whether or not to require behavior monitoring. */
    public defenderRequireBehaviorMonitoring?: boolean | undefined;
    /** Indicates whether or not to require cloud protection. */
    public defenderRequireCloudProtection?: boolean | undefined;
    /** Indicates whether or not to require network inspection system. */
    public defenderRequireNetworkInspectionSystem?: boolean | undefined;
    /** Indicates whether or not to require real time monitoring. */
    public defenderRequireRealTimeMonitoring?: boolean | undefined;
    /** Indicates whether or not to scan archive files. */
    public defenderScanArchiveFiles?: boolean | undefined;
    /** Indicates whether or not to scan downloads. */
    public defenderScanDownloads?: boolean | undefined;
    /** Indicates whether or not to scan incoming mail messages. */
    public defenderScanIncomingMail?: boolean | undefined;
    /** Indicates whether or not to scan mapped network drives during full scan. */
    public defenderScanMappedNetworkDrivesDuringFullScan?: boolean | undefined;
    /** Max CPU usage percentage during scan. Valid values 0 to 100 */
    public defenderScanMaxCpu?: number | undefined;
    /** Indicates whether or not to scan files opened from a network folder. */
    public defenderScanNetworkFiles?: boolean | undefined;
    /** Indicates whether or not to scan removable drives during full scan. */
    public defenderScanRemovableDrivesDuringFullScan?: boolean | undefined;
    /** Indicates whether or not to scan scripts loaded in Internet Explorer browser. */
    public defenderScanScriptsLoadedInInternetExplorer?: boolean | undefined;
    /** The defender system scan type. Possible values are: userDefined, disabled, quick, full. */
    public defenderScanType?: DefenderScanType | undefined;
    /** The time to perform a daily quick scan. */
    public defenderScheduledQuickScanTime?: TimeOnly | undefined;
    /** The defender time for the system scan. */
    public defenderScheduledScanTime?: TimeOnly | undefined;
    /** The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24 */
    public defenderSignatureUpdateIntervalInHours?: number | undefined;
    /** Defender day of the week for the system scan. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan. */
    public defenderSystemScanSchedule?: WeeklySchedule | undefined;
    /** Indicates whether or not to allow developer unlock. Possible values are: notConfigured, blocked, allowed. */
    public developerUnlockSetting?: StateManagementSetting | undefined;
    /** Indicates whether or not to Block the user from resetting their phone. */
    public deviceManagementBlockFactoryResetOnMobile?: boolean | undefined;
    /** Indicates whether or not to Block the user from doing manual un-enrollment from device management. */
    public deviceManagementBlockManualUnenroll?: boolean | undefined;
    /** Gets or sets a value allowing the device to send diagnostic and usage telemetry data, such as Watson. Possible values are: userDefined, none, basic, enhanced, full. */
    public diagnosticsDataSubmissionMode?: DiagnosticDataSubmissionMode | undefined;
    /** Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see by default when they open Edge. */
    public edgeAllowStartPagesModification?: boolean | undefined;
    /** Indicates whether or not to prevent access to about flags on Edge browser. */
    public edgeBlockAccessToAboutFlags?: boolean | undefined;
    /** Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections from Microsoft Edge to Microsoft services. */
    public edgeBlockAddressBarDropdown?: boolean | undefined;
    /** Indicates whether or not to block auto fill. */
    public edgeBlockAutofill?: boolean | undefined;
    /** Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with known compatibility issues. */
    public edgeBlockCompatibilityList?: boolean | undefined;
    /** Indicates whether or not to block developer tools in the Edge browser. */
    public edgeBlockDeveloperTools?: boolean | undefined;
    /** Indicates whether or not to Block the user from using the Edge browser. */
    public edgeBlocked?: boolean | undefined;
    /** Indicates whether or not to block extensions in the Edge browser. */
    public edgeBlockExtensions?: boolean | undefined;
    /** Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser. */
    public edgeBlockInPrivateBrowsing?: boolean | undefined;
    /** Indicates whether or not to Block the user from using JavaScript. */
    public edgeBlockJavaScript?: boolean | undefined;
    /** Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft Edge. */
    public edgeBlockLiveTileDataCollection?: boolean | undefined;
    /** Indicates whether or not to Block password manager. */
    public edgeBlockPasswordManager?: boolean | undefined;
    /** Indicates whether or not to block popups. */
    public edgeBlockPopups?: boolean | undefined;
    /** Indicates whether or not to block the user from using the search suggestions in the address bar. */
    public edgeBlockSearchSuggestions?: boolean | undefined;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    public edgeBlockSendingDoNotTrackHeader?: boolean | undefined;
    /** Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead. */
    public edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean | undefined;
    /** Clear browsing data on exiting Microsoft Edge. */
    public edgeClearBrowsingDataOnExit?: boolean | undefined;
    /** Indicates which cookies to block in the Edge browser. Possible values are: userDefined, allow, blockThirdParty, blockAll. */
    public edgeCookiePolicy?: EdgeCookiePolicy | undefined;
    /** Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those enrolled in zero emissions configurations, to block this page. */
    public edgeDisableFirstRunPage?: boolean | undefined;
    /** Indicates the enterprise mode site list location. Could be a local file, local network or http location. */
    public edgeEnterpriseModeSiteListLocation?: string | undefined;
    /** The first run URL for when Edge browser is opened for the first time. */
    public edgeFirstRunUrl?: string | undefined;
    /** The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser. */
    public edgeHomepageUrls?: string[] | undefined;
    /** Indicates whether or not to Require the user to use the smart screen filter. */
    public edgeRequireSmartScreen?: boolean | undefined;
    /** Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set. */
    public edgeSearchEngine?: EdgeSearchEngineBase | undefined;
    /** Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. */
    public edgeSendIntranetTrafficToInternetExplorer?: boolean | undefined;
    /** Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order changes to favorites are shared between browsers. */
    public edgeSyncFavoritesWithInternetExplorer?: boolean | undefined;
    /** Endpoint for discovering cloud printers. */
    public enterpriseCloudPrintDiscoveryEndPoint?: string | undefined;
    /** Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid values 1 to 65535 */
    public enterpriseCloudPrintDiscoveryMaxLimit?: number | undefined;
    /** OAuth resource URI for printer discovery service as configured in Azure portal. */
    public enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string | undefined;
    /** Authentication endpoint for acquiring OAuth tokens. */
    public enterpriseCloudPrintOAuthAuthority?: string | undefined;
    /** GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority. */
    public enterpriseCloudPrintOAuthClientIdentifier?: string | undefined;
    /** OAuth resource URI for print service as configured in the Azure portal. */
    public enterpriseCloudPrintResourceIdentifier?: string | undefined;
    /** Indicates whether or not to enable device discovery UX. */
    public experienceBlockDeviceDiscovery?: boolean | undefined;
    /** Indicates whether or not to allow the error dialog from displaying if no SIM card is detected. */
    public experienceBlockErrorDialogWhenNoSIM?: boolean | undefined;
    /** Indicates whether or not to enable task switching on the device. */
    public experienceBlockTaskSwitcher?: boolean | undefined;
    /** Indicates whether or not to block DVR and broadcasting. */
    public gameDvrBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from using internet sharing. */
    public internetSharingBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from location services. */
    public locationServicesBlocked?: boolean | undefined;
    /** Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored. */
    public lockScreenAllowTimeoutConfiguration?: boolean | undefined;
    /** Indicates whether or not to block action center notifications over lock screen. */
    public lockScreenBlockActionCenterNotifications?: boolean | undefined;
    /** Indicates whether or not the user can interact with Cortana using speech while the system is locked. */
    public lockScreenBlockCortana?: boolean | undefined;
    /** Indicates whether to allow toast notifications above the device lock screen. */
    public lockScreenBlockToastNotifications?: boolean | undefined;
    /** Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices. Supported values are 11-1800. Valid values 11 to 1800 */
    public lockScreenTimeoutInSeconds?: number | undefined;
    /** Disables the ability to quickly switch between users that are logged on simultaneously without logging off. */
    public logonBlockFastUserSwitching?: boolean | undefined;
    /** Indicates whether or not to Block a Microsoft account. */
    public microsoftAccountBlocked?: boolean | undefined;
    /** Indicates whether or not to Block Microsoft account settings sync. */
    public microsoftAccountBlockSettingsSync?: boolean | undefined;
    /** If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to the user account that’s enrolled into MDM. */
    public networkProxyApplySettingsDeviceWide?: boolean | undefined;
    /** Address to the proxy auto-config (PAC) script you want to use. */
    public networkProxyAutomaticConfigurationUrl?: string | undefined;
    /** Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC) script. */
    public networkProxyDisableAutoDetect?: boolean | undefined;
    /** Specifies manual proxy server settings. */
    public networkProxyServer?: Windows10NetworkProxyServer | undefined;
    /** Indicates whether or not to Block the user from using near field communication. */
    public nfcBlocked?: boolean | undefined;
    /** Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive. */
    public oneDriveDisableFileSync?: boolean | undefined;
    /** Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the use of picture passwords. */
    public passwordBlockSimple?: boolean | undefined;
    /** The password expiration in days. Valid values 0 to 730 */
    public passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. Valid values 4 to 16 */
    public passwordMinimumLength?: number | undefined;
    /** The minutes of inactivity before the screen times out. */
    public passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** The number of previous passwords to prevent reuse of. Valid values 0 to 50 */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Indicates whether or not to require the user to have a password. */
    public passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /** Indicates whether or not to require a password upon resuming from an idle state. */
    public passwordRequireWhenResumeFromIdleState?: boolean | undefined;
    /** The number of sign in failures before factory reset. Valid values 0 to 999 */
    public passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url to a local image on the file system that needs to used as the Desktop Image. */
    public personalizationDesktopImageUrl?: string | undefined;
    /** A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a file Url to a local image on the file system that needs to be used as the Lock Screen Image. */
    public personalizationLockScreenImageUrl?: string | undefined;
    /** Enables or disables the use of advertising ID. Added in Windows 10, version 1607. Possible values are: notConfigured, blocked, allowed. */
    public privacyAdvertisingId?: StateManagementSetting | undefined;
    /** Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when launching apps. */
    public privacyAutoAcceptPairingAndConsentPrompts?: boolean | undefined;
    /** Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store applications. */
    public privacyBlockInputPersonalization?: boolean | undefined;
    /** Indicates whether or not to Block the user from reset protection mode. */
    public resetProtectionModeBlocked?: boolean | undefined;
    /** Specifies what filter level of safe search is required. Possible values are: userDefined, strict, moderate. */
    public safeSearchFilter?: SafeSearchFilterType | undefined;
    /** Indicates whether or not to Block the user from taking Screenshots. */
    public screenCaptureBlocked?: boolean | undefined;
    /** Specifies if search can use diacritics. */
    public searchBlockDiacritics?: boolean | undefined;
    /** Specifies whether to use automatic language detection when indexing content and properties. */
    public searchDisableAutoLanguageDetection?: boolean | undefined;
    /** Indicates whether or not to disable the search indexer backoff feature. */
    public searchDisableIndexerBackoff?: boolean | undefined;
    /** Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for Cortana or Explorer. */
    public searchDisableIndexingEncryptedItems?: boolean | undefined;
    /** Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed. */
    public searchDisableIndexingRemovableDrive?: boolean | undefined;
    /** Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops. */
    public searchEnableAutomaticIndexSizeManangement?: boolean | undefined;
    /** Indicates whether or not to block remote queries of this computer’s index. */
    public searchEnableRemoteQueries?: boolean | undefined;
    /** Indicates whether or not to block access to Accounts in Settings app. */
    public settingsBlockAccountsPage?: boolean | undefined;
    /** Indicates whether or not to block the user from installing provisioning packages. */
    public settingsBlockAddProvisioningPackage?: boolean | undefined;
    /** Indicates whether or not to block access to Apps in Settings app. */
    public settingsBlockAppsPage?: boolean | undefined;
    /** Indicates whether or not to block the user from changing the language settings. */
    public settingsBlockChangeLanguage?: boolean | undefined;
    /** Indicates whether or not to block the user from changing power and sleep settings. */
    public settingsBlockChangePowerSleep?: boolean | undefined;
    /** Indicates whether or not to block the user from changing the region settings. */
    public settingsBlockChangeRegion?: boolean | undefined;
    /** Indicates whether or not to block the user from changing date and time settings. */
    public settingsBlockChangeSystemTime?: boolean | undefined;
    /** Indicates whether or not to block access to Devices in Settings app. */
    public settingsBlockDevicesPage?: boolean | undefined;
    /** Indicates whether or not to block access to Ease of Access in Settings app. */
    public settingsBlockEaseOfAccessPage?: boolean | undefined;
    /** Indicates whether or not to block the user from editing the device name. */
    public settingsBlockEditDeviceName?: boolean | undefined;
    /** Indicates whether or not to block access to Gaming in Settings app. */
    public settingsBlockGamingPage?: boolean | undefined;
    /** Indicates whether or not to block access to Network & Internet in Settings app. */
    public settingsBlockNetworkInternetPage?: boolean | undefined;
    /** Indicates whether or not to block access to Personalization in Settings app. */
    public settingsBlockPersonalizationPage?: boolean | undefined;
    /** Indicates whether or not to block access to Privacy in Settings app. */
    public settingsBlockPrivacyPage?: boolean | undefined;
    /** Indicates whether or not to block the runtime configuration agent from removing provisioning packages. */
    public settingsBlockRemoveProvisioningPackage?: boolean | undefined;
    /** Indicates whether or not to block access to Settings app. */
    public settingsBlockSettingsApp?: boolean | undefined;
    /** Indicates whether or not to block access to System in Settings app. */
    public settingsBlockSystemPage?: boolean | undefined;
    /** Indicates whether or not to block access to Time & Language in Settings app. */
    public settingsBlockTimeLanguagePage?: boolean | undefined;
    /** Indicates whether or not to block access to Update & Security in Settings app. */
    public settingsBlockUpdateSecurityPage?: boolean | undefined;
    /** Indicates whether or not to block multiple users of the same app to share data. */
    public sharedUserAppDataAllowed?: boolean | undefined;
    /** Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites. */
    public smartScreenBlockPromptOverride?: boolean | undefined;
    /** Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files */
    public smartScreenBlockPromptOverrideForFiles?: boolean | undefined;
    /** This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT Admins to control whether users are allowed to install apps from places other than the Store. */
    public smartScreenEnableAppInstallControl?: boolean | undefined;
    /** Indicates whether or not to block the user from unpinning apps from taskbar. */
    public startBlockUnpinningAppsFromTaskbar?: boolean | undefined;
    /** Setting the value of this collapses the app list, removes the app list entirely, or disables the corresponding toggle in the Settings app. Possible values are: userDefined, collapse, remove, disableSettingsApp. */
    public startMenuAppListVisibility?: WindowsStartMenuAppListVisibilityType | undefined;
    /** Enabling this policy hides the change account setting from appearing in the user tile in the start menu. */
    public startMenuHideChangeAccountSettings?: boolean | undefined;
    /** Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in the Settings app. */
    public startMenuHideFrequentlyUsedApps?: boolean | undefined;
    /** Enabling this policy hides hibernate from appearing in the power button in the start menu. */
    public startMenuHideHibernate?: boolean | undefined;
    /** Enabling this policy hides lock from appearing in the user tile in the start menu. */
    public startMenuHideLock?: boolean | undefined;
    /** Enabling this policy hides the power button from appearing in the start menu. */
    public startMenuHidePowerButton?: boolean | undefined;
    /** Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding toggle in the Settings app. */
    public startMenuHideRecentJumpLists?: boolean | undefined;
    /** Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle in the Settings app. */
    public startMenuHideRecentlyAddedApps?: boolean | undefined;
    /** Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu. */
    public startMenuHideRestartOptions?: boolean | undefined;
    /** Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu. */
    public startMenuHideShutDown?: boolean | undefined;
    /** Enabling this policy hides sign out from appearing in the user tile in the start menu. */
    public startMenuHideSignOut?: boolean | undefined;
    /** Enabling this policy hides sleep from appearing in the power button in the start menu. */
    public startMenuHideSleep?: boolean | undefined;
    /** Enabling this policy hides switch account from appearing in the user tile in the start menu. */
    public startMenuHideSwitchAccount?: boolean | undefined;
    /** Enabling this policy hides the user tile from appearing in the start menu. */
    public startMenuHideUserTile?: boolean | undefined;
    /** This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is modified. The value should be a UTF-8 Base64 encoded byte array. */
    public startMenuLayoutEdgeAssetsXml?: string | undefined;
    /** Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format. */
    public startMenuLayoutXml?: string | undefined;
    /** Allows admins to decide how the Start menu is displayed. Possible values are: userDefined, fullScreen, nonFullScreen. */
    public startMenuMode?: WindowsStartMenuModeType | undefined;
    /** Enforces the visibility (Show/Hide) of the Documents folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderDocuments?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Downloads folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderDownloads?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the FileExplorer shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderFileExplorer?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the HomeGroup folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderHomeGroup?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Music folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderMusic?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Network folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderNetwork?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the PersonalFolder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderPersonalFolder?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Pictures folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderPictures?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Settings folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderSettings?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Videos folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    public startMenuPinnedFolderVideos?: VisibilitySetting | undefined;
    /** Indicates whether or not to Block the user from using removable storage. */
    public storageBlockRemovableStorage?: boolean | undefined;
    /** Indicating whether or not to require encryption on a mobile device. */
    public storageRequireMobileDeviceEncryption?: boolean | undefined;
    /** Indicates whether application data is restricted to the system drive. */
    public storageRestrictAppDataToSystemVolume?: boolean | undefined;
    /** Indicates whether the installation of applications is restricted to the system drive. */
    public storageRestrictAppInstallToSystemVolume?: boolean | undefined;
    /** Whether the device is required to connect to the network. */
    public tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean | undefined;
    /** Indicates whether or not to Block the user from USB connection. */
    public usbBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from voice recording. */
    public voiceRecordingBlocked?: boolean | undefined;
    /** Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC */
    public webRtcBlockLocalhostIpAddress?: boolean | undefined;
    /** Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked. */
    public wiFiBlockAutomaticConnectHotspots?: boolean | undefined;
    /** Indicates whether or not to Block the user from using Wi-Fi. */
    public wiFiBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from using Wi-Fi manual configuration. */
    public wiFiBlockManualConfiguration?: boolean | undefined;
    /** Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low frequency. Valid values 1 to 500 */
    public wiFiScanInterval?: number | undefined;
    /** Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership notifications, Post-OOBE app install and redirect tiles. */
    public windowsSpotlightBlockConsumerSpecificFeatures?: boolean | undefined;
    /** Allows IT admins to turn off all Windows Spotlight features */
    public windowsSpotlightBlocked?: boolean | undefined;
    /** Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce users to what is new or changed */
    public windowsSpotlightBlockOnActionCenter?: boolean | undefined;
    /** Block personalized content in Windows spotlight based on user’s device usage. */
    public windowsSpotlightBlockTailoredExperiences?: boolean | undefined;
    /** Block third party content delivered via Windows Spotlight */
    public windowsSpotlightBlockThirdPartyNotifications?: boolean | undefined;
    /** Block Windows Spotlight Windows welcome experience */
    public windowsSpotlightBlockWelcomeExperience?: boolean | undefined;
    /** Allows IT admins to turn off the popup of Windows Tips. */
    public windowsSpotlightBlockWindowsTips?: boolean | undefined;
    /** Specifies the type of Spotlight. Possible values are: notConfigured, disabled, enabled. */
    public windowsSpotlightConfigureOnLockScreen?: WindowsSpotlightEnablementSettings | undefined;
    /** Indicates whether or not to block automatic update of apps from Windows Store. */
    public windowsStoreBlockAutoUpdate?: boolean | undefined;
    /** Indicates whether or not to Block the user from using the Windows store. */
    public windowsStoreBlocked?: boolean | undefined;
    /** Indicates whether or not to enable Private Store Only. */
    public windowsStoreEnablePrivateStoreOnly?: boolean | undefined;
    /** Indicates whether or not to allow other devices from discovering this PC for projection. */
    public wirelessDisplayBlockProjectionToThisDevice?: boolean | undefined;
    /** Indicates whether or not to allow user input from wireless display receiver. */
    public wirelessDisplayBlockUserInputFromReceiver?: boolean | undefined;
    /** Indicates whether or not to require a PIN for new devices to initiate pairing. */
    public wirelessDisplayRequirePinForPairing?: boolean | undefined;
    /**
     * Instantiates a new Windows10GeneralConfiguration and sets the default values.
     * @param windows10GeneralConfigurationParameterValue 
     */
    public constructor(windows10GeneralConfigurationParameterValue?: Windows10GeneralConfiguration | undefined) {
        super(windows10GeneralConfigurationParameterValue);
        this.accountsBlockAddingNonMicrosoftAccountEmail = windows10GeneralConfigurationParameterValue?.accountsBlockAddingNonMicrosoftAccountEmail;
        this.antiTheftModeBlocked = windows10GeneralConfigurationParameterValue?.antiTheftModeBlocked;
        this.appsAllowTrustedAppsSideloading = windows10GeneralConfigurationParameterValue?.appsAllowTrustedAppsSideloading;
        this.appsBlockWindowsStoreOriginatedApps = windows10GeneralConfigurationParameterValue?.appsBlockWindowsStoreOriginatedApps;
        this.bluetoothAllowedServices = windows10GeneralConfigurationParameterValue?.bluetoothAllowedServices;
        this.bluetoothBlockAdvertising = windows10GeneralConfigurationParameterValue?.bluetoothBlockAdvertising;
        this.bluetoothBlockDiscoverableMode = windows10GeneralConfigurationParameterValue?.bluetoothBlockDiscoverableMode;
        this.bluetoothBlocked = windows10GeneralConfigurationParameterValue?.bluetoothBlocked;
        this.bluetoothBlockPrePairing = windows10GeneralConfigurationParameterValue?.bluetoothBlockPrePairing;
        this.cameraBlocked = windows10GeneralConfigurationParameterValue?.cameraBlocked;
        this.cellularBlockDataWhenRoaming = windows10GeneralConfigurationParameterValue?.cellularBlockDataWhenRoaming;
        this.cellularBlockVpn = windows10GeneralConfigurationParameterValue?.cellularBlockVpn;
        this.cellularBlockVpnWhenRoaming = windows10GeneralConfigurationParameterValue?.cellularBlockVpnWhenRoaming;
        this.certificatesBlockManualRootCertificateInstallation = windows10GeneralConfigurationParameterValue?.certificatesBlockManualRootCertificateInstallation;
        this.connectedDevicesServiceBlocked = windows10GeneralConfigurationParameterValue?.connectedDevicesServiceBlocked;
        this.copyPasteBlocked = windows10GeneralConfigurationParameterValue?.copyPasteBlocked;
        this.cortanaBlocked = windows10GeneralConfigurationParameterValue?.cortanaBlocked;
        this.defenderBlockEndUserAccess = windows10GeneralConfigurationParameterValue?.defenderBlockEndUserAccess;
        this.defenderCloudBlockLevel = windows10GeneralConfigurationParameterValue?.defenderCloudBlockLevel;
        this.defenderDaysBeforeDeletingQuarantinedMalware = windows10GeneralConfigurationParameterValue?.defenderDaysBeforeDeletingQuarantinedMalware;
        this.defenderDetectedMalwareActions = windows10GeneralConfigurationParameterValue?.defenderDetectedMalwareActions;
        this.defenderFileExtensionsToExclude = windows10GeneralConfigurationParameterValue?.defenderFileExtensionsToExclude;
        this.defenderFilesAndFoldersToExclude = windows10GeneralConfigurationParameterValue?.defenderFilesAndFoldersToExclude;
        this.defenderMonitorFileActivity = windows10GeneralConfigurationParameterValue?.defenderMonitorFileActivity;
        this.defenderProcessesToExclude = windows10GeneralConfigurationParameterValue?.defenderProcessesToExclude;
        this.defenderPromptForSampleSubmission = windows10GeneralConfigurationParameterValue?.defenderPromptForSampleSubmission;
        this.defenderRequireBehaviorMonitoring = windows10GeneralConfigurationParameterValue?.defenderRequireBehaviorMonitoring;
        this.defenderRequireCloudProtection = windows10GeneralConfigurationParameterValue?.defenderRequireCloudProtection;
        this.defenderRequireNetworkInspectionSystem = windows10GeneralConfigurationParameterValue?.defenderRequireNetworkInspectionSystem;
        this.defenderRequireRealTimeMonitoring = windows10GeneralConfigurationParameterValue?.defenderRequireRealTimeMonitoring;
        this.defenderScanArchiveFiles = windows10GeneralConfigurationParameterValue?.defenderScanArchiveFiles;
        this.defenderScanDownloads = windows10GeneralConfigurationParameterValue?.defenderScanDownloads;
        this.defenderScanIncomingMail = windows10GeneralConfigurationParameterValue?.defenderScanIncomingMail;
        this.defenderScanMappedNetworkDrivesDuringFullScan = windows10GeneralConfigurationParameterValue?.defenderScanMappedNetworkDrivesDuringFullScan;
        this.defenderScanMaxCpu = windows10GeneralConfigurationParameterValue?.defenderScanMaxCpu;
        this.defenderScanNetworkFiles = windows10GeneralConfigurationParameterValue?.defenderScanNetworkFiles;
        this.defenderScanRemovableDrivesDuringFullScan = windows10GeneralConfigurationParameterValue?.defenderScanRemovableDrivesDuringFullScan;
        this.defenderScanScriptsLoadedInInternetExplorer = windows10GeneralConfigurationParameterValue?.defenderScanScriptsLoadedInInternetExplorer;
        this.defenderScanType = windows10GeneralConfigurationParameterValue?.defenderScanType;
        this.defenderScheduledQuickScanTime = windows10GeneralConfigurationParameterValue?.defenderScheduledQuickScanTime;
        this.defenderScheduledScanTime = windows10GeneralConfigurationParameterValue?.defenderScheduledScanTime;
        this.defenderSignatureUpdateIntervalInHours = windows10GeneralConfigurationParameterValue?.defenderSignatureUpdateIntervalInHours;
        this.defenderSystemScanSchedule = windows10GeneralConfigurationParameterValue?.defenderSystemScanSchedule;
        this.developerUnlockSetting = windows10GeneralConfigurationParameterValue?.developerUnlockSetting;
        this.deviceManagementBlockFactoryResetOnMobile = windows10GeneralConfigurationParameterValue?.deviceManagementBlockFactoryResetOnMobile;
        this.deviceManagementBlockManualUnenroll = windows10GeneralConfigurationParameterValue?.deviceManagementBlockManualUnenroll;
        this.diagnosticsDataSubmissionMode = windows10GeneralConfigurationParameterValue?.diagnosticsDataSubmissionMode;
        this.edgeAllowStartPagesModification = windows10GeneralConfigurationParameterValue?.edgeAllowStartPagesModification;
        this.edgeBlockAccessToAboutFlags = windows10GeneralConfigurationParameterValue?.edgeBlockAccessToAboutFlags;
        this.edgeBlockAddressBarDropdown = windows10GeneralConfigurationParameterValue?.edgeBlockAddressBarDropdown;
        this.edgeBlockAutofill = windows10GeneralConfigurationParameterValue?.edgeBlockAutofill;
        this.edgeBlockCompatibilityList = windows10GeneralConfigurationParameterValue?.edgeBlockCompatibilityList;
        this.edgeBlockDeveloperTools = windows10GeneralConfigurationParameterValue?.edgeBlockDeveloperTools;
        this.edgeBlocked = windows10GeneralConfigurationParameterValue?.edgeBlocked;
        this.edgeBlockExtensions = windows10GeneralConfigurationParameterValue?.edgeBlockExtensions;
        this.edgeBlockInPrivateBrowsing = windows10GeneralConfigurationParameterValue?.edgeBlockInPrivateBrowsing;
        this.edgeBlockJavaScript = windows10GeneralConfigurationParameterValue?.edgeBlockJavaScript;
        this.edgeBlockLiveTileDataCollection = windows10GeneralConfigurationParameterValue?.edgeBlockLiveTileDataCollection;
        this.edgeBlockPasswordManager = windows10GeneralConfigurationParameterValue?.edgeBlockPasswordManager;
        this.edgeBlockPopups = windows10GeneralConfigurationParameterValue?.edgeBlockPopups;
        this.edgeBlockSearchSuggestions = windows10GeneralConfigurationParameterValue?.edgeBlockSearchSuggestions;
        this.edgeBlockSendingDoNotTrackHeader = windows10GeneralConfigurationParameterValue?.edgeBlockSendingDoNotTrackHeader;
        this.edgeBlockSendingIntranetTrafficToInternetExplorer = windows10GeneralConfigurationParameterValue?.edgeBlockSendingIntranetTrafficToInternetExplorer;
        this.edgeClearBrowsingDataOnExit = windows10GeneralConfigurationParameterValue?.edgeClearBrowsingDataOnExit;
        this.edgeCookiePolicy = windows10GeneralConfigurationParameterValue?.edgeCookiePolicy;
        this.edgeDisableFirstRunPage = windows10GeneralConfigurationParameterValue?.edgeDisableFirstRunPage;
        this.edgeEnterpriseModeSiteListLocation = windows10GeneralConfigurationParameterValue?.edgeEnterpriseModeSiteListLocation;
        this.edgeFirstRunUrl = windows10GeneralConfigurationParameterValue?.edgeFirstRunUrl;
        this.edgeHomepageUrls = windows10GeneralConfigurationParameterValue?.edgeHomepageUrls;
        this.edgeRequireSmartScreen = windows10GeneralConfigurationParameterValue?.edgeRequireSmartScreen;
        this.edgeSearchEngine = windows10GeneralConfigurationParameterValue?.edgeSearchEngine;
        this.edgeSendIntranetTrafficToInternetExplorer = windows10GeneralConfigurationParameterValue?.edgeSendIntranetTrafficToInternetExplorer;
        this.edgeSyncFavoritesWithInternetExplorer = windows10GeneralConfigurationParameterValue?.edgeSyncFavoritesWithInternetExplorer;
        this.enterpriseCloudPrintDiscoveryEndPoint = windows10GeneralConfigurationParameterValue?.enterpriseCloudPrintDiscoveryEndPoint;
        this.enterpriseCloudPrintDiscoveryMaxLimit = windows10GeneralConfigurationParameterValue?.enterpriseCloudPrintDiscoveryMaxLimit;
        this.enterpriseCloudPrintMopriaDiscoveryResourceIdentifier = windows10GeneralConfigurationParameterValue?.enterpriseCloudPrintMopriaDiscoveryResourceIdentifier;
        this.enterpriseCloudPrintOAuthAuthority = windows10GeneralConfigurationParameterValue?.enterpriseCloudPrintOAuthAuthority;
        this.enterpriseCloudPrintOAuthClientIdentifier = windows10GeneralConfigurationParameterValue?.enterpriseCloudPrintOAuthClientIdentifier;
        this.enterpriseCloudPrintResourceIdentifier = windows10GeneralConfigurationParameterValue?.enterpriseCloudPrintResourceIdentifier;
        this.experienceBlockDeviceDiscovery = windows10GeneralConfigurationParameterValue?.experienceBlockDeviceDiscovery;
        this.experienceBlockErrorDialogWhenNoSIM = windows10GeneralConfigurationParameterValue?.experienceBlockErrorDialogWhenNoSIM;
        this.experienceBlockTaskSwitcher = windows10GeneralConfigurationParameterValue?.experienceBlockTaskSwitcher;
        this.gameDvrBlocked = windows10GeneralConfigurationParameterValue?.gameDvrBlocked;
        this.internetSharingBlocked = windows10GeneralConfigurationParameterValue?.internetSharingBlocked;
        this.locationServicesBlocked = windows10GeneralConfigurationParameterValue?.locationServicesBlocked;
        this.lockScreenAllowTimeoutConfiguration = windows10GeneralConfigurationParameterValue?.lockScreenAllowTimeoutConfiguration;
        this.lockScreenBlockActionCenterNotifications = windows10GeneralConfigurationParameterValue?.lockScreenBlockActionCenterNotifications;
        this.lockScreenBlockCortana = windows10GeneralConfigurationParameterValue?.lockScreenBlockCortana;
        this.lockScreenBlockToastNotifications = windows10GeneralConfigurationParameterValue?.lockScreenBlockToastNotifications;
        this.lockScreenTimeoutInSeconds = windows10GeneralConfigurationParameterValue?.lockScreenTimeoutInSeconds;
        this.logonBlockFastUserSwitching = windows10GeneralConfigurationParameterValue?.logonBlockFastUserSwitching;
        this.microsoftAccountBlocked = windows10GeneralConfigurationParameterValue?.microsoftAccountBlocked;
        this.microsoftAccountBlockSettingsSync = windows10GeneralConfigurationParameterValue?.microsoftAccountBlockSettingsSync;
        this.networkProxyApplySettingsDeviceWide = windows10GeneralConfigurationParameterValue?.networkProxyApplySettingsDeviceWide;
        this.networkProxyAutomaticConfigurationUrl = windows10GeneralConfigurationParameterValue?.networkProxyAutomaticConfigurationUrl;
        this.networkProxyDisableAutoDetect = windows10GeneralConfigurationParameterValue?.networkProxyDisableAutoDetect;
        this.networkProxyServer = windows10GeneralConfigurationParameterValue?.networkProxyServer;
        this.nfcBlocked = windows10GeneralConfigurationParameterValue?.nfcBlocked;
        this.oneDriveDisableFileSync = windows10GeneralConfigurationParameterValue?.oneDriveDisableFileSync;
        this.passwordBlockSimple = windows10GeneralConfigurationParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = windows10GeneralConfigurationParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = windows10GeneralConfigurationParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = windows10GeneralConfigurationParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeScreenTimeout = windows10GeneralConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this.passwordPreviousPasswordBlockCount = windows10GeneralConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = windows10GeneralConfigurationParameterValue?.passwordRequired;
        this.passwordRequiredType = windows10GeneralConfigurationParameterValue?.passwordRequiredType;
        this.passwordRequireWhenResumeFromIdleState = windows10GeneralConfigurationParameterValue?.passwordRequireWhenResumeFromIdleState;
        this.passwordSignInFailureCountBeforeFactoryReset = windows10GeneralConfigurationParameterValue?.passwordSignInFailureCountBeforeFactoryReset;
        this.personalizationDesktopImageUrl = windows10GeneralConfigurationParameterValue?.personalizationDesktopImageUrl;
        this.personalizationLockScreenImageUrl = windows10GeneralConfigurationParameterValue?.personalizationLockScreenImageUrl;
        this.privacyAdvertisingId = windows10GeneralConfigurationParameterValue?.privacyAdvertisingId;
        this.privacyAutoAcceptPairingAndConsentPrompts = windows10GeneralConfigurationParameterValue?.privacyAutoAcceptPairingAndConsentPrompts;
        this.privacyBlockInputPersonalization = windows10GeneralConfigurationParameterValue?.privacyBlockInputPersonalization;
        this.resetProtectionModeBlocked = windows10GeneralConfigurationParameterValue?.resetProtectionModeBlocked;
        this.safeSearchFilter = windows10GeneralConfigurationParameterValue?.safeSearchFilter;
        this.screenCaptureBlocked = windows10GeneralConfigurationParameterValue?.screenCaptureBlocked;
        this.searchBlockDiacritics = windows10GeneralConfigurationParameterValue?.searchBlockDiacritics;
        this.searchDisableAutoLanguageDetection = windows10GeneralConfigurationParameterValue?.searchDisableAutoLanguageDetection;
        this.searchDisableIndexerBackoff = windows10GeneralConfigurationParameterValue?.searchDisableIndexerBackoff;
        this.searchDisableIndexingEncryptedItems = windows10GeneralConfigurationParameterValue?.searchDisableIndexingEncryptedItems;
        this.searchDisableIndexingRemovableDrive = windows10GeneralConfigurationParameterValue?.searchDisableIndexingRemovableDrive;
        this.searchEnableAutomaticIndexSizeManangement = windows10GeneralConfigurationParameterValue?.searchEnableAutomaticIndexSizeManangement;
        this.searchEnableRemoteQueries = windows10GeneralConfigurationParameterValue?.searchEnableRemoteQueries;
        this.settingsBlockAccountsPage = windows10GeneralConfigurationParameterValue?.settingsBlockAccountsPage;
        this.settingsBlockAddProvisioningPackage = windows10GeneralConfigurationParameterValue?.settingsBlockAddProvisioningPackage;
        this.settingsBlockAppsPage = windows10GeneralConfigurationParameterValue?.settingsBlockAppsPage;
        this.settingsBlockChangeLanguage = windows10GeneralConfigurationParameterValue?.settingsBlockChangeLanguage;
        this.settingsBlockChangePowerSleep = windows10GeneralConfigurationParameterValue?.settingsBlockChangePowerSleep;
        this.settingsBlockChangeRegion = windows10GeneralConfigurationParameterValue?.settingsBlockChangeRegion;
        this.settingsBlockChangeSystemTime = windows10GeneralConfigurationParameterValue?.settingsBlockChangeSystemTime;
        this.settingsBlockDevicesPage = windows10GeneralConfigurationParameterValue?.settingsBlockDevicesPage;
        this.settingsBlockEaseOfAccessPage = windows10GeneralConfigurationParameterValue?.settingsBlockEaseOfAccessPage;
        this.settingsBlockEditDeviceName = windows10GeneralConfigurationParameterValue?.settingsBlockEditDeviceName;
        this.settingsBlockGamingPage = windows10GeneralConfigurationParameterValue?.settingsBlockGamingPage;
        this.settingsBlockNetworkInternetPage = windows10GeneralConfigurationParameterValue?.settingsBlockNetworkInternetPage;
        this.settingsBlockPersonalizationPage = windows10GeneralConfigurationParameterValue?.settingsBlockPersonalizationPage;
        this.settingsBlockPrivacyPage = windows10GeneralConfigurationParameterValue?.settingsBlockPrivacyPage;
        this.settingsBlockRemoveProvisioningPackage = windows10GeneralConfigurationParameterValue?.settingsBlockRemoveProvisioningPackage;
        this.settingsBlockSettingsApp = windows10GeneralConfigurationParameterValue?.settingsBlockSettingsApp;
        this.settingsBlockSystemPage = windows10GeneralConfigurationParameterValue?.settingsBlockSystemPage;
        this.settingsBlockTimeLanguagePage = windows10GeneralConfigurationParameterValue?.settingsBlockTimeLanguagePage;
        this.settingsBlockUpdateSecurityPage = windows10GeneralConfigurationParameterValue?.settingsBlockUpdateSecurityPage;
        this.sharedUserAppDataAllowed = windows10GeneralConfigurationParameterValue?.sharedUserAppDataAllowed;
        this.smartScreenBlockPromptOverride = windows10GeneralConfigurationParameterValue?.smartScreenBlockPromptOverride;
        this.smartScreenBlockPromptOverrideForFiles = windows10GeneralConfigurationParameterValue?.smartScreenBlockPromptOverrideForFiles;
        this.smartScreenEnableAppInstallControl = windows10GeneralConfigurationParameterValue?.smartScreenEnableAppInstallControl;
        this.startBlockUnpinningAppsFromTaskbar = windows10GeneralConfigurationParameterValue?.startBlockUnpinningAppsFromTaskbar;
        this.startMenuAppListVisibility = windows10GeneralConfigurationParameterValue?.startMenuAppListVisibility;
        this.startMenuHideChangeAccountSettings = windows10GeneralConfigurationParameterValue?.startMenuHideChangeAccountSettings;
        this.startMenuHideFrequentlyUsedApps = windows10GeneralConfigurationParameterValue?.startMenuHideFrequentlyUsedApps;
        this.startMenuHideHibernate = windows10GeneralConfigurationParameterValue?.startMenuHideHibernate;
        this.startMenuHideLock = windows10GeneralConfigurationParameterValue?.startMenuHideLock;
        this.startMenuHidePowerButton = windows10GeneralConfigurationParameterValue?.startMenuHidePowerButton;
        this.startMenuHideRecentJumpLists = windows10GeneralConfigurationParameterValue?.startMenuHideRecentJumpLists;
        this.startMenuHideRecentlyAddedApps = windows10GeneralConfigurationParameterValue?.startMenuHideRecentlyAddedApps;
        this.startMenuHideRestartOptions = windows10GeneralConfigurationParameterValue?.startMenuHideRestartOptions;
        this.startMenuHideShutDown = windows10GeneralConfigurationParameterValue?.startMenuHideShutDown;
        this.startMenuHideSignOut = windows10GeneralConfigurationParameterValue?.startMenuHideSignOut;
        this.startMenuHideSleep = windows10GeneralConfigurationParameterValue?.startMenuHideSleep;
        this.startMenuHideSwitchAccount = windows10GeneralConfigurationParameterValue?.startMenuHideSwitchAccount;
        this.startMenuHideUserTile = windows10GeneralConfigurationParameterValue?.startMenuHideUserTile;
        this.startMenuLayoutEdgeAssetsXml = windows10GeneralConfigurationParameterValue?.startMenuLayoutEdgeAssetsXml;
        this.startMenuLayoutXml = windows10GeneralConfigurationParameterValue?.startMenuLayoutXml;
        this.startMenuMode = windows10GeneralConfigurationParameterValue?.startMenuMode;
        this.startMenuPinnedFolderDocuments = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderDocuments;
        this.startMenuPinnedFolderDownloads = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderDownloads;
        this.startMenuPinnedFolderFileExplorer = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderFileExplorer;
        this.startMenuPinnedFolderHomeGroup = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderHomeGroup;
        this.startMenuPinnedFolderMusic = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderMusic;
        this.startMenuPinnedFolderNetwork = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderNetwork;
        this.startMenuPinnedFolderPersonalFolder = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderPersonalFolder;
        this.startMenuPinnedFolderPictures = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderPictures;
        this.startMenuPinnedFolderSettings = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderSettings;
        this.startMenuPinnedFolderVideos = windows10GeneralConfigurationParameterValue?.startMenuPinnedFolderVideos;
        this.storageBlockRemovableStorage = windows10GeneralConfigurationParameterValue?.storageBlockRemovableStorage;
        this.storageRequireMobileDeviceEncryption = windows10GeneralConfigurationParameterValue?.storageRequireMobileDeviceEncryption;
        this.storageRestrictAppDataToSystemVolume = windows10GeneralConfigurationParameterValue?.storageRestrictAppDataToSystemVolume;
        this.storageRestrictAppInstallToSystemVolume = windows10GeneralConfigurationParameterValue?.storageRestrictAppInstallToSystemVolume;
        this.tenantLockdownRequireNetworkDuringOutOfBoxExperience = windows10GeneralConfigurationParameterValue?.tenantLockdownRequireNetworkDuringOutOfBoxExperience;
        this.usbBlocked = windows10GeneralConfigurationParameterValue?.usbBlocked;
        this.voiceRecordingBlocked = windows10GeneralConfigurationParameterValue?.voiceRecordingBlocked;
        this.webRtcBlockLocalhostIpAddress = windows10GeneralConfigurationParameterValue?.webRtcBlockLocalhostIpAddress;
        this.wiFiBlockAutomaticConnectHotspots = windows10GeneralConfigurationParameterValue?.wiFiBlockAutomaticConnectHotspots;
        this.wiFiBlocked = windows10GeneralConfigurationParameterValue?.wiFiBlocked;
        this.wiFiBlockManualConfiguration = windows10GeneralConfigurationParameterValue?.wiFiBlockManualConfiguration;
        this.wiFiScanInterval = windows10GeneralConfigurationParameterValue?.wiFiScanInterval;
        this.windowsSpotlightBlockConsumerSpecificFeatures = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlockConsumerSpecificFeatures;
        this.windowsSpotlightBlocked = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlocked;
        this.windowsSpotlightBlockOnActionCenter = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlockOnActionCenter;
        this.windowsSpotlightBlockTailoredExperiences = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlockTailoredExperiences;
        this.windowsSpotlightBlockThirdPartyNotifications = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlockThirdPartyNotifications;
        this.windowsSpotlightBlockWelcomeExperience = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlockWelcomeExperience;
        this.windowsSpotlightBlockWindowsTips = windows10GeneralConfigurationParameterValue?.windowsSpotlightBlockWindowsTips;
        this.windowsSpotlightConfigureOnLockScreen = windows10GeneralConfigurationParameterValue?.windowsSpotlightConfigureOnLockScreen;
        this.windowsStoreBlockAutoUpdate = windows10GeneralConfigurationParameterValue?.windowsStoreBlockAutoUpdate;
        this.windowsStoreBlocked = windows10GeneralConfigurationParameterValue?.windowsStoreBlocked;
        this.windowsStoreEnablePrivateStoreOnly = windows10GeneralConfigurationParameterValue?.windowsStoreEnablePrivateStoreOnly;
        this.wirelessDisplayBlockProjectionToThisDevice = windows10GeneralConfigurationParameterValue?.wirelessDisplayBlockProjectionToThisDevice;
        this.wirelessDisplayBlockUserInputFromReceiver = windows10GeneralConfigurationParameterValue?.wirelessDisplayBlockUserInputFromReceiver;
        this.wirelessDisplayRequirePinForPairing = windows10GeneralConfigurationParameterValue?.wirelessDisplayRequirePinForPairing;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountsBlockAddingNonMicrosoftAccountEmail": n => { this.accountsBlockAddingNonMicrosoftAccountEmail = n.getBooleanValue(); },
            "antiTheftModeBlocked": n => { this.antiTheftModeBlocked = n.getBooleanValue(); },
            "appsAllowTrustedAppsSideloading": n => { this.appsAllowTrustedAppsSideloading = n.getEnumValue<StateManagementSetting>(StateManagementSetting); },
            "appsBlockWindowsStoreOriginatedApps": n => { this.appsBlockWindowsStoreOriginatedApps = n.getBooleanValue(); },
            "bluetoothAllowedServices": n => { this.bluetoothAllowedServices = n.getCollectionOfPrimitiveValues<string>(); },
            "bluetoothBlockAdvertising": n => { this.bluetoothBlockAdvertising = n.getBooleanValue(); },
            "bluetoothBlockDiscoverableMode": n => { this.bluetoothBlockDiscoverableMode = n.getBooleanValue(); },
            "bluetoothBlocked": n => { this.bluetoothBlocked = n.getBooleanValue(); },
            "bluetoothBlockPrePairing": n => { this.bluetoothBlockPrePairing = n.getBooleanValue(); },
            "cameraBlocked": n => { this.cameraBlocked = n.getBooleanValue(); },
            "cellularBlockDataWhenRoaming": n => { this.cellularBlockDataWhenRoaming = n.getBooleanValue(); },
            "cellularBlockVpn": n => { this.cellularBlockVpn = n.getBooleanValue(); },
            "cellularBlockVpnWhenRoaming": n => { this.cellularBlockVpnWhenRoaming = n.getBooleanValue(); },
            "certificatesBlockManualRootCertificateInstallation": n => { this.certificatesBlockManualRootCertificateInstallation = n.getBooleanValue(); },
            "connectedDevicesServiceBlocked": n => { this.connectedDevicesServiceBlocked = n.getBooleanValue(); },
            "copyPasteBlocked": n => { this.copyPasteBlocked = n.getBooleanValue(); },
            "cortanaBlocked": n => { this.cortanaBlocked = n.getBooleanValue(); },
            "defenderBlockEndUserAccess": n => { this.defenderBlockEndUserAccess = n.getBooleanValue(); },
            "defenderCloudBlockLevel": n => { this.defenderCloudBlockLevel = n.getEnumValue<DefenderCloudBlockLevelType>(DefenderCloudBlockLevelType); },
            "defenderDaysBeforeDeletingQuarantinedMalware": n => { this.defenderDaysBeforeDeletingQuarantinedMalware = n.getNumberValue(); },
            "defenderDetectedMalwareActions": n => { this.defenderDetectedMalwareActions = n.getObjectValue<DefenderDetectedMalwareActionsImpl>(createDefenderDetectedMalwareActionsFromDiscriminatorValue); },
            "defenderFileExtensionsToExclude": n => { this.defenderFileExtensionsToExclude = n.getCollectionOfPrimitiveValues<string>(); },
            "defenderFilesAndFoldersToExclude": n => { this.defenderFilesAndFoldersToExclude = n.getCollectionOfPrimitiveValues<string>(); },
            "defenderMonitorFileActivity": n => { this.defenderMonitorFileActivity = n.getEnumValue<DefenderMonitorFileActivity>(DefenderMonitorFileActivity); },
            "defenderProcessesToExclude": n => { this.defenderProcessesToExclude = n.getCollectionOfPrimitiveValues<string>(); },
            "defenderPromptForSampleSubmission": n => { this.defenderPromptForSampleSubmission = n.getEnumValue<DefenderPromptForSampleSubmission>(DefenderPromptForSampleSubmission); },
            "defenderRequireBehaviorMonitoring": n => { this.defenderRequireBehaviorMonitoring = n.getBooleanValue(); },
            "defenderRequireCloudProtection": n => { this.defenderRequireCloudProtection = n.getBooleanValue(); },
            "defenderRequireNetworkInspectionSystem": n => { this.defenderRequireNetworkInspectionSystem = n.getBooleanValue(); },
            "defenderRequireRealTimeMonitoring": n => { this.defenderRequireRealTimeMonitoring = n.getBooleanValue(); },
            "defenderScanArchiveFiles": n => { this.defenderScanArchiveFiles = n.getBooleanValue(); },
            "defenderScanDownloads": n => { this.defenderScanDownloads = n.getBooleanValue(); },
            "defenderScanIncomingMail": n => { this.defenderScanIncomingMail = n.getBooleanValue(); },
            "defenderScanMappedNetworkDrivesDuringFullScan": n => { this.defenderScanMappedNetworkDrivesDuringFullScan = n.getBooleanValue(); },
            "defenderScanMaxCpu": n => { this.defenderScanMaxCpu = n.getNumberValue(); },
            "defenderScanNetworkFiles": n => { this.defenderScanNetworkFiles = n.getBooleanValue(); },
            "defenderScanRemovableDrivesDuringFullScan": n => { this.defenderScanRemovableDrivesDuringFullScan = n.getBooleanValue(); },
            "defenderScanScriptsLoadedInInternetExplorer": n => { this.defenderScanScriptsLoadedInInternetExplorer = n.getBooleanValue(); },
            "defenderScanType": n => { this.defenderScanType = n.getEnumValue<DefenderScanType>(DefenderScanType); },
            "defenderScheduledQuickScanTime": n => { this.defenderScheduledQuickScanTime = n.getTimeOnlyValue(); },
            "defenderScheduledScanTime": n => { this.defenderScheduledScanTime = n.getTimeOnlyValue(); },
            "defenderSignatureUpdateIntervalInHours": n => { this.defenderSignatureUpdateIntervalInHours = n.getNumberValue(); },
            "defenderSystemScanSchedule": n => { this.defenderSystemScanSchedule = n.getEnumValue<WeeklySchedule>(WeeklySchedule); },
            "developerUnlockSetting": n => { this.developerUnlockSetting = n.getEnumValue<StateManagementSetting>(StateManagementSetting); },
            "deviceManagementBlockFactoryResetOnMobile": n => { this.deviceManagementBlockFactoryResetOnMobile = n.getBooleanValue(); },
            "deviceManagementBlockManualUnenroll": n => { this.deviceManagementBlockManualUnenroll = n.getBooleanValue(); },
            "diagnosticsDataSubmissionMode": n => { this.diagnosticsDataSubmissionMode = n.getEnumValue<DiagnosticDataSubmissionMode>(DiagnosticDataSubmissionMode); },
            "edgeAllowStartPagesModification": n => { this.edgeAllowStartPagesModification = n.getBooleanValue(); },
            "edgeBlockAccessToAboutFlags": n => { this.edgeBlockAccessToAboutFlags = n.getBooleanValue(); },
            "edgeBlockAddressBarDropdown": n => { this.edgeBlockAddressBarDropdown = n.getBooleanValue(); },
            "edgeBlockAutofill": n => { this.edgeBlockAutofill = n.getBooleanValue(); },
            "edgeBlockCompatibilityList": n => { this.edgeBlockCompatibilityList = n.getBooleanValue(); },
            "edgeBlockDeveloperTools": n => { this.edgeBlockDeveloperTools = n.getBooleanValue(); },
            "edgeBlocked": n => { this.edgeBlocked = n.getBooleanValue(); },
            "edgeBlockExtensions": n => { this.edgeBlockExtensions = n.getBooleanValue(); },
            "edgeBlockInPrivateBrowsing": n => { this.edgeBlockInPrivateBrowsing = n.getBooleanValue(); },
            "edgeBlockJavaScript": n => { this.edgeBlockJavaScript = n.getBooleanValue(); },
            "edgeBlockLiveTileDataCollection": n => { this.edgeBlockLiveTileDataCollection = n.getBooleanValue(); },
            "edgeBlockPasswordManager": n => { this.edgeBlockPasswordManager = n.getBooleanValue(); },
            "edgeBlockPopups": n => { this.edgeBlockPopups = n.getBooleanValue(); },
            "edgeBlockSearchSuggestions": n => { this.edgeBlockSearchSuggestions = n.getBooleanValue(); },
            "edgeBlockSendingDoNotTrackHeader": n => { this.edgeBlockSendingDoNotTrackHeader = n.getBooleanValue(); },
            "edgeBlockSendingIntranetTrafficToInternetExplorer": n => { this.edgeBlockSendingIntranetTrafficToInternetExplorer = n.getBooleanValue(); },
            "edgeClearBrowsingDataOnExit": n => { this.edgeClearBrowsingDataOnExit = n.getBooleanValue(); },
            "edgeCookiePolicy": n => { this.edgeCookiePolicy = n.getEnumValue<EdgeCookiePolicy>(EdgeCookiePolicy); },
            "edgeDisableFirstRunPage": n => { this.edgeDisableFirstRunPage = n.getBooleanValue(); },
            "edgeEnterpriseModeSiteListLocation": n => { this.edgeEnterpriseModeSiteListLocation = n.getStringValue(); },
            "edgeFirstRunUrl": n => { this.edgeFirstRunUrl = n.getStringValue(); },
            "edgeHomepageUrls": n => { this.edgeHomepageUrls = n.getCollectionOfPrimitiveValues<string>(); },
            "edgeRequireSmartScreen": n => { this.edgeRequireSmartScreen = n.getBooleanValue(); },
            "edgeSearchEngine": n => { this.edgeSearchEngine = n.getObjectValue<EdgeSearchEngineBaseImpl>(createEdgeSearchEngineBaseFromDiscriminatorValue); },
            "edgeSendIntranetTrafficToInternetExplorer": n => { this.edgeSendIntranetTrafficToInternetExplorer = n.getBooleanValue(); },
            "edgeSyncFavoritesWithInternetExplorer": n => { this.edgeSyncFavoritesWithInternetExplorer = n.getBooleanValue(); },
            "enterpriseCloudPrintDiscoveryEndPoint": n => { this.enterpriseCloudPrintDiscoveryEndPoint = n.getStringValue(); },
            "enterpriseCloudPrintDiscoveryMaxLimit": n => { this.enterpriseCloudPrintDiscoveryMaxLimit = n.getNumberValue(); },
            "enterpriseCloudPrintMopriaDiscoveryResourceIdentifier": n => { this.enterpriseCloudPrintMopriaDiscoveryResourceIdentifier = n.getStringValue(); },
            "enterpriseCloudPrintOAuthAuthority": n => { this.enterpriseCloudPrintOAuthAuthority = n.getStringValue(); },
            "enterpriseCloudPrintOAuthClientIdentifier": n => { this.enterpriseCloudPrintOAuthClientIdentifier = n.getStringValue(); },
            "enterpriseCloudPrintResourceIdentifier": n => { this.enterpriseCloudPrintResourceIdentifier = n.getStringValue(); },
            "experienceBlockDeviceDiscovery": n => { this.experienceBlockDeviceDiscovery = n.getBooleanValue(); },
            "experienceBlockErrorDialogWhenNoSIM": n => { this.experienceBlockErrorDialogWhenNoSIM = n.getBooleanValue(); },
            "experienceBlockTaskSwitcher": n => { this.experienceBlockTaskSwitcher = n.getBooleanValue(); },
            "gameDvrBlocked": n => { this.gameDvrBlocked = n.getBooleanValue(); },
            "internetSharingBlocked": n => { this.internetSharingBlocked = n.getBooleanValue(); },
            "locationServicesBlocked": n => { this.locationServicesBlocked = n.getBooleanValue(); },
            "lockScreenAllowTimeoutConfiguration": n => { this.lockScreenAllowTimeoutConfiguration = n.getBooleanValue(); },
            "lockScreenBlockActionCenterNotifications": n => { this.lockScreenBlockActionCenterNotifications = n.getBooleanValue(); },
            "lockScreenBlockCortana": n => { this.lockScreenBlockCortana = n.getBooleanValue(); },
            "lockScreenBlockToastNotifications": n => { this.lockScreenBlockToastNotifications = n.getBooleanValue(); },
            "lockScreenTimeoutInSeconds": n => { this.lockScreenTimeoutInSeconds = n.getNumberValue(); },
            "logonBlockFastUserSwitching": n => { this.logonBlockFastUserSwitching = n.getBooleanValue(); },
            "microsoftAccountBlocked": n => { this.microsoftAccountBlocked = n.getBooleanValue(); },
            "microsoftAccountBlockSettingsSync": n => { this.microsoftAccountBlockSettingsSync = n.getBooleanValue(); },
            "networkProxyApplySettingsDeviceWide": n => { this.networkProxyApplySettingsDeviceWide = n.getBooleanValue(); },
            "networkProxyAutomaticConfigurationUrl": n => { this.networkProxyAutomaticConfigurationUrl = n.getStringValue(); },
            "networkProxyDisableAutoDetect": n => { this.networkProxyDisableAutoDetect = n.getBooleanValue(); },
            "networkProxyServer": n => { this.networkProxyServer = n.getObjectValue<Windows10NetworkProxyServerImpl>(createWindows10NetworkProxyServerFromDiscriminatorValue); },
            "nfcBlocked": n => { this.nfcBlocked = n.getBooleanValue(); },
            "oneDriveDisableFileSync": n => { this.oneDriveDisableFileSync = n.getBooleanValue(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "passwordRequireWhenResumeFromIdleState": n => { this.passwordRequireWhenResumeFromIdleState = n.getBooleanValue(); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "personalizationDesktopImageUrl": n => { this.personalizationDesktopImageUrl = n.getStringValue(); },
            "personalizationLockScreenImageUrl": n => { this.personalizationLockScreenImageUrl = n.getStringValue(); },
            "privacyAdvertisingId": n => { this.privacyAdvertisingId = n.getEnumValue<StateManagementSetting>(StateManagementSetting); },
            "privacyAutoAcceptPairingAndConsentPrompts": n => { this.privacyAutoAcceptPairingAndConsentPrompts = n.getBooleanValue(); },
            "privacyBlockInputPersonalization": n => { this.privacyBlockInputPersonalization = n.getBooleanValue(); },
            "resetProtectionModeBlocked": n => { this.resetProtectionModeBlocked = n.getBooleanValue(); },
            "safeSearchFilter": n => { this.safeSearchFilter = n.getEnumValue<SafeSearchFilterType>(SafeSearchFilterType); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
            "searchBlockDiacritics": n => { this.searchBlockDiacritics = n.getBooleanValue(); },
            "searchDisableAutoLanguageDetection": n => { this.searchDisableAutoLanguageDetection = n.getBooleanValue(); },
            "searchDisableIndexerBackoff": n => { this.searchDisableIndexerBackoff = n.getBooleanValue(); },
            "searchDisableIndexingEncryptedItems": n => { this.searchDisableIndexingEncryptedItems = n.getBooleanValue(); },
            "searchDisableIndexingRemovableDrive": n => { this.searchDisableIndexingRemovableDrive = n.getBooleanValue(); },
            "searchEnableAutomaticIndexSizeManangement": n => { this.searchEnableAutomaticIndexSizeManangement = n.getBooleanValue(); },
            "searchEnableRemoteQueries": n => { this.searchEnableRemoteQueries = n.getBooleanValue(); },
            "settingsBlockAccountsPage": n => { this.settingsBlockAccountsPage = n.getBooleanValue(); },
            "settingsBlockAddProvisioningPackage": n => { this.settingsBlockAddProvisioningPackage = n.getBooleanValue(); },
            "settingsBlockAppsPage": n => { this.settingsBlockAppsPage = n.getBooleanValue(); },
            "settingsBlockChangeLanguage": n => { this.settingsBlockChangeLanguage = n.getBooleanValue(); },
            "settingsBlockChangePowerSleep": n => { this.settingsBlockChangePowerSleep = n.getBooleanValue(); },
            "settingsBlockChangeRegion": n => { this.settingsBlockChangeRegion = n.getBooleanValue(); },
            "settingsBlockChangeSystemTime": n => { this.settingsBlockChangeSystemTime = n.getBooleanValue(); },
            "settingsBlockDevicesPage": n => { this.settingsBlockDevicesPage = n.getBooleanValue(); },
            "settingsBlockEaseOfAccessPage": n => { this.settingsBlockEaseOfAccessPage = n.getBooleanValue(); },
            "settingsBlockEditDeviceName": n => { this.settingsBlockEditDeviceName = n.getBooleanValue(); },
            "settingsBlockGamingPage": n => { this.settingsBlockGamingPage = n.getBooleanValue(); },
            "settingsBlockNetworkInternetPage": n => { this.settingsBlockNetworkInternetPage = n.getBooleanValue(); },
            "settingsBlockPersonalizationPage": n => { this.settingsBlockPersonalizationPage = n.getBooleanValue(); },
            "settingsBlockPrivacyPage": n => { this.settingsBlockPrivacyPage = n.getBooleanValue(); },
            "settingsBlockRemoveProvisioningPackage": n => { this.settingsBlockRemoveProvisioningPackage = n.getBooleanValue(); },
            "settingsBlockSettingsApp": n => { this.settingsBlockSettingsApp = n.getBooleanValue(); },
            "settingsBlockSystemPage": n => { this.settingsBlockSystemPage = n.getBooleanValue(); },
            "settingsBlockTimeLanguagePage": n => { this.settingsBlockTimeLanguagePage = n.getBooleanValue(); },
            "settingsBlockUpdateSecurityPage": n => { this.settingsBlockUpdateSecurityPage = n.getBooleanValue(); },
            "sharedUserAppDataAllowed": n => { this.sharedUserAppDataAllowed = n.getBooleanValue(); },
            "smartScreenBlockPromptOverride": n => { this.smartScreenBlockPromptOverride = n.getBooleanValue(); },
            "smartScreenBlockPromptOverrideForFiles": n => { this.smartScreenBlockPromptOverrideForFiles = n.getBooleanValue(); },
            "smartScreenEnableAppInstallControl": n => { this.smartScreenEnableAppInstallControl = n.getBooleanValue(); },
            "startBlockUnpinningAppsFromTaskbar": n => { this.startBlockUnpinningAppsFromTaskbar = n.getBooleanValue(); },
            "startMenuAppListVisibility": n => { this.startMenuAppListVisibility = n.getEnumValue<WindowsStartMenuAppListVisibilityType>(WindowsStartMenuAppListVisibilityType); },
            "startMenuHideChangeAccountSettings": n => { this.startMenuHideChangeAccountSettings = n.getBooleanValue(); },
            "startMenuHideFrequentlyUsedApps": n => { this.startMenuHideFrequentlyUsedApps = n.getBooleanValue(); },
            "startMenuHideHibernate": n => { this.startMenuHideHibernate = n.getBooleanValue(); },
            "startMenuHideLock": n => { this.startMenuHideLock = n.getBooleanValue(); },
            "startMenuHidePowerButton": n => { this.startMenuHidePowerButton = n.getBooleanValue(); },
            "startMenuHideRecentJumpLists": n => { this.startMenuHideRecentJumpLists = n.getBooleanValue(); },
            "startMenuHideRecentlyAddedApps": n => { this.startMenuHideRecentlyAddedApps = n.getBooleanValue(); },
            "startMenuHideRestartOptions": n => { this.startMenuHideRestartOptions = n.getBooleanValue(); },
            "startMenuHideShutDown": n => { this.startMenuHideShutDown = n.getBooleanValue(); },
            "startMenuHideSignOut": n => { this.startMenuHideSignOut = n.getBooleanValue(); },
            "startMenuHideSleep": n => { this.startMenuHideSleep = n.getBooleanValue(); },
            "startMenuHideSwitchAccount": n => { this.startMenuHideSwitchAccount = n.getBooleanValue(); },
            "startMenuHideUserTile": n => { this.startMenuHideUserTile = n.getBooleanValue(); },
            "startMenuLayoutEdgeAssetsXml": n => { this.startMenuLayoutEdgeAssetsXml = n.getStringValue(); },
            "startMenuLayoutXml": n => { this.startMenuLayoutXml = n.getStringValue(); },
            "startMenuMode": n => { this.startMenuMode = n.getEnumValue<WindowsStartMenuModeType>(WindowsStartMenuModeType); },
            "startMenuPinnedFolderDocuments": n => { this.startMenuPinnedFolderDocuments = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderDownloads": n => { this.startMenuPinnedFolderDownloads = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderFileExplorer": n => { this.startMenuPinnedFolderFileExplorer = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderHomeGroup": n => { this.startMenuPinnedFolderHomeGroup = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderMusic": n => { this.startMenuPinnedFolderMusic = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderNetwork": n => { this.startMenuPinnedFolderNetwork = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderPersonalFolder": n => { this.startMenuPinnedFolderPersonalFolder = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderPictures": n => { this.startMenuPinnedFolderPictures = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderSettings": n => { this.startMenuPinnedFolderSettings = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "startMenuPinnedFolderVideos": n => { this.startMenuPinnedFolderVideos = n.getEnumValue<VisibilitySetting>(VisibilitySetting); },
            "storageBlockRemovableStorage": n => { this.storageBlockRemovableStorage = n.getBooleanValue(); },
            "storageRequireMobileDeviceEncryption": n => { this.storageRequireMobileDeviceEncryption = n.getBooleanValue(); },
            "storageRestrictAppDataToSystemVolume": n => { this.storageRestrictAppDataToSystemVolume = n.getBooleanValue(); },
            "storageRestrictAppInstallToSystemVolume": n => { this.storageRestrictAppInstallToSystemVolume = n.getBooleanValue(); },
            "tenantLockdownRequireNetworkDuringOutOfBoxExperience": n => { this.tenantLockdownRequireNetworkDuringOutOfBoxExperience = n.getBooleanValue(); },
            "usbBlocked": n => { this.usbBlocked = n.getBooleanValue(); },
            "voiceRecordingBlocked": n => { this.voiceRecordingBlocked = n.getBooleanValue(); },
            "webRtcBlockLocalhostIpAddress": n => { this.webRtcBlockLocalhostIpAddress = n.getBooleanValue(); },
            "wiFiBlockAutomaticConnectHotspots": n => { this.wiFiBlockAutomaticConnectHotspots = n.getBooleanValue(); },
            "wiFiBlocked": n => { this.wiFiBlocked = n.getBooleanValue(); },
            "wiFiBlockManualConfiguration": n => { this.wiFiBlockManualConfiguration = n.getBooleanValue(); },
            "wiFiScanInterval": n => { this.wiFiScanInterval = n.getNumberValue(); },
            "windowsSpotlightBlockConsumerSpecificFeatures": n => { this.windowsSpotlightBlockConsumerSpecificFeatures = n.getBooleanValue(); },
            "windowsSpotlightBlocked": n => { this.windowsSpotlightBlocked = n.getBooleanValue(); },
            "windowsSpotlightBlockOnActionCenter": n => { this.windowsSpotlightBlockOnActionCenter = n.getBooleanValue(); },
            "windowsSpotlightBlockTailoredExperiences": n => { this.windowsSpotlightBlockTailoredExperiences = n.getBooleanValue(); },
            "windowsSpotlightBlockThirdPartyNotifications": n => { this.windowsSpotlightBlockThirdPartyNotifications = n.getBooleanValue(); },
            "windowsSpotlightBlockWelcomeExperience": n => { this.windowsSpotlightBlockWelcomeExperience = n.getBooleanValue(); },
            "windowsSpotlightBlockWindowsTips": n => { this.windowsSpotlightBlockWindowsTips = n.getBooleanValue(); },
            "windowsSpotlightConfigureOnLockScreen": n => { this.windowsSpotlightConfigureOnLockScreen = n.getEnumValue<WindowsSpotlightEnablementSettings>(WindowsSpotlightEnablementSettings); },
            "windowsStoreBlockAutoUpdate": n => { this.windowsStoreBlockAutoUpdate = n.getBooleanValue(); },
            "windowsStoreBlocked": n => { this.windowsStoreBlocked = n.getBooleanValue(); },
            "windowsStoreEnablePrivateStoreOnly": n => { this.windowsStoreEnablePrivateStoreOnly = n.getBooleanValue(); },
            "wirelessDisplayBlockProjectionToThisDevice": n => { this.wirelessDisplayBlockProjectionToThisDevice = n.getBooleanValue(); },
            "wirelessDisplayBlockUserInputFromReceiver": n => { this.wirelessDisplayBlockUserInputFromReceiver = n.getBooleanValue(); },
            "wirelessDisplayRequirePinForPairing": n => { this.wirelessDisplayRequirePinForPairing = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountsBlockAddingNonMicrosoftAccountEmail){
            writer.writeBooleanValue("accountsBlockAddingNonMicrosoftAccountEmail", this.accountsBlockAddingNonMicrosoftAccountEmail);
        }
        if(this.antiTheftModeBlocked){
            writer.writeBooleanValue("antiTheftModeBlocked", this.antiTheftModeBlocked);
        }
        if(this.appsAllowTrustedAppsSideloading){
            writer.writeEnumValue<StateManagementSetting>("appsAllowTrustedAppsSideloading", this.appsAllowTrustedAppsSideloading);
        }
        if(this.appsBlockWindowsStoreOriginatedApps){
            writer.writeBooleanValue("appsBlockWindowsStoreOriginatedApps", this.appsBlockWindowsStoreOriginatedApps);
        }
        if(this.bluetoothAllowedServices){
            writer.writeCollectionOfPrimitiveValues<string>("bluetoothAllowedServices", this.bluetoothAllowedServices);
        }
        if(this.bluetoothBlockAdvertising){
            writer.writeBooleanValue("bluetoothBlockAdvertising", this.bluetoothBlockAdvertising);
        }
        if(this.bluetoothBlockDiscoverableMode){
            writer.writeBooleanValue("bluetoothBlockDiscoverableMode", this.bluetoothBlockDiscoverableMode);
        }
        if(this.bluetoothBlocked){
            writer.writeBooleanValue("bluetoothBlocked", this.bluetoothBlocked);
        }
        if(this.bluetoothBlockPrePairing){
            writer.writeBooleanValue("bluetoothBlockPrePairing", this.bluetoothBlockPrePairing);
        }
        if(this.cameraBlocked){
            writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        }
        if(this.cellularBlockDataWhenRoaming){
            writer.writeBooleanValue("cellularBlockDataWhenRoaming", this.cellularBlockDataWhenRoaming);
        }
        if(this.cellularBlockVpn){
            writer.writeBooleanValue("cellularBlockVpn", this.cellularBlockVpn);
        }
        if(this.cellularBlockVpnWhenRoaming){
            writer.writeBooleanValue("cellularBlockVpnWhenRoaming", this.cellularBlockVpnWhenRoaming);
        }
        if(this.certificatesBlockManualRootCertificateInstallation){
            writer.writeBooleanValue("certificatesBlockManualRootCertificateInstallation", this.certificatesBlockManualRootCertificateInstallation);
        }
        if(this.connectedDevicesServiceBlocked){
            writer.writeBooleanValue("connectedDevicesServiceBlocked", this.connectedDevicesServiceBlocked);
        }
        if(this.copyPasteBlocked){
            writer.writeBooleanValue("copyPasteBlocked", this.copyPasteBlocked);
        }
        if(this.cortanaBlocked){
            writer.writeBooleanValue("cortanaBlocked", this.cortanaBlocked);
        }
        if(this.defenderBlockEndUserAccess){
            writer.writeBooleanValue("defenderBlockEndUserAccess", this.defenderBlockEndUserAccess);
        }
        if(this.defenderCloudBlockLevel){
            writer.writeEnumValue<DefenderCloudBlockLevelType>("defenderCloudBlockLevel", this.defenderCloudBlockLevel);
        }
        if(this.defenderDaysBeforeDeletingQuarantinedMalware){
            writer.writeNumberValue("defenderDaysBeforeDeletingQuarantinedMalware", this.defenderDaysBeforeDeletingQuarantinedMalware);
        }
        if(this.defenderDetectedMalwareActions){
            writer.writeObjectValue<DefenderDetectedMalwareActionsImpl>("defenderDetectedMalwareActions", new DefenderDetectedMalwareActionsImpl(this.defenderDetectedMalwareActions));
        }
        if(this.defenderFileExtensionsToExclude){
            writer.writeCollectionOfPrimitiveValues<string>("defenderFileExtensionsToExclude", this.defenderFileExtensionsToExclude);
        }
        if(this.defenderFilesAndFoldersToExclude){
            writer.writeCollectionOfPrimitiveValues<string>("defenderFilesAndFoldersToExclude", this.defenderFilesAndFoldersToExclude);
        }
        if(this.defenderMonitorFileActivity){
            writer.writeEnumValue<DefenderMonitorFileActivity>("defenderMonitorFileActivity", this.defenderMonitorFileActivity);
        }
        if(this.defenderProcessesToExclude){
            writer.writeCollectionOfPrimitiveValues<string>("defenderProcessesToExclude", this.defenderProcessesToExclude);
        }
        if(this.defenderPromptForSampleSubmission){
            writer.writeEnumValue<DefenderPromptForSampleSubmission>("defenderPromptForSampleSubmission", this.defenderPromptForSampleSubmission);
        }
        if(this.defenderRequireBehaviorMonitoring){
            writer.writeBooleanValue("defenderRequireBehaviorMonitoring", this.defenderRequireBehaviorMonitoring);
        }
        if(this.defenderRequireCloudProtection){
            writer.writeBooleanValue("defenderRequireCloudProtection", this.defenderRequireCloudProtection);
        }
        if(this.defenderRequireNetworkInspectionSystem){
            writer.writeBooleanValue("defenderRequireNetworkInspectionSystem", this.defenderRequireNetworkInspectionSystem);
        }
        if(this.defenderRequireRealTimeMonitoring){
            writer.writeBooleanValue("defenderRequireRealTimeMonitoring", this.defenderRequireRealTimeMonitoring);
        }
        if(this.defenderScanArchiveFiles){
            writer.writeBooleanValue("defenderScanArchiveFiles", this.defenderScanArchiveFiles);
        }
        if(this.defenderScanDownloads){
            writer.writeBooleanValue("defenderScanDownloads", this.defenderScanDownloads);
        }
        if(this.defenderScanIncomingMail){
            writer.writeBooleanValue("defenderScanIncomingMail", this.defenderScanIncomingMail);
        }
        if(this.defenderScanMappedNetworkDrivesDuringFullScan){
            writer.writeBooleanValue("defenderScanMappedNetworkDrivesDuringFullScan", this.defenderScanMappedNetworkDrivesDuringFullScan);
        }
        if(this.defenderScanMaxCpu){
            writer.writeNumberValue("defenderScanMaxCpu", this.defenderScanMaxCpu);
        }
        if(this.defenderScanNetworkFiles){
            writer.writeBooleanValue("defenderScanNetworkFiles", this.defenderScanNetworkFiles);
        }
        if(this.defenderScanRemovableDrivesDuringFullScan){
            writer.writeBooleanValue("defenderScanRemovableDrivesDuringFullScan", this.defenderScanRemovableDrivesDuringFullScan);
        }
        if(this.defenderScanScriptsLoadedInInternetExplorer){
            writer.writeBooleanValue("defenderScanScriptsLoadedInInternetExplorer", this.defenderScanScriptsLoadedInInternetExplorer);
        }
        if(this.defenderScanType){
            writer.writeEnumValue<DefenderScanType>("defenderScanType", this.defenderScanType);
        }
        if(this.defenderScheduledQuickScanTime){
            writer.writeTimeOnlyValue("defenderScheduledQuickScanTime", this.defenderScheduledQuickScanTime);
        }
        if(this.defenderScheduledScanTime){
            writer.writeTimeOnlyValue("defenderScheduledScanTime", this.defenderScheduledScanTime);
        }
        if(this.defenderSignatureUpdateIntervalInHours){
            writer.writeNumberValue("defenderSignatureUpdateIntervalInHours", this.defenderSignatureUpdateIntervalInHours);
        }
        if(this.defenderSystemScanSchedule){
            writer.writeEnumValue<WeeklySchedule>("defenderSystemScanSchedule", this.defenderSystemScanSchedule);
        }
        if(this.developerUnlockSetting){
            writer.writeEnumValue<StateManagementSetting>("developerUnlockSetting", this.developerUnlockSetting);
        }
        if(this.deviceManagementBlockFactoryResetOnMobile){
            writer.writeBooleanValue("deviceManagementBlockFactoryResetOnMobile", this.deviceManagementBlockFactoryResetOnMobile);
        }
        if(this.deviceManagementBlockManualUnenroll){
            writer.writeBooleanValue("deviceManagementBlockManualUnenroll", this.deviceManagementBlockManualUnenroll);
        }
        if(this.diagnosticsDataSubmissionMode){
            writer.writeEnumValue<DiagnosticDataSubmissionMode>("diagnosticsDataSubmissionMode", this.diagnosticsDataSubmissionMode);
        }
        if(this.edgeAllowStartPagesModification){
            writer.writeBooleanValue("edgeAllowStartPagesModification", this.edgeAllowStartPagesModification);
        }
        if(this.edgeBlockAccessToAboutFlags){
            writer.writeBooleanValue("edgeBlockAccessToAboutFlags", this.edgeBlockAccessToAboutFlags);
        }
        if(this.edgeBlockAddressBarDropdown){
            writer.writeBooleanValue("edgeBlockAddressBarDropdown", this.edgeBlockAddressBarDropdown);
        }
        if(this.edgeBlockAutofill){
            writer.writeBooleanValue("edgeBlockAutofill", this.edgeBlockAutofill);
        }
        if(this.edgeBlockCompatibilityList){
            writer.writeBooleanValue("edgeBlockCompatibilityList", this.edgeBlockCompatibilityList);
        }
        if(this.edgeBlockDeveloperTools){
            writer.writeBooleanValue("edgeBlockDeveloperTools", this.edgeBlockDeveloperTools);
        }
        if(this.edgeBlocked){
            writer.writeBooleanValue("edgeBlocked", this.edgeBlocked);
        }
        if(this.edgeBlockExtensions){
            writer.writeBooleanValue("edgeBlockExtensions", this.edgeBlockExtensions);
        }
        if(this.edgeBlockInPrivateBrowsing){
            writer.writeBooleanValue("edgeBlockInPrivateBrowsing", this.edgeBlockInPrivateBrowsing);
        }
        if(this.edgeBlockJavaScript){
            writer.writeBooleanValue("edgeBlockJavaScript", this.edgeBlockJavaScript);
        }
        if(this.edgeBlockLiveTileDataCollection){
            writer.writeBooleanValue("edgeBlockLiveTileDataCollection", this.edgeBlockLiveTileDataCollection);
        }
        if(this.edgeBlockPasswordManager){
            writer.writeBooleanValue("edgeBlockPasswordManager", this.edgeBlockPasswordManager);
        }
        if(this.edgeBlockPopups){
            writer.writeBooleanValue("edgeBlockPopups", this.edgeBlockPopups);
        }
        if(this.edgeBlockSearchSuggestions){
            writer.writeBooleanValue("edgeBlockSearchSuggestions", this.edgeBlockSearchSuggestions);
        }
        if(this.edgeBlockSendingDoNotTrackHeader){
            writer.writeBooleanValue("edgeBlockSendingDoNotTrackHeader", this.edgeBlockSendingDoNotTrackHeader);
        }
        if(this.edgeBlockSendingIntranetTrafficToInternetExplorer){
            writer.writeBooleanValue("edgeBlockSendingIntranetTrafficToInternetExplorer", this.edgeBlockSendingIntranetTrafficToInternetExplorer);
        }
        if(this.edgeClearBrowsingDataOnExit){
            writer.writeBooleanValue("edgeClearBrowsingDataOnExit", this.edgeClearBrowsingDataOnExit);
        }
        if(this.edgeCookiePolicy){
            writer.writeEnumValue<EdgeCookiePolicy>("edgeCookiePolicy", this.edgeCookiePolicy);
        }
        if(this.edgeDisableFirstRunPage){
            writer.writeBooleanValue("edgeDisableFirstRunPage", this.edgeDisableFirstRunPage);
        }
        if(this.edgeEnterpriseModeSiteListLocation){
            writer.writeStringValue("edgeEnterpriseModeSiteListLocation", this.edgeEnterpriseModeSiteListLocation);
        }
        if(this.edgeFirstRunUrl){
            writer.writeStringValue("edgeFirstRunUrl", this.edgeFirstRunUrl);
        }
        if(this.edgeHomepageUrls){
            writer.writeCollectionOfPrimitiveValues<string>("edgeHomepageUrls", this.edgeHomepageUrls);
        }
        if(this.edgeRequireSmartScreen){
            writer.writeBooleanValue("edgeRequireSmartScreen", this.edgeRequireSmartScreen);
        }
        if(this.edgeSearchEngine){
            writer.writeObjectValue<EdgeSearchEngineBaseImpl>("edgeSearchEngine", new EdgeSearchEngineBaseImpl(this.edgeSearchEngine));
        }
        if(this.edgeSendIntranetTrafficToInternetExplorer){
            writer.writeBooleanValue("edgeSendIntranetTrafficToInternetExplorer", this.edgeSendIntranetTrafficToInternetExplorer);
        }
        if(this.edgeSyncFavoritesWithInternetExplorer){
            writer.writeBooleanValue("edgeSyncFavoritesWithInternetExplorer", this.edgeSyncFavoritesWithInternetExplorer);
        }
        if(this.enterpriseCloudPrintDiscoveryEndPoint){
            writer.writeStringValue("enterpriseCloudPrintDiscoveryEndPoint", this.enterpriseCloudPrintDiscoveryEndPoint);
        }
        if(this.enterpriseCloudPrintDiscoveryMaxLimit){
            writer.writeNumberValue("enterpriseCloudPrintDiscoveryMaxLimit", this.enterpriseCloudPrintDiscoveryMaxLimit);
        }
        if(this.enterpriseCloudPrintMopriaDiscoveryResourceIdentifier){
            writer.writeStringValue("enterpriseCloudPrintMopriaDiscoveryResourceIdentifier", this.enterpriseCloudPrintMopriaDiscoveryResourceIdentifier);
        }
        if(this.enterpriseCloudPrintOAuthAuthority){
            writer.writeStringValue("enterpriseCloudPrintOAuthAuthority", this.enterpriseCloudPrintOAuthAuthority);
        }
        if(this.enterpriseCloudPrintOAuthClientIdentifier){
            writer.writeStringValue("enterpriseCloudPrintOAuthClientIdentifier", this.enterpriseCloudPrintOAuthClientIdentifier);
        }
        if(this.enterpriseCloudPrintResourceIdentifier){
            writer.writeStringValue("enterpriseCloudPrintResourceIdentifier", this.enterpriseCloudPrintResourceIdentifier);
        }
        if(this.experienceBlockDeviceDiscovery){
            writer.writeBooleanValue("experienceBlockDeviceDiscovery", this.experienceBlockDeviceDiscovery);
        }
        if(this.experienceBlockErrorDialogWhenNoSIM){
            writer.writeBooleanValue("experienceBlockErrorDialogWhenNoSIM", this.experienceBlockErrorDialogWhenNoSIM);
        }
        if(this.experienceBlockTaskSwitcher){
            writer.writeBooleanValue("experienceBlockTaskSwitcher", this.experienceBlockTaskSwitcher);
        }
        if(this.gameDvrBlocked){
            writer.writeBooleanValue("gameDvrBlocked", this.gameDvrBlocked);
        }
        if(this.internetSharingBlocked){
            writer.writeBooleanValue("internetSharingBlocked", this.internetSharingBlocked);
        }
        if(this.locationServicesBlocked){
            writer.writeBooleanValue("locationServicesBlocked", this.locationServicesBlocked);
        }
        if(this.lockScreenAllowTimeoutConfiguration){
            writer.writeBooleanValue("lockScreenAllowTimeoutConfiguration", this.lockScreenAllowTimeoutConfiguration);
        }
        if(this.lockScreenBlockActionCenterNotifications){
            writer.writeBooleanValue("lockScreenBlockActionCenterNotifications", this.lockScreenBlockActionCenterNotifications);
        }
        if(this.lockScreenBlockCortana){
            writer.writeBooleanValue("lockScreenBlockCortana", this.lockScreenBlockCortana);
        }
        if(this.lockScreenBlockToastNotifications){
            writer.writeBooleanValue("lockScreenBlockToastNotifications", this.lockScreenBlockToastNotifications);
        }
        if(this.lockScreenTimeoutInSeconds){
            writer.writeNumberValue("lockScreenTimeoutInSeconds", this.lockScreenTimeoutInSeconds);
        }
        if(this.logonBlockFastUserSwitching){
            writer.writeBooleanValue("logonBlockFastUserSwitching", this.logonBlockFastUserSwitching);
        }
        if(this.microsoftAccountBlocked){
            writer.writeBooleanValue("microsoftAccountBlocked", this.microsoftAccountBlocked);
        }
        if(this.microsoftAccountBlockSettingsSync){
            writer.writeBooleanValue("microsoftAccountBlockSettingsSync", this.microsoftAccountBlockSettingsSync);
        }
        if(this.networkProxyApplySettingsDeviceWide){
            writer.writeBooleanValue("networkProxyApplySettingsDeviceWide", this.networkProxyApplySettingsDeviceWide);
        }
        if(this.networkProxyAutomaticConfigurationUrl){
            writer.writeStringValue("networkProxyAutomaticConfigurationUrl", this.networkProxyAutomaticConfigurationUrl);
        }
        if(this.networkProxyDisableAutoDetect){
            writer.writeBooleanValue("networkProxyDisableAutoDetect", this.networkProxyDisableAutoDetect);
        }
        if(this.networkProxyServer){
            writer.writeObjectValue<Windows10NetworkProxyServerImpl>("networkProxyServer", new Windows10NetworkProxyServerImpl(this.networkProxyServer));
        }
        if(this.nfcBlocked){
            writer.writeBooleanValue("nfcBlocked", this.nfcBlocked);
        }
        if(this.oneDriveDisableFileSync){
            writer.writeBooleanValue("oneDriveDisableFileSync", this.oneDriveDisableFileSync);
        }
        if(this.passwordBlockSimple){
            writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumCharacterSetCount){
            writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequired){
            writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
        if(this.passwordRequireWhenResumeFromIdleState){
            writer.writeBooleanValue("passwordRequireWhenResumeFromIdleState", this.passwordRequireWhenResumeFromIdleState);
        }
        if(this.passwordSignInFailureCountBeforeFactoryReset){
            writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        }
        if(this.personalizationDesktopImageUrl){
            writer.writeStringValue("personalizationDesktopImageUrl", this.personalizationDesktopImageUrl);
        }
        if(this.personalizationLockScreenImageUrl){
            writer.writeStringValue("personalizationLockScreenImageUrl", this.personalizationLockScreenImageUrl);
        }
        if(this.privacyAdvertisingId){
            writer.writeEnumValue<StateManagementSetting>("privacyAdvertisingId", this.privacyAdvertisingId);
        }
        if(this.privacyAutoAcceptPairingAndConsentPrompts){
            writer.writeBooleanValue("privacyAutoAcceptPairingAndConsentPrompts", this.privacyAutoAcceptPairingAndConsentPrompts);
        }
        if(this.privacyBlockInputPersonalization){
            writer.writeBooleanValue("privacyBlockInputPersonalization", this.privacyBlockInputPersonalization);
        }
        if(this.resetProtectionModeBlocked){
            writer.writeBooleanValue("resetProtectionModeBlocked", this.resetProtectionModeBlocked);
        }
        if(this.safeSearchFilter){
            writer.writeEnumValue<SafeSearchFilterType>("safeSearchFilter", this.safeSearchFilter);
        }
        if(this.screenCaptureBlocked){
            writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
        if(this.searchBlockDiacritics){
            writer.writeBooleanValue("searchBlockDiacritics", this.searchBlockDiacritics);
        }
        if(this.searchDisableAutoLanguageDetection){
            writer.writeBooleanValue("searchDisableAutoLanguageDetection", this.searchDisableAutoLanguageDetection);
        }
        if(this.searchDisableIndexerBackoff){
            writer.writeBooleanValue("searchDisableIndexerBackoff", this.searchDisableIndexerBackoff);
        }
        if(this.searchDisableIndexingEncryptedItems){
            writer.writeBooleanValue("searchDisableIndexingEncryptedItems", this.searchDisableIndexingEncryptedItems);
        }
        if(this.searchDisableIndexingRemovableDrive){
            writer.writeBooleanValue("searchDisableIndexingRemovableDrive", this.searchDisableIndexingRemovableDrive);
        }
        if(this.searchEnableAutomaticIndexSizeManangement){
            writer.writeBooleanValue("searchEnableAutomaticIndexSizeManangement", this.searchEnableAutomaticIndexSizeManangement);
        }
        if(this.searchEnableRemoteQueries){
            writer.writeBooleanValue("searchEnableRemoteQueries", this.searchEnableRemoteQueries);
        }
        if(this.settingsBlockAccountsPage){
            writer.writeBooleanValue("settingsBlockAccountsPage", this.settingsBlockAccountsPage);
        }
        if(this.settingsBlockAddProvisioningPackage){
            writer.writeBooleanValue("settingsBlockAddProvisioningPackage", this.settingsBlockAddProvisioningPackage);
        }
        if(this.settingsBlockAppsPage){
            writer.writeBooleanValue("settingsBlockAppsPage", this.settingsBlockAppsPage);
        }
        if(this.settingsBlockChangeLanguage){
            writer.writeBooleanValue("settingsBlockChangeLanguage", this.settingsBlockChangeLanguage);
        }
        if(this.settingsBlockChangePowerSleep){
            writer.writeBooleanValue("settingsBlockChangePowerSleep", this.settingsBlockChangePowerSleep);
        }
        if(this.settingsBlockChangeRegion){
            writer.writeBooleanValue("settingsBlockChangeRegion", this.settingsBlockChangeRegion);
        }
        if(this.settingsBlockChangeSystemTime){
            writer.writeBooleanValue("settingsBlockChangeSystemTime", this.settingsBlockChangeSystemTime);
        }
        if(this.settingsBlockDevicesPage){
            writer.writeBooleanValue("settingsBlockDevicesPage", this.settingsBlockDevicesPage);
        }
        if(this.settingsBlockEaseOfAccessPage){
            writer.writeBooleanValue("settingsBlockEaseOfAccessPage", this.settingsBlockEaseOfAccessPage);
        }
        if(this.settingsBlockEditDeviceName){
            writer.writeBooleanValue("settingsBlockEditDeviceName", this.settingsBlockEditDeviceName);
        }
        if(this.settingsBlockGamingPage){
            writer.writeBooleanValue("settingsBlockGamingPage", this.settingsBlockGamingPage);
        }
        if(this.settingsBlockNetworkInternetPage){
            writer.writeBooleanValue("settingsBlockNetworkInternetPage", this.settingsBlockNetworkInternetPage);
        }
        if(this.settingsBlockPersonalizationPage){
            writer.writeBooleanValue("settingsBlockPersonalizationPage", this.settingsBlockPersonalizationPage);
        }
        if(this.settingsBlockPrivacyPage){
            writer.writeBooleanValue("settingsBlockPrivacyPage", this.settingsBlockPrivacyPage);
        }
        if(this.settingsBlockRemoveProvisioningPackage){
            writer.writeBooleanValue("settingsBlockRemoveProvisioningPackage", this.settingsBlockRemoveProvisioningPackage);
        }
        if(this.settingsBlockSettingsApp){
            writer.writeBooleanValue("settingsBlockSettingsApp", this.settingsBlockSettingsApp);
        }
        if(this.settingsBlockSystemPage){
            writer.writeBooleanValue("settingsBlockSystemPage", this.settingsBlockSystemPage);
        }
        if(this.settingsBlockTimeLanguagePage){
            writer.writeBooleanValue("settingsBlockTimeLanguagePage", this.settingsBlockTimeLanguagePage);
        }
        if(this.settingsBlockUpdateSecurityPage){
            writer.writeBooleanValue("settingsBlockUpdateSecurityPage", this.settingsBlockUpdateSecurityPage);
        }
        if(this.sharedUserAppDataAllowed){
            writer.writeBooleanValue("sharedUserAppDataAllowed", this.sharedUserAppDataAllowed);
        }
        if(this.smartScreenBlockPromptOverride){
            writer.writeBooleanValue("smartScreenBlockPromptOverride", this.smartScreenBlockPromptOverride);
        }
        if(this.smartScreenBlockPromptOverrideForFiles){
            writer.writeBooleanValue("smartScreenBlockPromptOverrideForFiles", this.smartScreenBlockPromptOverrideForFiles);
        }
        if(this.smartScreenEnableAppInstallControl){
            writer.writeBooleanValue("smartScreenEnableAppInstallControl", this.smartScreenEnableAppInstallControl);
        }
        if(this.startBlockUnpinningAppsFromTaskbar){
            writer.writeBooleanValue("startBlockUnpinningAppsFromTaskbar", this.startBlockUnpinningAppsFromTaskbar);
        }
        if(this.startMenuAppListVisibility){
            writer.writeEnumValue<WindowsStartMenuAppListVisibilityType>("startMenuAppListVisibility", this.startMenuAppListVisibility);
        }
        if(this.startMenuHideChangeAccountSettings){
            writer.writeBooleanValue("startMenuHideChangeAccountSettings", this.startMenuHideChangeAccountSettings);
        }
        if(this.startMenuHideFrequentlyUsedApps){
            writer.writeBooleanValue("startMenuHideFrequentlyUsedApps", this.startMenuHideFrequentlyUsedApps);
        }
        if(this.startMenuHideHibernate){
            writer.writeBooleanValue("startMenuHideHibernate", this.startMenuHideHibernate);
        }
        if(this.startMenuHideLock){
            writer.writeBooleanValue("startMenuHideLock", this.startMenuHideLock);
        }
        if(this.startMenuHidePowerButton){
            writer.writeBooleanValue("startMenuHidePowerButton", this.startMenuHidePowerButton);
        }
        if(this.startMenuHideRecentJumpLists){
            writer.writeBooleanValue("startMenuHideRecentJumpLists", this.startMenuHideRecentJumpLists);
        }
        if(this.startMenuHideRecentlyAddedApps){
            writer.writeBooleanValue("startMenuHideRecentlyAddedApps", this.startMenuHideRecentlyAddedApps);
        }
        if(this.startMenuHideRestartOptions){
            writer.writeBooleanValue("startMenuHideRestartOptions", this.startMenuHideRestartOptions);
        }
        if(this.startMenuHideShutDown){
            writer.writeBooleanValue("startMenuHideShutDown", this.startMenuHideShutDown);
        }
        if(this.startMenuHideSignOut){
            writer.writeBooleanValue("startMenuHideSignOut", this.startMenuHideSignOut);
        }
        if(this.startMenuHideSleep){
            writer.writeBooleanValue("startMenuHideSleep", this.startMenuHideSleep);
        }
        if(this.startMenuHideSwitchAccount){
            writer.writeBooleanValue("startMenuHideSwitchAccount", this.startMenuHideSwitchAccount);
        }
        if(this.startMenuHideUserTile){
            writer.writeBooleanValue("startMenuHideUserTile", this.startMenuHideUserTile);
        }
        if(this.startMenuLayoutEdgeAssetsXml){
            writer.writeStringValue("startMenuLayoutEdgeAssetsXml", this.startMenuLayoutEdgeAssetsXml);
        }
        if(this.startMenuLayoutXml){
            writer.writeStringValue("startMenuLayoutXml", this.startMenuLayoutXml);
        }
        if(this.startMenuMode){
            writer.writeEnumValue<WindowsStartMenuModeType>("startMenuMode", this.startMenuMode);
        }
        if(this.startMenuPinnedFolderDocuments){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderDocuments", this.startMenuPinnedFolderDocuments);
        }
        if(this.startMenuPinnedFolderDownloads){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderDownloads", this.startMenuPinnedFolderDownloads);
        }
        if(this.startMenuPinnedFolderFileExplorer){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderFileExplorer", this.startMenuPinnedFolderFileExplorer);
        }
        if(this.startMenuPinnedFolderHomeGroup){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderHomeGroup", this.startMenuPinnedFolderHomeGroup);
        }
        if(this.startMenuPinnedFolderMusic){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderMusic", this.startMenuPinnedFolderMusic);
        }
        if(this.startMenuPinnedFolderNetwork){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderNetwork", this.startMenuPinnedFolderNetwork);
        }
        if(this.startMenuPinnedFolderPersonalFolder){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderPersonalFolder", this.startMenuPinnedFolderPersonalFolder);
        }
        if(this.startMenuPinnedFolderPictures){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderPictures", this.startMenuPinnedFolderPictures);
        }
        if(this.startMenuPinnedFolderSettings){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderSettings", this.startMenuPinnedFolderSettings);
        }
        if(this.startMenuPinnedFolderVideos){
            writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderVideos", this.startMenuPinnedFolderVideos);
        }
        if(this.storageBlockRemovableStorage){
            writer.writeBooleanValue("storageBlockRemovableStorage", this.storageBlockRemovableStorage);
        }
        if(this.storageRequireMobileDeviceEncryption){
            writer.writeBooleanValue("storageRequireMobileDeviceEncryption", this.storageRequireMobileDeviceEncryption);
        }
        if(this.storageRestrictAppDataToSystemVolume){
            writer.writeBooleanValue("storageRestrictAppDataToSystemVolume", this.storageRestrictAppDataToSystemVolume);
        }
        if(this.storageRestrictAppInstallToSystemVolume){
            writer.writeBooleanValue("storageRestrictAppInstallToSystemVolume", this.storageRestrictAppInstallToSystemVolume);
        }
        if(this.tenantLockdownRequireNetworkDuringOutOfBoxExperience){
            writer.writeBooleanValue("tenantLockdownRequireNetworkDuringOutOfBoxExperience", this.tenantLockdownRequireNetworkDuringOutOfBoxExperience);
        }
        if(this.usbBlocked){
            writer.writeBooleanValue("usbBlocked", this.usbBlocked);
        }
        if(this.voiceRecordingBlocked){
            writer.writeBooleanValue("voiceRecordingBlocked", this.voiceRecordingBlocked);
        }
        if(this.webRtcBlockLocalhostIpAddress){
            writer.writeBooleanValue("webRtcBlockLocalhostIpAddress", this.webRtcBlockLocalhostIpAddress);
        }
        if(this.wiFiBlockAutomaticConnectHotspots){
            writer.writeBooleanValue("wiFiBlockAutomaticConnectHotspots", this.wiFiBlockAutomaticConnectHotspots);
        }
        if(this.wiFiBlocked){
            writer.writeBooleanValue("wiFiBlocked", this.wiFiBlocked);
        }
        if(this.wiFiBlockManualConfiguration){
            writer.writeBooleanValue("wiFiBlockManualConfiguration", this.wiFiBlockManualConfiguration);
        }
        if(this.wiFiScanInterval){
            writer.writeNumberValue("wiFiScanInterval", this.wiFiScanInterval);
        }
        if(this.windowsSpotlightBlockConsumerSpecificFeatures){
            writer.writeBooleanValue("windowsSpotlightBlockConsumerSpecificFeatures", this.windowsSpotlightBlockConsumerSpecificFeatures);
        }
        if(this.windowsSpotlightBlocked){
            writer.writeBooleanValue("windowsSpotlightBlocked", this.windowsSpotlightBlocked);
        }
        if(this.windowsSpotlightBlockOnActionCenter){
            writer.writeBooleanValue("windowsSpotlightBlockOnActionCenter", this.windowsSpotlightBlockOnActionCenter);
        }
        if(this.windowsSpotlightBlockTailoredExperiences){
            writer.writeBooleanValue("windowsSpotlightBlockTailoredExperiences", this.windowsSpotlightBlockTailoredExperiences);
        }
        if(this.windowsSpotlightBlockThirdPartyNotifications){
            writer.writeBooleanValue("windowsSpotlightBlockThirdPartyNotifications", this.windowsSpotlightBlockThirdPartyNotifications);
        }
        if(this.windowsSpotlightBlockWelcomeExperience){
            writer.writeBooleanValue("windowsSpotlightBlockWelcomeExperience", this.windowsSpotlightBlockWelcomeExperience);
        }
        if(this.windowsSpotlightBlockWindowsTips){
            writer.writeBooleanValue("windowsSpotlightBlockWindowsTips", this.windowsSpotlightBlockWindowsTips);
        }
        if(this.windowsSpotlightConfigureOnLockScreen){
            writer.writeEnumValue<WindowsSpotlightEnablementSettings>("windowsSpotlightConfigureOnLockScreen", this.windowsSpotlightConfigureOnLockScreen);
        }
        if(this.windowsStoreBlockAutoUpdate){
            writer.writeBooleanValue("windowsStoreBlockAutoUpdate", this.windowsStoreBlockAutoUpdate);
        }
        if(this.windowsStoreBlocked){
            writer.writeBooleanValue("windowsStoreBlocked", this.windowsStoreBlocked);
        }
        if(this.windowsStoreEnablePrivateStoreOnly){
            writer.writeBooleanValue("windowsStoreEnablePrivateStoreOnly", this.windowsStoreEnablePrivateStoreOnly);
        }
        if(this.wirelessDisplayBlockProjectionToThisDevice){
            writer.writeBooleanValue("wirelessDisplayBlockProjectionToThisDevice", this.wirelessDisplayBlockProjectionToThisDevice);
        }
        if(this.wirelessDisplayBlockUserInputFromReceiver){
            writer.writeBooleanValue("wirelessDisplayBlockUserInputFromReceiver", this.wirelessDisplayBlockUserInputFromReceiver);
        }
        if(this.wirelessDisplayRequirePinForPairing){
            writer.writeBooleanValue("wirelessDisplayRequirePinForPairing", this.wirelessDisplayRequirePinForPairing);
        }
    };
}
