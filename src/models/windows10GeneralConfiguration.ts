import {createDefenderDetectedMalwareActionsFromDiscriminatorValue} from './createDefenderDetectedMalwareActionsFromDiscriminatorValue';
import {createEdgeSearchEngineBaseFromDiscriminatorValue} from './createEdgeSearchEngineBaseFromDiscriminatorValue';
import {createWindows10NetworkProxyServerFromDiscriminatorValue} from './createWindows10NetworkProxyServerFromDiscriminatorValue';
import {DefenderCloudBlockLevelType} from './defenderCloudBlockLevelType';
import {DefenderMonitorFileActivity} from './defenderMonitorFileActivity';
import {DefenderPromptForSampleSubmission} from './defenderPromptForSampleSubmission';
import {DefenderScanType} from './defenderScanType';
import {DiagnosticDataSubmissionMode} from './diagnosticDataSubmissionMode';
import {EdgeCookiePolicy} from './edgeCookiePolicy';
import {DefenderDetectedMalwareActions, DeviceConfiguration, EdgeSearchEngineBase, Windows10NetworkProxyServer} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {SafeSearchFilterType} from './safeSearchFilterType';
import {StateManagementSetting} from './stateManagementSetting';
import {VisibilitySetting} from './visibilitySetting';
import {WeeklySchedule} from './weeklySchedule';
import {WindowsSpotlightEnablementSettings} from './windowsSpotlightEnablementSettings';
import {WindowsStartMenuAppListVisibilityType} from './windowsStartMenuAppListVisibilityType';
import {WindowsStartMenuModeType} from './windowsStartMenuModeType';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class Windows10GeneralConfiguration extends DeviceConfiguration implements Parsable {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    private _accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    /** Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only). */
    private _antiTheftModeBlocked?: boolean | undefined;
    /** Indicates whether apps from AppX packages signed with a trusted certificate can be side loaded. Possible values are: notConfigured, blocked, allowed. */
    private _appsAllowTrustedAppsSideloading?: StateManagementSetting | undefined;
    /** Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were downloaded. */
    private _appsBlockWindowsStoreOriginatedApps?: boolean | undefined;
    /** Specify a list of allowed Bluetooth services and profiles in hex formatted strings. */
    private _bluetoothAllowedServices?: string[] | undefined;
    /** Whether or not to Block the user from using bluetooth advertising. */
    private _bluetoothBlockAdvertising?: boolean | undefined;
    /** Whether or not to Block the user from using bluetooth discoverable mode. */
    private _bluetoothBlockDiscoverableMode?: boolean | undefined;
    /** Whether or not to Block the user from using bluetooth. */
    private _bluetoothBlocked?: boolean | undefined;
    /** Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device. */
    private _bluetoothBlockPrePairing?: boolean | undefined;
    /** Whether or not to Block the user from accessing the camera of the device. */
    private _cameraBlocked?: boolean | undefined;
    /** Whether or not to Block the user from using data over cellular while roaming. */
    private _cellularBlockDataWhenRoaming?: boolean | undefined;
    /** Whether or not to Block the user from using VPN over cellular. */
    private _cellularBlockVpn?: boolean | undefined;
    /** Whether or not to Block the user from using VPN when roaming over cellular. */
    private _cellularBlockVpnWhenRoaming?: boolean | undefined;
    /** Whether or not to Block the user from doing manual root certificate installation. */
    private _certificatesBlockManualRootCertificateInstallation?: boolean | undefined;
    /** Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote messaging, remote app sessions and other cross-device experiences. */
    private _connectedDevicesServiceBlocked?: boolean | undefined;
    /** Whether or not to Block the user from using copy paste. */
    private _copyPasteBlocked?: boolean | undefined;
    /** Whether or not to Block the user from using Cortana. */
    private _cortanaBlocked?: boolean | undefined;
    /** Whether or not to block end user access to Defender. */
    private _defenderBlockEndUserAccess?: boolean | undefined;
    /** Specifies the level of cloud-delivered protection. Possible values are: notConfigured, high, highPlus, zeroTolerance. */
    private _defenderCloudBlockLevel?: DefenderCloudBlockLevelType | undefined;
    /** Number of days before deleting quarantined malware. Valid values 0 to 90 */
    private _defenderDaysBeforeDeletingQuarantinedMalware?: number | undefined;
    /** Gets or sets Defender’s actions to take on detected Malware per threat level. */
    private _defenderDetectedMalwareActions?: DefenderDetectedMalwareActions | undefined;
    /** File extensions to exclude from scans and real time protection. */
    private _defenderFileExtensionsToExclude?: string[] | undefined;
    /** Files and folder to exclude from scans and real time protection. */
    private _defenderFilesAndFoldersToExclude?: string[] | undefined;
    /** Value for monitoring file activity. Possible values are: userDefined, disable, monitorAllFiles, monitorIncomingFilesOnly, monitorOutgoingFilesOnly. */
    private _defenderMonitorFileActivity?: DefenderMonitorFileActivity | undefined;
    /** Processes to exclude from scans and real time protection. */
    private _defenderProcessesToExclude?: string[] | undefined;
    /** The configuration for how to prompt user for sample submission. Possible values are: userDefined, alwaysPrompt, promptBeforeSendingPersonalData, neverSendData, sendAllDataWithoutPrompting. */
    private _defenderPromptForSampleSubmission?: DefenderPromptForSampleSubmission | undefined;
    /** Indicates whether or not to require behavior monitoring. */
    private _defenderRequireBehaviorMonitoring?: boolean | undefined;
    /** Indicates whether or not to require cloud protection. */
    private _defenderRequireCloudProtection?: boolean | undefined;
    /** Indicates whether or not to require network inspection system. */
    private _defenderRequireNetworkInspectionSystem?: boolean | undefined;
    /** Indicates whether or not to require real time monitoring. */
    private _defenderRequireRealTimeMonitoring?: boolean | undefined;
    /** Indicates whether or not to scan archive files. */
    private _defenderScanArchiveFiles?: boolean | undefined;
    /** Indicates whether or not to scan downloads. */
    private _defenderScanDownloads?: boolean | undefined;
    /** Indicates whether or not to scan incoming mail messages. */
    private _defenderScanIncomingMail?: boolean | undefined;
    /** Indicates whether or not to scan mapped network drives during full scan. */
    private _defenderScanMappedNetworkDrivesDuringFullScan?: boolean | undefined;
    /** Max CPU usage percentage during scan. Valid values 0 to 100 */
    private _defenderScanMaxCpu?: number | undefined;
    /** Indicates whether or not to scan files opened from a network folder. */
    private _defenderScanNetworkFiles?: boolean | undefined;
    /** Indicates whether or not to scan removable drives during full scan. */
    private _defenderScanRemovableDrivesDuringFullScan?: boolean | undefined;
    /** Indicates whether or not to scan scripts loaded in Internet Explorer browser. */
    private _defenderScanScriptsLoadedInInternetExplorer?: boolean | undefined;
    /** The defender system scan type. Possible values are: userDefined, disabled, quick, full. */
    private _defenderScanType?: DefenderScanType | undefined;
    /** The time to perform a daily quick scan. */
    private _defenderScheduledQuickScanTime?: TimeOnly | undefined;
    /** The defender time for the system scan. */
    private _defenderScheduledScanTime?: TimeOnly | undefined;
    /** The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24 */
    private _defenderSignatureUpdateIntervalInHours?: number | undefined;
    /** Defender day of the week for the system scan. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan. */
    private _defenderSystemScanSchedule?: WeeklySchedule | undefined;
    /** Indicates whether or not to allow developer unlock. Possible values are: notConfigured, blocked, allowed. */
    private _developerUnlockSetting?: StateManagementSetting | undefined;
    /** Indicates whether or not to Block the user from resetting their phone. */
    private _deviceManagementBlockFactoryResetOnMobile?: boolean | undefined;
    /** Indicates whether or not to Block the user from doing manual un-enrollment from device management. */
    private _deviceManagementBlockManualUnenroll?: boolean | undefined;
    /** Gets or sets a value allowing the device to send diagnostic and usage telemetry data, such as Watson. Possible values are: userDefined, none, basic, enhanced, full. */
    private _diagnosticsDataSubmissionMode?: DiagnosticDataSubmissionMode | undefined;
    /** Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see by default when they open Edge. */
    private _edgeAllowStartPagesModification?: boolean | undefined;
    /** Indicates whether or not to prevent access to about flags on Edge browser. */
    private _edgeBlockAccessToAboutFlags?: boolean | undefined;
    /** Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections from Microsoft Edge to Microsoft services. */
    private _edgeBlockAddressBarDropdown?: boolean | undefined;
    /** Indicates whether or not to block auto fill. */
    private _edgeBlockAutofill?: boolean | undefined;
    /** Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with known compatibility issues. */
    private _edgeBlockCompatibilityList?: boolean | undefined;
    /** Indicates whether or not to block developer tools in the Edge browser. */
    private _edgeBlockDeveloperTools?: boolean | undefined;
    /** Indicates whether or not to Block the user from using the Edge browser. */
    private _edgeBlocked?: boolean | undefined;
    /** Indicates whether or not to block extensions in the Edge browser. */
    private _edgeBlockExtensions?: boolean | undefined;
    /** Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser. */
    private _edgeBlockInPrivateBrowsing?: boolean | undefined;
    /** Indicates whether or not to Block the user from using JavaScript. */
    private _edgeBlockJavaScript?: boolean | undefined;
    /** Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft Edge. */
    private _edgeBlockLiveTileDataCollection?: boolean | undefined;
    /** Indicates whether or not to Block password manager. */
    private _edgeBlockPasswordManager?: boolean | undefined;
    /** Indicates whether or not to block popups. */
    private _edgeBlockPopups?: boolean | undefined;
    /** Indicates whether or not to block the user from using the search suggestions in the address bar. */
    private _edgeBlockSearchSuggestions?: boolean | undefined;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    private _edgeBlockSendingDoNotTrackHeader?: boolean | undefined;
    /** Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead. */
    private _edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean | undefined;
    /** Clear browsing data on exiting Microsoft Edge. */
    private _edgeClearBrowsingDataOnExit?: boolean | undefined;
    /** Indicates which cookies to block in the Edge browser. Possible values are: userDefined, allow, blockThirdParty, blockAll. */
    private _edgeCookiePolicy?: EdgeCookiePolicy | undefined;
    /** Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those enrolled in zero emissions configurations, to block this page. */
    private _edgeDisableFirstRunPage?: boolean | undefined;
    /** Indicates the enterprise mode site list location. Could be a local file, local network or http location. */
    private _edgeEnterpriseModeSiteListLocation?: string | undefined;
    /** The first run URL for when Edge browser is opened for the first time. */
    private _edgeFirstRunUrl?: string | undefined;
    /** The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser. */
    private _edgeHomepageUrls?: string[] | undefined;
    /** Indicates whether or not to Require the user to use the smart screen filter. */
    private _edgeRequireSmartScreen?: boolean | undefined;
    /** Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set. */
    private _edgeSearchEngine?: EdgeSearchEngineBase | undefined;
    /** Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. */
    private _edgeSendIntranetTrafficToInternetExplorer?: boolean | undefined;
    /** Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order changes to favorites are shared between browsers. */
    private _edgeSyncFavoritesWithInternetExplorer?: boolean | undefined;
    /** Endpoint for discovering cloud printers. */
    private _enterpriseCloudPrintDiscoveryEndPoint?: string | undefined;
    /** Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid values 1 to 65535 */
    private _enterpriseCloudPrintDiscoveryMaxLimit?: number | undefined;
    /** OAuth resource URI for printer discovery service as configured in Azure portal. */
    private _enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string | undefined;
    /** Authentication endpoint for acquiring OAuth tokens. */
    private _enterpriseCloudPrintOAuthAuthority?: string | undefined;
    /** GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority. */
    private _enterpriseCloudPrintOAuthClientIdentifier?: string | undefined;
    /** OAuth resource URI for print service as configured in the Azure portal. */
    private _enterpriseCloudPrintResourceIdentifier?: string | undefined;
    /** Indicates whether or not to enable device discovery UX. */
    private _experienceBlockDeviceDiscovery?: boolean | undefined;
    /** Indicates whether or not to allow the error dialog from displaying if no SIM card is detected. */
    private _experienceBlockErrorDialogWhenNoSIM?: boolean | undefined;
    /** Indicates whether or not to enable task switching on the device. */
    private _experienceBlockTaskSwitcher?: boolean | undefined;
    /** Indicates whether or not to block DVR and broadcasting. */
    private _gameDvrBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from using internet sharing. */
    private _internetSharingBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from location services. */
    private _locationServicesBlocked?: boolean | undefined;
    /** Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored. */
    private _lockScreenAllowTimeoutConfiguration?: boolean | undefined;
    /** Indicates whether or not to block action center notifications over lock screen. */
    private _lockScreenBlockActionCenterNotifications?: boolean | undefined;
    /** Indicates whether or not the user can interact with Cortana using speech while the system is locked. */
    private _lockScreenBlockCortana?: boolean | undefined;
    /** Indicates whether to allow toast notifications above the device lock screen. */
    private _lockScreenBlockToastNotifications?: boolean | undefined;
    /** Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices. Supported values are 11-1800. Valid values 11 to 1800 */
    private _lockScreenTimeoutInSeconds?: number | undefined;
    /** Disables the ability to quickly switch between users that are logged on simultaneously without logging off. */
    private _logonBlockFastUserSwitching?: boolean | undefined;
    /** Indicates whether or not to Block a Microsoft account. */
    private _microsoftAccountBlocked?: boolean | undefined;
    /** Indicates whether or not to Block Microsoft account settings sync. */
    private _microsoftAccountBlockSettingsSync?: boolean | undefined;
    /** If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to the user account that’s enrolled into MDM. */
    private _networkProxyApplySettingsDeviceWide?: boolean | undefined;
    /** Address to the proxy auto-config (PAC) script you want to use. */
    private _networkProxyAutomaticConfigurationUrl?: string | undefined;
    /** Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC) script. */
    private _networkProxyDisableAutoDetect?: boolean | undefined;
    /** Specifies manual proxy server settings. */
    private _networkProxyServer?: Windows10NetworkProxyServer | undefined;
    /** Indicates whether or not to Block the user from using near field communication. */
    private _nfcBlocked?: boolean | undefined;
    /** Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive. */
    private _oneDriveDisableFileSync?: boolean | undefined;
    /** Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the use of picture passwords. */
    private _passwordBlockSimple?: boolean | undefined;
    /** The password expiration in days. Valid values 0 to 730 */
    private _passwordExpirationDays?: number | undefined;
    /** The number of character sets required in the password. */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** The minimum password length. Valid values 4 to 16 */
    private _passwordMinimumLength?: number | undefined;
    /** The minutes of inactivity before the screen times out. */
    private _passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** The number of previous passwords to prevent reuse of. Valid values 0 to 50 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Indicates whether or not to require the user to have a password. */
    private _passwordRequired?: boolean | undefined;
    /** The required password type. Possible values are: deviceDefault, alphanumeric, numeric. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /** Indicates whether or not to require a password upon resuming from an idle state. */
    private _passwordRequireWhenResumeFromIdleState?: boolean | undefined;
    /** The number of sign in failures before factory reset. Valid values 0 to 999 */
    private _passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url to a local image on the file system that needs to used as the Desktop Image. */
    private _personalizationDesktopImageUrl?: string | undefined;
    /** A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a file Url to a local image on the file system that needs to be used as the Lock Screen Image. */
    private _personalizationLockScreenImageUrl?: string | undefined;
    /** Enables or disables the use of advertising ID. Added in Windows 10, version 1607. Possible values are: notConfigured, blocked, allowed. */
    private _privacyAdvertisingId?: StateManagementSetting | undefined;
    /** Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when launching apps. */
    private _privacyAutoAcceptPairingAndConsentPrompts?: boolean | undefined;
    /** Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store applications. */
    private _privacyBlockInputPersonalization?: boolean | undefined;
    /** Indicates whether or not to Block the user from reset protection mode. */
    private _resetProtectionModeBlocked?: boolean | undefined;
    /** Specifies what filter level of safe search is required. Possible values are: userDefined, strict, moderate. */
    private _safeSearchFilter?: SafeSearchFilterType | undefined;
    /** Indicates whether or not to Block the user from taking Screenshots. */
    private _screenCaptureBlocked?: boolean | undefined;
    /** Specifies if search can use diacritics. */
    private _searchBlockDiacritics?: boolean | undefined;
    /** Specifies whether to use automatic language detection when indexing content and properties. */
    private _searchDisableAutoLanguageDetection?: boolean | undefined;
    /** Indicates whether or not to disable the search indexer backoff feature. */
    private _searchDisableIndexerBackoff?: boolean | undefined;
    /** Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for Cortana or Explorer. */
    private _searchDisableIndexingEncryptedItems?: boolean | undefined;
    /** Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed. */
    private _searchDisableIndexingRemovableDrive?: boolean | undefined;
    /** Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops. */
    private _searchEnableAutomaticIndexSizeManangement?: boolean | undefined;
    /** Indicates whether or not to block remote queries of this computer’s index. */
    private _searchEnableRemoteQueries?: boolean | undefined;
    /** Indicates whether or not to block access to Accounts in Settings app. */
    private _settingsBlockAccountsPage?: boolean | undefined;
    /** Indicates whether or not to block the user from installing provisioning packages. */
    private _settingsBlockAddProvisioningPackage?: boolean | undefined;
    /** Indicates whether or not to block access to Apps in Settings app. */
    private _settingsBlockAppsPage?: boolean | undefined;
    /** Indicates whether or not to block the user from changing the language settings. */
    private _settingsBlockChangeLanguage?: boolean | undefined;
    /** Indicates whether or not to block the user from changing power and sleep settings. */
    private _settingsBlockChangePowerSleep?: boolean | undefined;
    /** Indicates whether or not to block the user from changing the region settings. */
    private _settingsBlockChangeRegion?: boolean | undefined;
    /** Indicates whether or not to block the user from changing date and time settings. */
    private _settingsBlockChangeSystemTime?: boolean | undefined;
    /** Indicates whether or not to block access to Devices in Settings app. */
    private _settingsBlockDevicesPage?: boolean | undefined;
    /** Indicates whether or not to block access to Ease of Access in Settings app. */
    private _settingsBlockEaseOfAccessPage?: boolean | undefined;
    /** Indicates whether or not to block the user from editing the device name. */
    private _settingsBlockEditDeviceName?: boolean | undefined;
    /** Indicates whether or not to block access to Gaming in Settings app. */
    private _settingsBlockGamingPage?: boolean | undefined;
    /** Indicates whether or not to block access to Network & Internet in Settings app. */
    private _settingsBlockNetworkInternetPage?: boolean | undefined;
    /** Indicates whether or not to block access to Personalization in Settings app. */
    private _settingsBlockPersonalizationPage?: boolean | undefined;
    /** Indicates whether or not to block access to Privacy in Settings app. */
    private _settingsBlockPrivacyPage?: boolean | undefined;
    /** Indicates whether or not to block the runtime configuration agent from removing provisioning packages. */
    private _settingsBlockRemoveProvisioningPackage?: boolean | undefined;
    /** Indicates whether or not to block access to Settings app. */
    private _settingsBlockSettingsApp?: boolean | undefined;
    /** Indicates whether or not to block access to System in Settings app. */
    private _settingsBlockSystemPage?: boolean | undefined;
    /** Indicates whether or not to block access to Time & Language in Settings app. */
    private _settingsBlockTimeLanguagePage?: boolean | undefined;
    /** Indicates whether or not to block access to Update & Security in Settings app. */
    private _settingsBlockUpdateSecurityPage?: boolean | undefined;
    /** Indicates whether or not to block multiple users of the same app to share data. */
    private _sharedUserAppDataAllowed?: boolean | undefined;
    /** Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites. */
    private _smartScreenBlockPromptOverride?: boolean | undefined;
    /** Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files */
    private _smartScreenBlockPromptOverrideForFiles?: boolean | undefined;
    /** This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT Admins to control whether users are allowed to install apps from places other than the Store. */
    private _smartScreenEnableAppInstallControl?: boolean | undefined;
    /** Indicates whether or not to block the user from unpinning apps from taskbar. */
    private _startBlockUnpinningAppsFromTaskbar?: boolean | undefined;
    /** Setting the value of this collapses the app list, removes the app list entirely, or disables the corresponding toggle in the Settings app. Possible values are: userDefined, collapse, remove, disableSettingsApp. */
    private _startMenuAppListVisibility?: WindowsStartMenuAppListVisibilityType | undefined;
    /** Enabling this policy hides the change account setting from appearing in the user tile in the start menu. */
    private _startMenuHideChangeAccountSettings?: boolean | undefined;
    /** Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in the Settings app. */
    private _startMenuHideFrequentlyUsedApps?: boolean | undefined;
    /** Enabling this policy hides hibernate from appearing in the power button in the start menu. */
    private _startMenuHideHibernate?: boolean | undefined;
    /** Enabling this policy hides lock from appearing in the user tile in the start menu. */
    private _startMenuHideLock?: boolean | undefined;
    /** Enabling this policy hides the power button from appearing in the start menu. */
    private _startMenuHidePowerButton?: boolean | undefined;
    /** Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding toggle in the Settings app. */
    private _startMenuHideRecentJumpLists?: boolean | undefined;
    /** Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle in the Settings app. */
    private _startMenuHideRecentlyAddedApps?: boolean | undefined;
    /** Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu. */
    private _startMenuHideRestartOptions?: boolean | undefined;
    /** Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu. */
    private _startMenuHideShutDown?: boolean | undefined;
    /** Enabling this policy hides sign out from appearing in the user tile in the start menu. */
    private _startMenuHideSignOut?: boolean | undefined;
    /** Enabling this policy hides sleep from appearing in the power button in the start menu. */
    private _startMenuHideSleep?: boolean | undefined;
    /** Enabling this policy hides switch account from appearing in the user tile in the start menu. */
    private _startMenuHideSwitchAccount?: boolean | undefined;
    /** Enabling this policy hides the user tile from appearing in the start menu. */
    private _startMenuHideUserTile?: boolean | undefined;
    /** This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is modified. The value should be a UTF-8 Base64 encoded byte array. */
    private _startMenuLayoutEdgeAssetsXml?: string | undefined;
    /** Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format. */
    private _startMenuLayoutXml?: string | undefined;
    /** Allows admins to decide how the Start menu is displayed. Possible values are: userDefined, fullScreen, nonFullScreen. */
    private _startMenuMode?: WindowsStartMenuModeType | undefined;
    /** Enforces the visibility (Show/Hide) of the Documents folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderDocuments?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Downloads folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderDownloads?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the FileExplorer shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderFileExplorer?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the HomeGroup folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderHomeGroup?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Music folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderMusic?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Network folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderNetwork?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the PersonalFolder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderPersonalFolder?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Pictures folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderPictures?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Settings folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderSettings?: VisibilitySetting | undefined;
    /** Enforces the visibility (Show/Hide) of the Videos folder shortcut on the Start menu. Possible values are: notConfigured, hide, show. */
    private _startMenuPinnedFolderVideos?: VisibilitySetting | undefined;
    /** Indicates whether or not to Block the user from using removable storage. */
    private _storageBlockRemovableStorage?: boolean | undefined;
    /** Indicating whether or not to require encryption on a mobile device. */
    private _storageRequireMobileDeviceEncryption?: boolean | undefined;
    /** Indicates whether application data is restricted to the system drive. */
    private _storageRestrictAppDataToSystemVolume?: boolean | undefined;
    /** Indicates whether the installation of applications is restricted to the system drive. */
    private _storageRestrictAppInstallToSystemVolume?: boolean | undefined;
    /** Whether the device is required to connect to the network. */
    private _tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean | undefined;
    /** Indicates whether or not to Block the user from USB connection. */
    private _usbBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from voice recording. */
    private _voiceRecordingBlocked?: boolean | undefined;
    /** Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC */
    private _webRtcBlockLocalhostIpAddress?: boolean | undefined;
    /** Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked. */
    private _wiFiBlockAutomaticConnectHotspots?: boolean | undefined;
    /** Indicates whether or not to Block the user from using Wi-Fi. */
    private _wiFiBlocked?: boolean | undefined;
    /** Indicates whether or not to Block the user from using Wi-Fi manual configuration. */
    private _wiFiBlockManualConfiguration?: boolean | undefined;
    /** Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low frequency. Valid values 1 to 500 */
    private _wiFiScanInterval?: number | undefined;
    /** Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership notifications, Post-OOBE app install and redirect tiles. */
    private _windowsSpotlightBlockConsumerSpecificFeatures?: boolean | undefined;
    /** Allows IT admins to turn off all Windows Spotlight features */
    private _windowsSpotlightBlocked?: boolean | undefined;
    /** Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce users to what is new or changed */
    private _windowsSpotlightBlockOnActionCenter?: boolean | undefined;
    /** Block personalized content in Windows spotlight based on user’s device usage. */
    private _windowsSpotlightBlockTailoredExperiences?: boolean | undefined;
    /** Block third party content delivered via Windows Spotlight */
    private _windowsSpotlightBlockThirdPartyNotifications?: boolean | undefined;
    /** Block Windows Spotlight Windows welcome experience */
    private _windowsSpotlightBlockWelcomeExperience?: boolean | undefined;
    /** Allows IT admins to turn off the popup of Windows Tips. */
    private _windowsSpotlightBlockWindowsTips?: boolean | undefined;
    /** Specifies the type of Spotlight. Possible values are: notConfigured, disabled, enabled. */
    private _windowsSpotlightConfigureOnLockScreen?: WindowsSpotlightEnablementSettings | undefined;
    /** Indicates whether or not to block automatic update of apps from Windows Store. */
    private _windowsStoreBlockAutoUpdate?: boolean | undefined;
    /** Indicates whether or not to Block the user from using the Windows store. */
    private _windowsStoreBlocked?: boolean | undefined;
    /** Indicates whether or not to enable Private Store Only. */
    private _windowsStoreEnablePrivateStoreOnly?: boolean | undefined;
    /** Indicates whether or not to allow other devices from discovering this PC for projection. */
    private _wirelessDisplayBlockProjectionToThisDevice?: boolean | undefined;
    /** Indicates whether or not to allow user input from wireless display receiver. */
    private _wirelessDisplayBlockUserInputFromReceiver?: boolean | undefined;
    /** Indicates whether or not to require a PIN for new devices to initiate pairing. */
    private _wirelessDisplayRequirePinForPairing?: boolean | undefined;
    /**
     * Gets the accountsBlockAddingNonMicrosoftAccountEmail property value. Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account.
     * @returns a boolean
     */
    public get accountsBlockAddingNonMicrosoftAccountEmail() {
        return this._accountsBlockAddingNonMicrosoftAccountEmail;
    };
    /**
     * Sets the accountsBlockAddingNonMicrosoftAccountEmail property value. Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account.
     * @param value Value to set for the accountsBlockAddingNonMicrosoftAccountEmail property.
     */
    public set accountsBlockAddingNonMicrosoftAccountEmail(value: boolean | undefined) {
        this._accountsBlockAddingNonMicrosoftAccountEmail = value;
    };
    /**
     * Gets the antiTheftModeBlocked property value. Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only).
     * @returns a boolean
     */
    public get antiTheftModeBlocked() {
        return this._antiTheftModeBlocked;
    };
    /**
     * Sets the antiTheftModeBlocked property value. Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only).
     * @param value Value to set for the antiTheftModeBlocked property.
     */
    public set antiTheftModeBlocked(value: boolean | undefined) {
        this._antiTheftModeBlocked = value;
    };
    /**
     * Gets the appsAllowTrustedAppsSideloading property value. Indicates whether apps from AppX packages signed with a trusted certificate can be side loaded. Possible values are: notConfigured, blocked, allowed.
     * @returns a stateManagementSetting
     */
    public get appsAllowTrustedAppsSideloading() {
        return this._appsAllowTrustedAppsSideloading;
    };
    /**
     * Sets the appsAllowTrustedAppsSideloading property value. Indicates whether apps from AppX packages signed with a trusted certificate can be side loaded. Possible values are: notConfigured, blocked, allowed.
     * @param value Value to set for the appsAllowTrustedAppsSideloading property.
     */
    public set appsAllowTrustedAppsSideloading(value: StateManagementSetting | undefined) {
        this._appsAllowTrustedAppsSideloading = value;
    };
    /**
     * Gets the appsBlockWindowsStoreOriginatedApps property value. Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were downloaded.
     * @returns a boolean
     */
    public get appsBlockWindowsStoreOriginatedApps() {
        return this._appsBlockWindowsStoreOriginatedApps;
    };
    /**
     * Sets the appsBlockWindowsStoreOriginatedApps property value. Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were downloaded.
     * @param value Value to set for the appsBlockWindowsStoreOriginatedApps property.
     */
    public set appsBlockWindowsStoreOriginatedApps(value: boolean | undefined) {
        this._appsBlockWindowsStoreOriginatedApps = value;
    };
    /**
     * Gets the bluetoothAllowedServices property value. Specify a list of allowed Bluetooth services and profiles in hex formatted strings.
     * @returns a string
     */
    public get bluetoothAllowedServices() {
        return this._bluetoothAllowedServices;
    };
    /**
     * Sets the bluetoothAllowedServices property value. Specify a list of allowed Bluetooth services and profiles in hex formatted strings.
     * @param value Value to set for the bluetoothAllowedServices property.
     */
    public set bluetoothAllowedServices(value: string[] | undefined) {
        this._bluetoothAllowedServices = value;
    };
    /**
     * Gets the bluetoothBlockAdvertising property value. Whether or not to Block the user from using bluetooth advertising.
     * @returns a boolean
     */
    public get bluetoothBlockAdvertising() {
        return this._bluetoothBlockAdvertising;
    };
    /**
     * Sets the bluetoothBlockAdvertising property value. Whether or not to Block the user from using bluetooth advertising.
     * @param value Value to set for the bluetoothBlockAdvertising property.
     */
    public set bluetoothBlockAdvertising(value: boolean | undefined) {
        this._bluetoothBlockAdvertising = value;
    };
    /**
     * Gets the bluetoothBlockDiscoverableMode property value. Whether or not to Block the user from using bluetooth discoverable mode.
     * @returns a boolean
     */
    public get bluetoothBlockDiscoverableMode() {
        return this._bluetoothBlockDiscoverableMode;
    };
    /**
     * Sets the bluetoothBlockDiscoverableMode property value. Whether or not to Block the user from using bluetooth discoverable mode.
     * @param value Value to set for the bluetoothBlockDiscoverableMode property.
     */
    public set bluetoothBlockDiscoverableMode(value: boolean | undefined) {
        this._bluetoothBlockDiscoverableMode = value;
    };
    /**
     * Gets the bluetoothBlocked property value. Whether or not to Block the user from using bluetooth.
     * @returns a boolean
     */
    public get bluetoothBlocked() {
        return this._bluetoothBlocked;
    };
    /**
     * Sets the bluetoothBlocked property value. Whether or not to Block the user from using bluetooth.
     * @param value Value to set for the bluetoothBlocked property.
     */
    public set bluetoothBlocked(value: boolean | undefined) {
        this._bluetoothBlocked = value;
    };
    /**
     * Gets the bluetoothBlockPrePairing property value. Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device.
     * @returns a boolean
     */
    public get bluetoothBlockPrePairing() {
        return this._bluetoothBlockPrePairing;
    };
    /**
     * Sets the bluetoothBlockPrePairing property value. Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device.
     * @param value Value to set for the bluetoothBlockPrePairing property.
     */
    public set bluetoothBlockPrePairing(value: boolean | undefined) {
        this._bluetoothBlockPrePairing = value;
    };
    /**
     * Gets the cameraBlocked property value. Whether or not to Block the user from accessing the camera of the device.
     * @returns a boolean
     */
    public get cameraBlocked() {
        return this._cameraBlocked;
    };
    /**
     * Sets the cameraBlocked property value. Whether or not to Block the user from accessing the camera of the device.
     * @param value Value to set for the cameraBlocked property.
     */
    public set cameraBlocked(value: boolean | undefined) {
        this._cameraBlocked = value;
    };
    /**
     * Gets the cellularBlockDataWhenRoaming property value. Whether or not to Block the user from using data over cellular while roaming.
     * @returns a boolean
     */
    public get cellularBlockDataWhenRoaming() {
        return this._cellularBlockDataWhenRoaming;
    };
    /**
     * Sets the cellularBlockDataWhenRoaming property value. Whether or not to Block the user from using data over cellular while roaming.
     * @param value Value to set for the cellularBlockDataWhenRoaming property.
     */
    public set cellularBlockDataWhenRoaming(value: boolean | undefined) {
        this._cellularBlockDataWhenRoaming = value;
    };
    /**
     * Gets the cellularBlockVpn property value. Whether or not to Block the user from using VPN over cellular.
     * @returns a boolean
     */
    public get cellularBlockVpn() {
        return this._cellularBlockVpn;
    };
    /**
     * Sets the cellularBlockVpn property value. Whether or not to Block the user from using VPN over cellular.
     * @param value Value to set for the cellularBlockVpn property.
     */
    public set cellularBlockVpn(value: boolean | undefined) {
        this._cellularBlockVpn = value;
    };
    /**
     * Gets the cellularBlockVpnWhenRoaming property value. Whether or not to Block the user from using VPN when roaming over cellular.
     * @returns a boolean
     */
    public get cellularBlockVpnWhenRoaming() {
        return this._cellularBlockVpnWhenRoaming;
    };
    /**
     * Sets the cellularBlockVpnWhenRoaming property value. Whether or not to Block the user from using VPN when roaming over cellular.
     * @param value Value to set for the cellularBlockVpnWhenRoaming property.
     */
    public set cellularBlockVpnWhenRoaming(value: boolean | undefined) {
        this._cellularBlockVpnWhenRoaming = value;
    };
    /**
     * Gets the certificatesBlockManualRootCertificateInstallation property value. Whether or not to Block the user from doing manual root certificate installation.
     * @returns a boolean
     */
    public get certificatesBlockManualRootCertificateInstallation() {
        return this._certificatesBlockManualRootCertificateInstallation;
    };
    /**
     * Sets the certificatesBlockManualRootCertificateInstallation property value. Whether or not to Block the user from doing manual root certificate installation.
     * @param value Value to set for the certificatesBlockManualRootCertificateInstallation property.
     */
    public set certificatesBlockManualRootCertificateInstallation(value: boolean | undefined) {
        this._certificatesBlockManualRootCertificateInstallation = value;
    };
    /**
     * Gets the connectedDevicesServiceBlocked property value. Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote messaging, remote app sessions and other cross-device experiences.
     * @returns a boolean
     */
    public get connectedDevicesServiceBlocked() {
        return this._connectedDevicesServiceBlocked;
    };
    /**
     * Sets the connectedDevicesServiceBlocked property value. Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote messaging, remote app sessions and other cross-device experiences.
     * @param value Value to set for the connectedDevicesServiceBlocked property.
     */
    public set connectedDevicesServiceBlocked(value: boolean | undefined) {
        this._connectedDevicesServiceBlocked = value;
    };
    /**
     * Instantiates a new Windows10GeneralConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the copyPasteBlocked property value. Whether or not to Block the user from using copy paste.
     * @returns a boolean
     */
    public get copyPasteBlocked() {
        return this._copyPasteBlocked;
    };
    /**
     * Sets the copyPasteBlocked property value. Whether or not to Block the user from using copy paste.
     * @param value Value to set for the copyPasteBlocked property.
     */
    public set copyPasteBlocked(value: boolean | undefined) {
        this._copyPasteBlocked = value;
    };
    /**
     * Gets the cortanaBlocked property value. Whether or not to Block the user from using Cortana.
     * @returns a boolean
     */
    public get cortanaBlocked() {
        return this._cortanaBlocked;
    };
    /**
     * Sets the cortanaBlocked property value. Whether or not to Block the user from using Cortana.
     * @param value Value to set for the cortanaBlocked property.
     */
    public set cortanaBlocked(value: boolean | undefined) {
        this._cortanaBlocked = value;
    };
    /**
     * Gets the defenderBlockEndUserAccess property value. Whether or not to block end user access to Defender.
     * @returns a boolean
     */
    public get defenderBlockEndUserAccess() {
        return this._defenderBlockEndUserAccess;
    };
    /**
     * Sets the defenderBlockEndUserAccess property value. Whether or not to block end user access to Defender.
     * @param value Value to set for the defenderBlockEndUserAccess property.
     */
    public set defenderBlockEndUserAccess(value: boolean | undefined) {
        this._defenderBlockEndUserAccess = value;
    };
    /**
     * Gets the defenderCloudBlockLevel property value. Specifies the level of cloud-delivered protection. Possible values are: notConfigured, high, highPlus, zeroTolerance.
     * @returns a defenderCloudBlockLevelType
     */
    public get defenderCloudBlockLevel() {
        return this._defenderCloudBlockLevel;
    };
    /**
     * Sets the defenderCloudBlockLevel property value. Specifies the level of cloud-delivered protection. Possible values are: notConfigured, high, highPlus, zeroTolerance.
     * @param value Value to set for the defenderCloudBlockLevel property.
     */
    public set defenderCloudBlockLevel(value: DefenderCloudBlockLevelType | undefined) {
        this._defenderCloudBlockLevel = value;
    };
    /**
     * Gets the defenderDaysBeforeDeletingQuarantinedMalware property value. Number of days before deleting quarantined malware. Valid values 0 to 90
     * @returns a integer
     */
    public get defenderDaysBeforeDeletingQuarantinedMalware() {
        return this._defenderDaysBeforeDeletingQuarantinedMalware;
    };
    /**
     * Sets the defenderDaysBeforeDeletingQuarantinedMalware property value. Number of days before deleting quarantined malware. Valid values 0 to 90
     * @param value Value to set for the defenderDaysBeforeDeletingQuarantinedMalware property.
     */
    public set defenderDaysBeforeDeletingQuarantinedMalware(value: number | undefined) {
        this._defenderDaysBeforeDeletingQuarantinedMalware = value;
    };
    /**
     * Gets the defenderDetectedMalwareActions property value. Gets or sets Defender’s actions to take on detected Malware per threat level.
     * @returns a defenderDetectedMalwareActions
     */
    public get defenderDetectedMalwareActions() {
        return this._defenderDetectedMalwareActions;
    };
    /**
     * Sets the defenderDetectedMalwareActions property value. Gets or sets Defender’s actions to take on detected Malware per threat level.
     * @param value Value to set for the defenderDetectedMalwareActions property.
     */
    public set defenderDetectedMalwareActions(value: DefenderDetectedMalwareActions | undefined) {
        this._defenderDetectedMalwareActions = value;
    };
    /**
     * Gets the defenderFileExtensionsToExclude property value. File extensions to exclude from scans and real time protection.
     * @returns a string
     */
    public get defenderFileExtensionsToExclude() {
        return this._defenderFileExtensionsToExclude;
    };
    /**
     * Sets the defenderFileExtensionsToExclude property value. File extensions to exclude from scans and real time protection.
     * @param value Value to set for the defenderFileExtensionsToExclude property.
     */
    public set defenderFileExtensionsToExclude(value: string[] | undefined) {
        this._defenderFileExtensionsToExclude = value;
    };
    /**
     * Gets the defenderFilesAndFoldersToExclude property value. Files and folder to exclude from scans and real time protection.
     * @returns a string
     */
    public get defenderFilesAndFoldersToExclude() {
        return this._defenderFilesAndFoldersToExclude;
    };
    /**
     * Sets the defenderFilesAndFoldersToExclude property value. Files and folder to exclude from scans and real time protection.
     * @param value Value to set for the defenderFilesAndFoldersToExclude property.
     */
    public set defenderFilesAndFoldersToExclude(value: string[] | undefined) {
        this._defenderFilesAndFoldersToExclude = value;
    };
    /**
     * Gets the defenderMonitorFileActivity property value. Value for monitoring file activity. Possible values are: userDefined, disable, monitorAllFiles, monitorIncomingFilesOnly, monitorOutgoingFilesOnly.
     * @returns a defenderMonitorFileActivity
     */
    public get defenderMonitorFileActivity() {
        return this._defenderMonitorFileActivity;
    };
    /**
     * Sets the defenderMonitorFileActivity property value. Value for monitoring file activity. Possible values are: userDefined, disable, monitorAllFiles, monitorIncomingFilesOnly, monitorOutgoingFilesOnly.
     * @param value Value to set for the defenderMonitorFileActivity property.
     */
    public set defenderMonitorFileActivity(value: DefenderMonitorFileActivity | undefined) {
        this._defenderMonitorFileActivity = value;
    };
    /**
     * Gets the defenderProcessesToExclude property value. Processes to exclude from scans and real time protection.
     * @returns a string
     */
    public get defenderProcessesToExclude() {
        return this._defenderProcessesToExclude;
    };
    /**
     * Sets the defenderProcessesToExclude property value. Processes to exclude from scans and real time protection.
     * @param value Value to set for the defenderProcessesToExclude property.
     */
    public set defenderProcessesToExclude(value: string[] | undefined) {
        this._defenderProcessesToExclude = value;
    };
    /**
     * Gets the defenderPromptForSampleSubmission property value. The configuration for how to prompt user for sample submission. Possible values are: userDefined, alwaysPrompt, promptBeforeSendingPersonalData, neverSendData, sendAllDataWithoutPrompting.
     * @returns a defenderPromptForSampleSubmission
     */
    public get defenderPromptForSampleSubmission() {
        return this._defenderPromptForSampleSubmission;
    };
    /**
     * Sets the defenderPromptForSampleSubmission property value. The configuration for how to prompt user for sample submission. Possible values are: userDefined, alwaysPrompt, promptBeforeSendingPersonalData, neverSendData, sendAllDataWithoutPrompting.
     * @param value Value to set for the defenderPromptForSampleSubmission property.
     */
    public set defenderPromptForSampleSubmission(value: DefenderPromptForSampleSubmission | undefined) {
        this._defenderPromptForSampleSubmission = value;
    };
    /**
     * Gets the defenderRequireBehaviorMonitoring property value. Indicates whether or not to require behavior monitoring.
     * @returns a boolean
     */
    public get defenderRequireBehaviorMonitoring() {
        return this._defenderRequireBehaviorMonitoring;
    };
    /**
     * Sets the defenderRequireBehaviorMonitoring property value. Indicates whether or not to require behavior monitoring.
     * @param value Value to set for the defenderRequireBehaviorMonitoring property.
     */
    public set defenderRequireBehaviorMonitoring(value: boolean | undefined) {
        this._defenderRequireBehaviorMonitoring = value;
    };
    /**
     * Gets the defenderRequireCloudProtection property value. Indicates whether or not to require cloud protection.
     * @returns a boolean
     */
    public get defenderRequireCloudProtection() {
        return this._defenderRequireCloudProtection;
    };
    /**
     * Sets the defenderRequireCloudProtection property value. Indicates whether or not to require cloud protection.
     * @param value Value to set for the defenderRequireCloudProtection property.
     */
    public set defenderRequireCloudProtection(value: boolean | undefined) {
        this._defenderRequireCloudProtection = value;
    };
    /**
     * Gets the defenderRequireNetworkInspectionSystem property value. Indicates whether or not to require network inspection system.
     * @returns a boolean
     */
    public get defenderRequireNetworkInspectionSystem() {
        return this._defenderRequireNetworkInspectionSystem;
    };
    /**
     * Sets the defenderRequireNetworkInspectionSystem property value. Indicates whether or not to require network inspection system.
     * @param value Value to set for the defenderRequireNetworkInspectionSystem property.
     */
    public set defenderRequireNetworkInspectionSystem(value: boolean | undefined) {
        this._defenderRequireNetworkInspectionSystem = value;
    };
    /**
     * Gets the defenderRequireRealTimeMonitoring property value. Indicates whether or not to require real time monitoring.
     * @returns a boolean
     */
    public get defenderRequireRealTimeMonitoring() {
        return this._defenderRequireRealTimeMonitoring;
    };
    /**
     * Sets the defenderRequireRealTimeMonitoring property value. Indicates whether or not to require real time monitoring.
     * @param value Value to set for the defenderRequireRealTimeMonitoring property.
     */
    public set defenderRequireRealTimeMonitoring(value: boolean | undefined) {
        this._defenderRequireRealTimeMonitoring = value;
    };
    /**
     * Gets the defenderScanArchiveFiles property value. Indicates whether or not to scan archive files.
     * @returns a boolean
     */
    public get defenderScanArchiveFiles() {
        return this._defenderScanArchiveFiles;
    };
    /**
     * Sets the defenderScanArchiveFiles property value. Indicates whether or not to scan archive files.
     * @param value Value to set for the defenderScanArchiveFiles property.
     */
    public set defenderScanArchiveFiles(value: boolean | undefined) {
        this._defenderScanArchiveFiles = value;
    };
    /**
     * Gets the defenderScanDownloads property value. Indicates whether or not to scan downloads.
     * @returns a boolean
     */
    public get defenderScanDownloads() {
        return this._defenderScanDownloads;
    };
    /**
     * Sets the defenderScanDownloads property value. Indicates whether or not to scan downloads.
     * @param value Value to set for the defenderScanDownloads property.
     */
    public set defenderScanDownloads(value: boolean | undefined) {
        this._defenderScanDownloads = value;
    };
    /**
     * Gets the defenderScanIncomingMail property value. Indicates whether or not to scan incoming mail messages.
     * @returns a boolean
     */
    public get defenderScanIncomingMail() {
        return this._defenderScanIncomingMail;
    };
    /**
     * Sets the defenderScanIncomingMail property value. Indicates whether or not to scan incoming mail messages.
     * @param value Value to set for the defenderScanIncomingMail property.
     */
    public set defenderScanIncomingMail(value: boolean | undefined) {
        this._defenderScanIncomingMail = value;
    };
    /**
     * Gets the defenderScanMappedNetworkDrivesDuringFullScan property value. Indicates whether or not to scan mapped network drives during full scan.
     * @returns a boolean
     */
    public get defenderScanMappedNetworkDrivesDuringFullScan() {
        return this._defenderScanMappedNetworkDrivesDuringFullScan;
    };
    /**
     * Sets the defenderScanMappedNetworkDrivesDuringFullScan property value. Indicates whether or not to scan mapped network drives during full scan.
     * @param value Value to set for the defenderScanMappedNetworkDrivesDuringFullScan property.
     */
    public set defenderScanMappedNetworkDrivesDuringFullScan(value: boolean | undefined) {
        this._defenderScanMappedNetworkDrivesDuringFullScan = value;
    };
    /**
     * Gets the defenderScanMaxCpu property value. Max CPU usage percentage during scan. Valid values 0 to 100
     * @returns a integer
     */
    public get defenderScanMaxCpu() {
        return this._defenderScanMaxCpu;
    };
    /**
     * Sets the defenderScanMaxCpu property value. Max CPU usage percentage during scan. Valid values 0 to 100
     * @param value Value to set for the defenderScanMaxCpu property.
     */
    public set defenderScanMaxCpu(value: number | undefined) {
        this._defenderScanMaxCpu = value;
    };
    /**
     * Gets the defenderScanNetworkFiles property value. Indicates whether or not to scan files opened from a network folder.
     * @returns a boolean
     */
    public get defenderScanNetworkFiles() {
        return this._defenderScanNetworkFiles;
    };
    /**
     * Sets the defenderScanNetworkFiles property value. Indicates whether or not to scan files opened from a network folder.
     * @param value Value to set for the defenderScanNetworkFiles property.
     */
    public set defenderScanNetworkFiles(value: boolean | undefined) {
        this._defenderScanNetworkFiles = value;
    };
    /**
     * Gets the defenderScanRemovableDrivesDuringFullScan property value. Indicates whether or not to scan removable drives during full scan.
     * @returns a boolean
     */
    public get defenderScanRemovableDrivesDuringFullScan() {
        return this._defenderScanRemovableDrivesDuringFullScan;
    };
    /**
     * Sets the defenderScanRemovableDrivesDuringFullScan property value. Indicates whether or not to scan removable drives during full scan.
     * @param value Value to set for the defenderScanRemovableDrivesDuringFullScan property.
     */
    public set defenderScanRemovableDrivesDuringFullScan(value: boolean | undefined) {
        this._defenderScanRemovableDrivesDuringFullScan = value;
    };
    /**
     * Gets the defenderScanScriptsLoadedInInternetExplorer property value. Indicates whether or not to scan scripts loaded in Internet Explorer browser.
     * @returns a boolean
     */
    public get defenderScanScriptsLoadedInInternetExplorer() {
        return this._defenderScanScriptsLoadedInInternetExplorer;
    };
    /**
     * Sets the defenderScanScriptsLoadedInInternetExplorer property value. Indicates whether or not to scan scripts loaded in Internet Explorer browser.
     * @param value Value to set for the defenderScanScriptsLoadedInInternetExplorer property.
     */
    public set defenderScanScriptsLoadedInInternetExplorer(value: boolean | undefined) {
        this._defenderScanScriptsLoadedInInternetExplorer = value;
    };
    /**
     * Gets the defenderScanType property value. The defender system scan type. Possible values are: userDefined, disabled, quick, full.
     * @returns a defenderScanType
     */
    public get defenderScanType() {
        return this._defenderScanType;
    };
    /**
     * Sets the defenderScanType property value. The defender system scan type. Possible values are: userDefined, disabled, quick, full.
     * @param value Value to set for the defenderScanType property.
     */
    public set defenderScanType(value: DefenderScanType | undefined) {
        this._defenderScanType = value;
    };
    /**
     * Gets the defenderScheduledQuickScanTime property value. The time to perform a daily quick scan.
     * @returns a TimeOnly
     */
    public get defenderScheduledQuickScanTime() {
        return this._defenderScheduledQuickScanTime;
    };
    /**
     * Sets the defenderScheduledQuickScanTime property value. The time to perform a daily quick scan.
     * @param value Value to set for the defenderScheduledQuickScanTime property.
     */
    public set defenderScheduledQuickScanTime(value: TimeOnly | undefined) {
        this._defenderScheduledQuickScanTime = value;
    };
    /**
     * Gets the defenderScheduledScanTime property value. The defender time for the system scan.
     * @returns a TimeOnly
     */
    public get defenderScheduledScanTime() {
        return this._defenderScheduledScanTime;
    };
    /**
     * Sets the defenderScheduledScanTime property value. The defender time for the system scan.
     * @param value Value to set for the defenderScheduledScanTime property.
     */
    public set defenderScheduledScanTime(value: TimeOnly | undefined) {
        this._defenderScheduledScanTime = value;
    };
    /**
     * Gets the defenderSignatureUpdateIntervalInHours property value. The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24
     * @returns a integer
     */
    public get defenderSignatureUpdateIntervalInHours() {
        return this._defenderSignatureUpdateIntervalInHours;
    };
    /**
     * Sets the defenderSignatureUpdateIntervalInHours property value. The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24
     * @param value Value to set for the defenderSignatureUpdateIntervalInHours property.
     */
    public set defenderSignatureUpdateIntervalInHours(value: number | undefined) {
        this._defenderSignatureUpdateIntervalInHours = value;
    };
    /**
     * Gets the defenderSystemScanSchedule property value. Defender day of the week for the system scan. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan.
     * @returns a weeklySchedule
     */
    public get defenderSystemScanSchedule() {
        return this._defenderSystemScanSchedule;
    };
    /**
     * Sets the defenderSystemScanSchedule property value. Defender day of the week for the system scan. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan.
     * @param value Value to set for the defenderSystemScanSchedule property.
     */
    public set defenderSystemScanSchedule(value: WeeklySchedule | undefined) {
        this._defenderSystemScanSchedule = value;
    };
    /**
     * Gets the developerUnlockSetting property value. Indicates whether or not to allow developer unlock. Possible values are: notConfigured, blocked, allowed.
     * @returns a stateManagementSetting
     */
    public get developerUnlockSetting() {
        return this._developerUnlockSetting;
    };
    /**
     * Sets the developerUnlockSetting property value. Indicates whether or not to allow developer unlock. Possible values are: notConfigured, blocked, allowed.
     * @param value Value to set for the developerUnlockSetting property.
     */
    public set developerUnlockSetting(value: StateManagementSetting | undefined) {
        this._developerUnlockSetting = value;
    };
    /**
     * Gets the deviceManagementBlockFactoryResetOnMobile property value. Indicates whether or not to Block the user from resetting their phone.
     * @returns a boolean
     */
    public get deviceManagementBlockFactoryResetOnMobile() {
        return this._deviceManagementBlockFactoryResetOnMobile;
    };
    /**
     * Sets the deviceManagementBlockFactoryResetOnMobile property value. Indicates whether or not to Block the user from resetting their phone.
     * @param value Value to set for the deviceManagementBlockFactoryResetOnMobile property.
     */
    public set deviceManagementBlockFactoryResetOnMobile(value: boolean | undefined) {
        this._deviceManagementBlockFactoryResetOnMobile = value;
    };
    /**
     * Gets the deviceManagementBlockManualUnenroll property value. Indicates whether or not to Block the user from doing manual un-enrollment from device management.
     * @returns a boolean
     */
    public get deviceManagementBlockManualUnenroll() {
        return this._deviceManagementBlockManualUnenroll;
    };
    /**
     * Sets the deviceManagementBlockManualUnenroll property value. Indicates whether or not to Block the user from doing manual un-enrollment from device management.
     * @param value Value to set for the deviceManagementBlockManualUnenroll property.
     */
    public set deviceManagementBlockManualUnenroll(value: boolean | undefined) {
        this._deviceManagementBlockManualUnenroll = value;
    };
    /**
     * Gets the diagnosticsDataSubmissionMode property value. Gets or sets a value allowing the device to send diagnostic and usage telemetry data, such as Watson. Possible values are: userDefined, none, basic, enhanced, full.
     * @returns a diagnosticDataSubmissionMode
     */
    public get diagnosticsDataSubmissionMode() {
        return this._diagnosticsDataSubmissionMode;
    };
    /**
     * Sets the diagnosticsDataSubmissionMode property value. Gets or sets a value allowing the device to send diagnostic and usage telemetry data, such as Watson. Possible values are: userDefined, none, basic, enhanced, full.
     * @param value Value to set for the diagnosticsDataSubmissionMode property.
     */
    public set diagnosticsDataSubmissionMode(value: DiagnosticDataSubmissionMode | undefined) {
        this._diagnosticsDataSubmissionMode = value;
    };
    /**
     * Gets the edgeAllowStartPagesModification property value. Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see by default when they open Edge.
     * @returns a boolean
     */
    public get edgeAllowStartPagesModification() {
        return this._edgeAllowStartPagesModification;
    };
    /**
     * Sets the edgeAllowStartPagesModification property value. Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see by default when they open Edge.
     * @param value Value to set for the edgeAllowStartPagesModification property.
     */
    public set edgeAllowStartPagesModification(value: boolean | undefined) {
        this._edgeAllowStartPagesModification = value;
    };
    /**
     * Gets the edgeBlockAccessToAboutFlags property value. Indicates whether or not to prevent access to about flags on Edge browser.
     * @returns a boolean
     */
    public get edgeBlockAccessToAboutFlags() {
        return this._edgeBlockAccessToAboutFlags;
    };
    /**
     * Sets the edgeBlockAccessToAboutFlags property value. Indicates whether or not to prevent access to about flags on Edge browser.
     * @param value Value to set for the edgeBlockAccessToAboutFlags property.
     */
    public set edgeBlockAccessToAboutFlags(value: boolean | undefined) {
        this._edgeBlockAccessToAboutFlags = value;
    };
    /**
     * Gets the edgeBlockAddressBarDropdown property value. Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections from Microsoft Edge to Microsoft services.
     * @returns a boolean
     */
    public get edgeBlockAddressBarDropdown() {
        return this._edgeBlockAddressBarDropdown;
    };
    /**
     * Sets the edgeBlockAddressBarDropdown property value. Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections from Microsoft Edge to Microsoft services.
     * @param value Value to set for the edgeBlockAddressBarDropdown property.
     */
    public set edgeBlockAddressBarDropdown(value: boolean | undefined) {
        this._edgeBlockAddressBarDropdown = value;
    };
    /**
     * Gets the edgeBlockAutofill property value. Indicates whether or not to block auto fill.
     * @returns a boolean
     */
    public get edgeBlockAutofill() {
        return this._edgeBlockAutofill;
    };
    /**
     * Sets the edgeBlockAutofill property value. Indicates whether or not to block auto fill.
     * @param value Value to set for the edgeBlockAutofill property.
     */
    public set edgeBlockAutofill(value: boolean | undefined) {
        this._edgeBlockAutofill = value;
    };
    /**
     * Gets the edgeBlockCompatibilityList property value. Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with known compatibility issues.
     * @returns a boolean
     */
    public get edgeBlockCompatibilityList() {
        return this._edgeBlockCompatibilityList;
    };
    /**
     * Sets the edgeBlockCompatibilityList property value. Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with known compatibility issues.
     * @param value Value to set for the edgeBlockCompatibilityList property.
     */
    public set edgeBlockCompatibilityList(value: boolean | undefined) {
        this._edgeBlockCompatibilityList = value;
    };
    /**
     * Gets the edgeBlockDeveloperTools property value. Indicates whether or not to block developer tools in the Edge browser.
     * @returns a boolean
     */
    public get edgeBlockDeveloperTools() {
        return this._edgeBlockDeveloperTools;
    };
    /**
     * Sets the edgeBlockDeveloperTools property value. Indicates whether or not to block developer tools in the Edge browser.
     * @param value Value to set for the edgeBlockDeveloperTools property.
     */
    public set edgeBlockDeveloperTools(value: boolean | undefined) {
        this._edgeBlockDeveloperTools = value;
    };
    /**
     * Gets the edgeBlocked property value. Indicates whether or not to Block the user from using the Edge browser.
     * @returns a boolean
     */
    public get edgeBlocked() {
        return this._edgeBlocked;
    };
    /**
     * Sets the edgeBlocked property value. Indicates whether or not to Block the user from using the Edge browser.
     * @param value Value to set for the edgeBlocked property.
     */
    public set edgeBlocked(value: boolean | undefined) {
        this._edgeBlocked = value;
    };
    /**
     * Gets the edgeBlockExtensions property value. Indicates whether or not to block extensions in the Edge browser.
     * @returns a boolean
     */
    public get edgeBlockExtensions() {
        return this._edgeBlockExtensions;
    };
    /**
     * Sets the edgeBlockExtensions property value. Indicates whether or not to block extensions in the Edge browser.
     * @param value Value to set for the edgeBlockExtensions property.
     */
    public set edgeBlockExtensions(value: boolean | undefined) {
        this._edgeBlockExtensions = value;
    };
    /**
     * Gets the edgeBlockInPrivateBrowsing property value. Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser.
     * @returns a boolean
     */
    public get edgeBlockInPrivateBrowsing() {
        return this._edgeBlockInPrivateBrowsing;
    };
    /**
     * Sets the edgeBlockInPrivateBrowsing property value. Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser.
     * @param value Value to set for the edgeBlockInPrivateBrowsing property.
     */
    public set edgeBlockInPrivateBrowsing(value: boolean | undefined) {
        this._edgeBlockInPrivateBrowsing = value;
    };
    /**
     * Gets the edgeBlockJavaScript property value. Indicates whether or not to Block the user from using JavaScript.
     * @returns a boolean
     */
    public get edgeBlockJavaScript() {
        return this._edgeBlockJavaScript;
    };
    /**
     * Sets the edgeBlockJavaScript property value. Indicates whether or not to Block the user from using JavaScript.
     * @param value Value to set for the edgeBlockJavaScript property.
     */
    public set edgeBlockJavaScript(value: boolean | undefined) {
        this._edgeBlockJavaScript = value;
    };
    /**
     * Gets the edgeBlockLiveTileDataCollection property value. Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft Edge.
     * @returns a boolean
     */
    public get edgeBlockLiveTileDataCollection() {
        return this._edgeBlockLiveTileDataCollection;
    };
    /**
     * Sets the edgeBlockLiveTileDataCollection property value. Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft Edge.
     * @param value Value to set for the edgeBlockLiveTileDataCollection property.
     */
    public set edgeBlockLiveTileDataCollection(value: boolean | undefined) {
        this._edgeBlockLiveTileDataCollection = value;
    };
    /**
     * Gets the edgeBlockPasswordManager property value. Indicates whether or not to Block password manager.
     * @returns a boolean
     */
    public get edgeBlockPasswordManager() {
        return this._edgeBlockPasswordManager;
    };
    /**
     * Sets the edgeBlockPasswordManager property value. Indicates whether or not to Block password manager.
     * @param value Value to set for the edgeBlockPasswordManager property.
     */
    public set edgeBlockPasswordManager(value: boolean | undefined) {
        this._edgeBlockPasswordManager = value;
    };
    /**
     * Gets the edgeBlockPopups property value. Indicates whether or not to block popups.
     * @returns a boolean
     */
    public get edgeBlockPopups() {
        return this._edgeBlockPopups;
    };
    /**
     * Sets the edgeBlockPopups property value. Indicates whether or not to block popups.
     * @param value Value to set for the edgeBlockPopups property.
     */
    public set edgeBlockPopups(value: boolean | undefined) {
        this._edgeBlockPopups = value;
    };
    /**
     * Gets the edgeBlockSearchSuggestions property value. Indicates whether or not to block the user from using the search suggestions in the address bar.
     * @returns a boolean
     */
    public get edgeBlockSearchSuggestions() {
        return this._edgeBlockSearchSuggestions;
    };
    /**
     * Sets the edgeBlockSearchSuggestions property value. Indicates whether or not to block the user from using the search suggestions in the address bar.
     * @param value Value to set for the edgeBlockSearchSuggestions property.
     */
    public set edgeBlockSearchSuggestions(value: boolean | undefined) {
        this._edgeBlockSearchSuggestions = value;
    };
    /**
     * Gets the edgeBlockSendingDoNotTrackHeader property value. Indicates whether or not to Block the user from sending the do not track header.
     * @returns a boolean
     */
    public get edgeBlockSendingDoNotTrackHeader() {
        return this._edgeBlockSendingDoNotTrackHeader;
    };
    /**
     * Sets the edgeBlockSendingDoNotTrackHeader property value. Indicates whether or not to Block the user from sending the do not track header.
     * @param value Value to set for the edgeBlockSendingDoNotTrackHeader property.
     */
    public set edgeBlockSendingDoNotTrackHeader(value: boolean | undefined) {
        this._edgeBlockSendingDoNotTrackHeader = value;
    };
    /**
     * Gets the edgeBlockSendingIntranetTrafficToInternetExplorer property value. Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead.
     * @returns a boolean
     */
    public get edgeBlockSendingIntranetTrafficToInternetExplorer() {
        return this._edgeBlockSendingIntranetTrafficToInternetExplorer;
    };
    /**
     * Sets the edgeBlockSendingIntranetTrafficToInternetExplorer property value. Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead.
     * @param value Value to set for the edgeBlockSendingIntranetTrafficToInternetExplorer property.
     */
    public set edgeBlockSendingIntranetTrafficToInternetExplorer(value: boolean | undefined) {
        this._edgeBlockSendingIntranetTrafficToInternetExplorer = value;
    };
    /**
     * Gets the edgeClearBrowsingDataOnExit property value. Clear browsing data on exiting Microsoft Edge.
     * @returns a boolean
     */
    public get edgeClearBrowsingDataOnExit() {
        return this._edgeClearBrowsingDataOnExit;
    };
    /**
     * Sets the edgeClearBrowsingDataOnExit property value. Clear browsing data on exiting Microsoft Edge.
     * @param value Value to set for the edgeClearBrowsingDataOnExit property.
     */
    public set edgeClearBrowsingDataOnExit(value: boolean | undefined) {
        this._edgeClearBrowsingDataOnExit = value;
    };
    /**
     * Gets the edgeCookiePolicy property value. Indicates which cookies to block in the Edge browser. Possible values are: userDefined, allow, blockThirdParty, blockAll.
     * @returns a edgeCookiePolicy
     */
    public get edgeCookiePolicy() {
        return this._edgeCookiePolicy;
    };
    /**
     * Sets the edgeCookiePolicy property value. Indicates which cookies to block in the Edge browser. Possible values are: userDefined, allow, blockThirdParty, blockAll.
     * @param value Value to set for the edgeCookiePolicy property.
     */
    public set edgeCookiePolicy(value: EdgeCookiePolicy | undefined) {
        this._edgeCookiePolicy = value;
    };
    /**
     * Gets the edgeDisableFirstRunPage property value. Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those enrolled in zero emissions configurations, to block this page.
     * @returns a boolean
     */
    public get edgeDisableFirstRunPage() {
        return this._edgeDisableFirstRunPage;
    };
    /**
     * Sets the edgeDisableFirstRunPage property value. Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those enrolled in zero emissions configurations, to block this page.
     * @param value Value to set for the edgeDisableFirstRunPage property.
     */
    public set edgeDisableFirstRunPage(value: boolean | undefined) {
        this._edgeDisableFirstRunPage = value;
    };
    /**
     * Gets the edgeEnterpriseModeSiteListLocation property value. Indicates the enterprise mode site list location. Could be a local file, local network or http location.
     * @returns a string
     */
    public get edgeEnterpriseModeSiteListLocation() {
        return this._edgeEnterpriseModeSiteListLocation;
    };
    /**
     * Sets the edgeEnterpriseModeSiteListLocation property value. Indicates the enterprise mode site list location. Could be a local file, local network or http location.
     * @param value Value to set for the edgeEnterpriseModeSiteListLocation property.
     */
    public set edgeEnterpriseModeSiteListLocation(value: string | undefined) {
        this._edgeEnterpriseModeSiteListLocation = value;
    };
    /**
     * Gets the edgeFirstRunUrl property value. The first run URL for when Edge browser is opened for the first time.
     * @returns a string
     */
    public get edgeFirstRunUrl() {
        return this._edgeFirstRunUrl;
    };
    /**
     * Sets the edgeFirstRunUrl property value. The first run URL for when Edge browser is opened for the first time.
     * @param value Value to set for the edgeFirstRunUrl property.
     */
    public set edgeFirstRunUrl(value: string | undefined) {
        this._edgeFirstRunUrl = value;
    };
    /**
     * Gets the edgeHomepageUrls property value. The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser.
     * @returns a string
     */
    public get edgeHomepageUrls() {
        return this._edgeHomepageUrls;
    };
    /**
     * Sets the edgeHomepageUrls property value. The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser.
     * @param value Value to set for the edgeHomepageUrls property.
     */
    public set edgeHomepageUrls(value: string[] | undefined) {
        this._edgeHomepageUrls = value;
    };
    /**
     * Gets the edgeRequireSmartScreen property value. Indicates whether or not to Require the user to use the smart screen filter.
     * @returns a boolean
     */
    public get edgeRequireSmartScreen() {
        return this._edgeRequireSmartScreen;
    };
    /**
     * Sets the edgeRequireSmartScreen property value. Indicates whether or not to Require the user to use the smart screen filter.
     * @param value Value to set for the edgeRequireSmartScreen property.
     */
    public set edgeRequireSmartScreen(value: boolean | undefined) {
        this._edgeRequireSmartScreen = value;
    };
    /**
     * Gets the edgeSearchEngine property value. Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set.
     * @returns a edgeSearchEngineBase
     */
    public get edgeSearchEngine() {
        return this._edgeSearchEngine;
    };
    /**
     * Sets the edgeSearchEngine property value. Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set.
     * @param value Value to set for the edgeSearchEngine property.
     */
    public set edgeSearchEngine(value: EdgeSearchEngineBase | undefined) {
        this._edgeSearchEngine = value;
    };
    /**
     * Gets the edgeSendIntranetTrafficToInternetExplorer property value. Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer.
     * @returns a boolean
     */
    public get edgeSendIntranetTrafficToInternetExplorer() {
        return this._edgeSendIntranetTrafficToInternetExplorer;
    };
    /**
     * Sets the edgeSendIntranetTrafficToInternetExplorer property value. Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer.
     * @param value Value to set for the edgeSendIntranetTrafficToInternetExplorer property.
     */
    public set edgeSendIntranetTrafficToInternetExplorer(value: boolean | undefined) {
        this._edgeSendIntranetTrafficToInternetExplorer = value;
    };
    /**
     * Gets the edgeSyncFavoritesWithInternetExplorer property value. Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order changes to favorites are shared between browsers.
     * @returns a boolean
     */
    public get edgeSyncFavoritesWithInternetExplorer() {
        return this._edgeSyncFavoritesWithInternetExplorer;
    };
    /**
     * Sets the edgeSyncFavoritesWithInternetExplorer property value. Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order changes to favorites are shared between browsers.
     * @param value Value to set for the edgeSyncFavoritesWithInternetExplorer property.
     */
    public set edgeSyncFavoritesWithInternetExplorer(value: boolean | undefined) {
        this._edgeSyncFavoritesWithInternetExplorer = value;
    };
    /**
     * Gets the enterpriseCloudPrintDiscoveryEndPoint property value. Endpoint for discovering cloud printers.
     * @returns a string
     */
    public get enterpriseCloudPrintDiscoveryEndPoint() {
        return this._enterpriseCloudPrintDiscoveryEndPoint;
    };
    /**
     * Sets the enterpriseCloudPrintDiscoveryEndPoint property value. Endpoint for discovering cloud printers.
     * @param value Value to set for the enterpriseCloudPrintDiscoveryEndPoint property.
     */
    public set enterpriseCloudPrintDiscoveryEndPoint(value: string | undefined) {
        this._enterpriseCloudPrintDiscoveryEndPoint = value;
    };
    /**
     * Gets the enterpriseCloudPrintDiscoveryMaxLimit property value. Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid values 1 to 65535
     * @returns a integer
     */
    public get enterpriseCloudPrintDiscoveryMaxLimit() {
        return this._enterpriseCloudPrintDiscoveryMaxLimit;
    };
    /**
     * Sets the enterpriseCloudPrintDiscoveryMaxLimit property value. Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid values 1 to 65535
     * @param value Value to set for the enterpriseCloudPrintDiscoveryMaxLimit property.
     */
    public set enterpriseCloudPrintDiscoveryMaxLimit(value: number | undefined) {
        this._enterpriseCloudPrintDiscoveryMaxLimit = value;
    };
    /**
     * Gets the enterpriseCloudPrintMopriaDiscoveryResourceIdentifier property value. OAuth resource URI for printer discovery service as configured in Azure portal.
     * @returns a string
     */
    public get enterpriseCloudPrintMopriaDiscoveryResourceIdentifier() {
        return this._enterpriseCloudPrintMopriaDiscoveryResourceIdentifier;
    };
    /**
     * Sets the enterpriseCloudPrintMopriaDiscoveryResourceIdentifier property value. OAuth resource URI for printer discovery service as configured in Azure portal.
     * @param value Value to set for the enterpriseCloudPrintMopriaDiscoveryResourceIdentifier property.
     */
    public set enterpriseCloudPrintMopriaDiscoveryResourceIdentifier(value: string | undefined) {
        this._enterpriseCloudPrintMopriaDiscoveryResourceIdentifier = value;
    };
    /**
     * Gets the enterpriseCloudPrintOAuthAuthority property value. Authentication endpoint for acquiring OAuth tokens.
     * @returns a string
     */
    public get enterpriseCloudPrintOAuthAuthority() {
        return this._enterpriseCloudPrintOAuthAuthority;
    };
    /**
     * Sets the enterpriseCloudPrintOAuthAuthority property value. Authentication endpoint for acquiring OAuth tokens.
     * @param value Value to set for the enterpriseCloudPrintOAuthAuthority property.
     */
    public set enterpriseCloudPrintOAuthAuthority(value: string | undefined) {
        this._enterpriseCloudPrintOAuthAuthority = value;
    };
    /**
     * Gets the enterpriseCloudPrintOAuthClientIdentifier property value. GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority.
     * @returns a string
     */
    public get enterpriseCloudPrintOAuthClientIdentifier() {
        return this._enterpriseCloudPrintOAuthClientIdentifier;
    };
    /**
     * Sets the enterpriseCloudPrintOAuthClientIdentifier property value. GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority.
     * @param value Value to set for the enterpriseCloudPrintOAuthClientIdentifier property.
     */
    public set enterpriseCloudPrintOAuthClientIdentifier(value: string | undefined) {
        this._enterpriseCloudPrintOAuthClientIdentifier = value;
    };
    /**
     * Gets the enterpriseCloudPrintResourceIdentifier property value. OAuth resource URI for print service as configured in the Azure portal.
     * @returns a string
     */
    public get enterpriseCloudPrintResourceIdentifier() {
        return this._enterpriseCloudPrintResourceIdentifier;
    };
    /**
     * Sets the enterpriseCloudPrintResourceIdentifier property value. OAuth resource URI for print service as configured in the Azure portal.
     * @param value Value to set for the enterpriseCloudPrintResourceIdentifier property.
     */
    public set enterpriseCloudPrintResourceIdentifier(value: string | undefined) {
        this._enterpriseCloudPrintResourceIdentifier = value;
    };
    /**
     * Gets the experienceBlockDeviceDiscovery property value. Indicates whether or not to enable device discovery UX.
     * @returns a boolean
     */
    public get experienceBlockDeviceDiscovery() {
        return this._experienceBlockDeviceDiscovery;
    };
    /**
     * Sets the experienceBlockDeviceDiscovery property value. Indicates whether or not to enable device discovery UX.
     * @param value Value to set for the experienceBlockDeviceDiscovery property.
     */
    public set experienceBlockDeviceDiscovery(value: boolean | undefined) {
        this._experienceBlockDeviceDiscovery = value;
    };
    /**
     * Gets the experienceBlockErrorDialogWhenNoSIM property value. Indicates whether or not to allow the error dialog from displaying if no SIM card is detected.
     * @returns a boolean
     */
    public get experienceBlockErrorDialogWhenNoSIM() {
        return this._experienceBlockErrorDialogWhenNoSIM;
    };
    /**
     * Sets the experienceBlockErrorDialogWhenNoSIM property value. Indicates whether or not to allow the error dialog from displaying if no SIM card is detected.
     * @param value Value to set for the experienceBlockErrorDialogWhenNoSIM property.
     */
    public set experienceBlockErrorDialogWhenNoSIM(value: boolean | undefined) {
        this._experienceBlockErrorDialogWhenNoSIM = value;
    };
    /**
     * Gets the experienceBlockTaskSwitcher property value. Indicates whether or not to enable task switching on the device.
     * @returns a boolean
     */
    public get experienceBlockTaskSwitcher() {
        return this._experienceBlockTaskSwitcher;
    };
    /**
     * Sets the experienceBlockTaskSwitcher property value. Indicates whether or not to enable task switching on the device.
     * @param value Value to set for the experienceBlockTaskSwitcher property.
     */
    public set experienceBlockTaskSwitcher(value: boolean | undefined) {
        this._experienceBlockTaskSwitcher = value;
    };
    /**
     * Gets the gameDvrBlocked property value. Indicates whether or not to block DVR and broadcasting.
     * @returns a boolean
     */
    public get gameDvrBlocked() {
        return this._gameDvrBlocked;
    };
    /**
     * Sets the gameDvrBlocked property value. Indicates whether or not to block DVR and broadcasting.
     * @param value Value to set for the gameDvrBlocked property.
     */
    public set gameDvrBlocked(value: boolean | undefined) {
        this._gameDvrBlocked = value;
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
            "defenderDetectedMalwareActions": n => { this.defenderDetectedMalwareActions = n.getObjectValue<DefenderDetectedMalwareActions>(createDefenderDetectedMalwareActionsFromDiscriminatorValue); },
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
            "edgeSearchEngine": n => { this.edgeSearchEngine = n.getObjectValue<EdgeSearchEngineBase>(createEdgeSearchEngineBaseFromDiscriminatorValue); },
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
            "networkProxyServer": n => { this.networkProxyServer = n.getObjectValue<Windows10NetworkProxyServer>(createWindows10NetworkProxyServerFromDiscriminatorValue); },
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
     * Gets the internetSharingBlocked property value. Indicates whether or not to Block the user from using internet sharing.
     * @returns a boolean
     */
    public get internetSharingBlocked() {
        return this._internetSharingBlocked;
    };
    /**
     * Sets the internetSharingBlocked property value. Indicates whether or not to Block the user from using internet sharing.
     * @param value Value to set for the internetSharingBlocked property.
     */
    public set internetSharingBlocked(value: boolean | undefined) {
        this._internetSharingBlocked = value;
    };
    /**
     * Gets the locationServicesBlocked property value. Indicates whether or not to Block the user from location services.
     * @returns a boolean
     */
    public get locationServicesBlocked() {
        return this._locationServicesBlocked;
    };
    /**
     * Sets the locationServicesBlocked property value. Indicates whether or not to Block the user from location services.
     * @param value Value to set for the locationServicesBlocked property.
     */
    public set locationServicesBlocked(value: boolean | undefined) {
        this._locationServicesBlocked = value;
    };
    /**
     * Gets the lockScreenAllowTimeoutConfiguration property value. Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored.
     * @returns a boolean
     */
    public get lockScreenAllowTimeoutConfiguration() {
        return this._lockScreenAllowTimeoutConfiguration;
    };
    /**
     * Sets the lockScreenAllowTimeoutConfiguration property value. Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored.
     * @param value Value to set for the lockScreenAllowTimeoutConfiguration property.
     */
    public set lockScreenAllowTimeoutConfiguration(value: boolean | undefined) {
        this._lockScreenAllowTimeoutConfiguration = value;
    };
    /**
     * Gets the lockScreenBlockActionCenterNotifications property value. Indicates whether or not to block action center notifications over lock screen.
     * @returns a boolean
     */
    public get lockScreenBlockActionCenterNotifications() {
        return this._lockScreenBlockActionCenterNotifications;
    };
    /**
     * Sets the lockScreenBlockActionCenterNotifications property value. Indicates whether or not to block action center notifications over lock screen.
     * @param value Value to set for the lockScreenBlockActionCenterNotifications property.
     */
    public set lockScreenBlockActionCenterNotifications(value: boolean | undefined) {
        this._lockScreenBlockActionCenterNotifications = value;
    };
    /**
     * Gets the lockScreenBlockCortana property value. Indicates whether or not the user can interact with Cortana using speech while the system is locked.
     * @returns a boolean
     */
    public get lockScreenBlockCortana() {
        return this._lockScreenBlockCortana;
    };
    /**
     * Sets the lockScreenBlockCortana property value. Indicates whether or not the user can interact with Cortana using speech while the system is locked.
     * @param value Value to set for the lockScreenBlockCortana property.
     */
    public set lockScreenBlockCortana(value: boolean | undefined) {
        this._lockScreenBlockCortana = value;
    };
    /**
     * Gets the lockScreenBlockToastNotifications property value. Indicates whether to allow toast notifications above the device lock screen.
     * @returns a boolean
     */
    public get lockScreenBlockToastNotifications() {
        return this._lockScreenBlockToastNotifications;
    };
    /**
     * Sets the lockScreenBlockToastNotifications property value. Indicates whether to allow toast notifications above the device lock screen.
     * @param value Value to set for the lockScreenBlockToastNotifications property.
     */
    public set lockScreenBlockToastNotifications(value: boolean | undefined) {
        this._lockScreenBlockToastNotifications = value;
    };
    /**
     * Gets the lockScreenTimeoutInSeconds property value. Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices. Supported values are 11-1800. Valid values 11 to 1800
     * @returns a integer
     */
    public get lockScreenTimeoutInSeconds() {
        return this._lockScreenTimeoutInSeconds;
    };
    /**
     * Sets the lockScreenTimeoutInSeconds property value. Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices. Supported values are 11-1800. Valid values 11 to 1800
     * @param value Value to set for the lockScreenTimeoutInSeconds property.
     */
    public set lockScreenTimeoutInSeconds(value: number | undefined) {
        this._lockScreenTimeoutInSeconds = value;
    };
    /**
     * Gets the logonBlockFastUserSwitching property value. Disables the ability to quickly switch between users that are logged on simultaneously without logging off.
     * @returns a boolean
     */
    public get logonBlockFastUserSwitching() {
        return this._logonBlockFastUserSwitching;
    };
    /**
     * Sets the logonBlockFastUserSwitching property value. Disables the ability to quickly switch between users that are logged on simultaneously without logging off.
     * @param value Value to set for the logonBlockFastUserSwitching property.
     */
    public set logonBlockFastUserSwitching(value: boolean | undefined) {
        this._logonBlockFastUserSwitching = value;
    };
    /**
     * Gets the microsoftAccountBlocked property value. Indicates whether or not to Block a Microsoft account.
     * @returns a boolean
     */
    public get microsoftAccountBlocked() {
        return this._microsoftAccountBlocked;
    };
    /**
     * Sets the microsoftAccountBlocked property value. Indicates whether or not to Block a Microsoft account.
     * @param value Value to set for the microsoftAccountBlocked property.
     */
    public set microsoftAccountBlocked(value: boolean | undefined) {
        this._microsoftAccountBlocked = value;
    };
    /**
     * Gets the microsoftAccountBlockSettingsSync property value. Indicates whether or not to Block Microsoft account settings sync.
     * @returns a boolean
     */
    public get microsoftAccountBlockSettingsSync() {
        return this._microsoftAccountBlockSettingsSync;
    };
    /**
     * Sets the microsoftAccountBlockSettingsSync property value. Indicates whether or not to Block Microsoft account settings sync.
     * @param value Value to set for the microsoftAccountBlockSettingsSync property.
     */
    public set microsoftAccountBlockSettingsSync(value: boolean | undefined) {
        this._microsoftAccountBlockSettingsSync = value;
    };
    /**
     * Gets the networkProxyApplySettingsDeviceWide property value. If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to the user account that’s enrolled into MDM.
     * @returns a boolean
     */
    public get networkProxyApplySettingsDeviceWide() {
        return this._networkProxyApplySettingsDeviceWide;
    };
    /**
     * Sets the networkProxyApplySettingsDeviceWide property value. If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to the user account that’s enrolled into MDM.
     * @param value Value to set for the networkProxyApplySettingsDeviceWide property.
     */
    public set networkProxyApplySettingsDeviceWide(value: boolean | undefined) {
        this._networkProxyApplySettingsDeviceWide = value;
    };
    /**
     * Gets the networkProxyAutomaticConfigurationUrl property value. Address to the proxy auto-config (PAC) script you want to use.
     * @returns a string
     */
    public get networkProxyAutomaticConfigurationUrl() {
        return this._networkProxyAutomaticConfigurationUrl;
    };
    /**
     * Sets the networkProxyAutomaticConfigurationUrl property value. Address to the proxy auto-config (PAC) script you want to use.
     * @param value Value to set for the networkProxyAutomaticConfigurationUrl property.
     */
    public set networkProxyAutomaticConfigurationUrl(value: string | undefined) {
        this._networkProxyAutomaticConfigurationUrl = value;
    };
    /**
     * Gets the networkProxyDisableAutoDetect property value. Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC) script.
     * @returns a boolean
     */
    public get networkProxyDisableAutoDetect() {
        return this._networkProxyDisableAutoDetect;
    };
    /**
     * Sets the networkProxyDisableAutoDetect property value. Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC) script.
     * @param value Value to set for the networkProxyDisableAutoDetect property.
     */
    public set networkProxyDisableAutoDetect(value: boolean | undefined) {
        this._networkProxyDisableAutoDetect = value;
    };
    /**
     * Gets the networkProxyServer property value. Specifies manual proxy server settings.
     * @returns a windows10NetworkProxyServer
     */
    public get networkProxyServer() {
        return this._networkProxyServer;
    };
    /**
     * Sets the networkProxyServer property value. Specifies manual proxy server settings.
     * @param value Value to set for the networkProxyServer property.
     */
    public set networkProxyServer(value: Windows10NetworkProxyServer | undefined) {
        this._networkProxyServer = value;
    };
    /**
     * Gets the nfcBlocked property value. Indicates whether or not to Block the user from using near field communication.
     * @returns a boolean
     */
    public get nfcBlocked() {
        return this._nfcBlocked;
    };
    /**
     * Sets the nfcBlocked property value. Indicates whether or not to Block the user from using near field communication.
     * @param value Value to set for the nfcBlocked property.
     */
    public set nfcBlocked(value: boolean | undefined) {
        this._nfcBlocked = value;
    };
    /**
     * Gets the oneDriveDisableFileSync property value. Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive.
     * @returns a boolean
     */
    public get oneDriveDisableFileSync() {
        return this._oneDriveDisableFileSync;
    };
    /**
     * Sets the oneDriveDisableFileSync property value. Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive.
     * @param value Value to set for the oneDriveDisableFileSync property.
     */
    public set oneDriveDisableFileSync(value: boolean | undefined) {
        this._oneDriveDisableFileSync = value;
    };
    /**
     * Gets the passwordBlockSimple property value. Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the use of picture passwords.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the use of picture passwords.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        this._passwordBlockSimple = value;
    };
    /**
     * Gets the passwordExpirationDays property value. The password expiration in days. Valid values 0 to 730
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. The password expiration in days. Valid values 0 to 730
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
    };
    /**
     * Gets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @returns a integer
     */
    public get passwordMinimumCharacterSetCount() {
        return this._passwordMinimumCharacterSetCount;
    };
    /**
     * Sets the passwordMinimumCharacterSetCount property value. The number of character sets required in the password.
     * @param value Value to set for the passwordMinimumCharacterSetCount property.
     */
    public set passwordMinimumCharacterSetCount(value: number | undefined) {
        this._passwordMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passwordMinimumLength property value. The minimum password length. Valid values 4 to 16
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. The minimum password length. Valid values 4 to 16
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeScreenTimeout property value. The minutes of inactivity before the screen times out.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeScreenTimeout() {
        return this._passwordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeScreenTimeout property value. The minutes of inactivity before the screen times out.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set passwordMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        this._passwordMinutesOfInactivityBeforeScreenTimeout = value;
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent reuse of. Valid values 0 to 50
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. The number of previous passwords to prevent reuse of. Valid values 0 to 50
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        this._passwordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the passwordRequired property value. Indicates whether or not to require the user to have a password.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Indicates whether or not to require the user to have a password.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        this._passwordRequired = value;
    };
    /**
     * Gets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        this._passwordRequiredType = value;
    };
    /**
     * Gets the passwordRequireWhenResumeFromIdleState property value. Indicates whether or not to require a password upon resuming from an idle state.
     * @returns a boolean
     */
    public get passwordRequireWhenResumeFromIdleState() {
        return this._passwordRequireWhenResumeFromIdleState;
    };
    /**
     * Sets the passwordRequireWhenResumeFromIdleState property value. Indicates whether or not to require a password upon resuming from an idle state.
     * @param value Value to set for the passwordRequireWhenResumeFromIdleState property.
     */
    public set passwordRequireWhenResumeFromIdleState(value: boolean | undefined) {
        this._passwordRequireWhenResumeFromIdleState = value;
    };
    /**
     * Gets the passwordSignInFailureCountBeforeFactoryReset property value. The number of sign in failures before factory reset. Valid values 0 to 999
     * @returns a integer
     */
    public get passwordSignInFailureCountBeforeFactoryReset() {
        return this._passwordSignInFailureCountBeforeFactoryReset;
    };
    /**
     * Sets the passwordSignInFailureCountBeforeFactoryReset property value. The number of sign in failures before factory reset. Valid values 0 to 999
     * @param value Value to set for the passwordSignInFailureCountBeforeFactoryReset property.
     */
    public set passwordSignInFailureCountBeforeFactoryReset(value: number | undefined) {
        this._passwordSignInFailureCountBeforeFactoryReset = value;
    };
    /**
     * Gets the personalizationDesktopImageUrl property value. A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url to a local image on the file system that needs to used as the Desktop Image.
     * @returns a string
     */
    public get personalizationDesktopImageUrl() {
        return this._personalizationDesktopImageUrl;
    };
    /**
     * Sets the personalizationDesktopImageUrl property value. A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url to a local image on the file system that needs to used as the Desktop Image.
     * @param value Value to set for the personalizationDesktopImageUrl property.
     */
    public set personalizationDesktopImageUrl(value: string | undefined) {
        this._personalizationDesktopImageUrl = value;
    };
    /**
     * Gets the personalizationLockScreenImageUrl property value. A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a file Url to a local image on the file system that needs to be used as the Lock Screen Image.
     * @returns a string
     */
    public get personalizationLockScreenImageUrl() {
        return this._personalizationLockScreenImageUrl;
    };
    /**
     * Sets the personalizationLockScreenImageUrl property value. A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a file Url to a local image on the file system that needs to be used as the Lock Screen Image.
     * @param value Value to set for the personalizationLockScreenImageUrl property.
     */
    public set personalizationLockScreenImageUrl(value: string | undefined) {
        this._personalizationLockScreenImageUrl = value;
    };
    /**
     * Gets the privacyAdvertisingId property value. Enables or disables the use of advertising ID. Added in Windows 10, version 1607. Possible values are: notConfigured, blocked, allowed.
     * @returns a stateManagementSetting
     */
    public get privacyAdvertisingId() {
        return this._privacyAdvertisingId;
    };
    /**
     * Sets the privacyAdvertisingId property value. Enables or disables the use of advertising ID. Added in Windows 10, version 1607. Possible values are: notConfigured, blocked, allowed.
     * @param value Value to set for the privacyAdvertisingId property.
     */
    public set privacyAdvertisingId(value: StateManagementSetting | undefined) {
        this._privacyAdvertisingId = value;
    };
    /**
     * Gets the privacyAutoAcceptPairingAndConsentPrompts property value. Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when launching apps.
     * @returns a boolean
     */
    public get privacyAutoAcceptPairingAndConsentPrompts() {
        return this._privacyAutoAcceptPairingAndConsentPrompts;
    };
    /**
     * Sets the privacyAutoAcceptPairingAndConsentPrompts property value. Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when launching apps.
     * @param value Value to set for the privacyAutoAcceptPairingAndConsentPrompts property.
     */
    public set privacyAutoAcceptPairingAndConsentPrompts(value: boolean | undefined) {
        this._privacyAutoAcceptPairingAndConsentPrompts = value;
    };
    /**
     * Gets the privacyBlockInputPersonalization property value. Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store applications.
     * @returns a boolean
     */
    public get privacyBlockInputPersonalization() {
        return this._privacyBlockInputPersonalization;
    };
    /**
     * Sets the privacyBlockInputPersonalization property value. Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store applications.
     * @param value Value to set for the privacyBlockInputPersonalization property.
     */
    public set privacyBlockInputPersonalization(value: boolean | undefined) {
        this._privacyBlockInputPersonalization = value;
    };
    /**
     * Gets the resetProtectionModeBlocked property value. Indicates whether or not to Block the user from reset protection mode.
     * @returns a boolean
     */
    public get resetProtectionModeBlocked() {
        return this._resetProtectionModeBlocked;
    };
    /**
     * Sets the resetProtectionModeBlocked property value. Indicates whether or not to Block the user from reset protection mode.
     * @param value Value to set for the resetProtectionModeBlocked property.
     */
    public set resetProtectionModeBlocked(value: boolean | undefined) {
        this._resetProtectionModeBlocked = value;
    };
    /**
     * Gets the safeSearchFilter property value. Specifies what filter level of safe search is required. Possible values are: userDefined, strict, moderate.
     * @returns a safeSearchFilterType
     */
    public get safeSearchFilter() {
        return this._safeSearchFilter;
    };
    /**
     * Sets the safeSearchFilter property value. Specifies what filter level of safe search is required. Possible values are: userDefined, strict, moderate.
     * @param value Value to set for the safeSearchFilter property.
     */
    public set safeSearchFilter(value: SafeSearchFilterType | undefined) {
        this._safeSearchFilter = value;
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether or not to Block the user from taking Screenshots.
     * @returns a boolean
     */
    public get screenCaptureBlocked() {
        return this._screenCaptureBlocked;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether or not to Block the user from taking Screenshots.
     * @param value Value to set for the screenCaptureBlocked property.
     */
    public set screenCaptureBlocked(value: boolean | undefined) {
        this._screenCaptureBlocked = value;
    };
    /**
     * Gets the searchBlockDiacritics property value. Specifies if search can use diacritics.
     * @returns a boolean
     */
    public get searchBlockDiacritics() {
        return this._searchBlockDiacritics;
    };
    /**
     * Sets the searchBlockDiacritics property value. Specifies if search can use diacritics.
     * @param value Value to set for the searchBlockDiacritics property.
     */
    public set searchBlockDiacritics(value: boolean | undefined) {
        this._searchBlockDiacritics = value;
    };
    /**
     * Gets the searchDisableAutoLanguageDetection property value. Specifies whether to use automatic language detection when indexing content and properties.
     * @returns a boolean
     */
    public get searchDisableAutoLanguageDetection() {
        return this._searchDisableAutoLanguageDetection;
    };
    /**
     * Sets the searchDisableAutoLanguageDetection property value. Specifies whether to use automatic language detection when indexing content and properties.
     * @param value Value to set for the searchDisableAutoLanguageDetection property.
     */
    public set searchDisableAutoLanguageDetection(value: boolean | undefined) {
        this._searchDisableAutoLanguageDetection = value;
    };
    /**
     * Gets the searchDisableIndexerBackoff property value. Indicates whether or not to disable the search indexer backoff feature.
     * @returns a boolean
     */
    public get searchDisableIndexerBackoff() {
        return this._searchDisableIndexerBackoff;
    };
    /**
     * Sets the searchDisableIndexerBackoff property value. Indicates whether or not to disable the search indexer backoff feature.
     * @param value Value to set for the searchDisableIndexerBackoff property.
     */
    public set searchDisableIndexerBackoff(value: boolean | undefined) {
        this._searchDisableIndexerBackoff = value;
    };
    /**
     * Gets the searchDisableIndexingEncryptedItems property value. Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for Cortana or Explorer.
     * @returns a boolean
     */
    public get searchDisableIndexingEncryptedItems() {
        return this._searchDisableIndexingEncryptedItems;
    };
    /**
     * Sets the searchDisableIndexingEncryptedItems property value. Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for Cortana or Explorer.
     * @param value Value to set for the searchDisableIndexingEncryptedItems property.
     */
    public set searchDisableIndexingEncryptedItems(value: boolean | undefined) {
        this._searchDisableIndexingEncryptedItems = value;
    };
    /**
     * Gets the searchDisableIndexingRemovableDrive property value. Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed.
     * @returns a boolean
     */
    public get searchDisableIndexingRemovableDrive() {
        return this._searchDisableIndexingRemovableDrive;
    };
    /**
     * Sets the searchDisableIndexingRemovableDrive property value. Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed.
     * @param value Value to set for the searchDisableIndexingRemovableDrive property.
     */
    public set searchDisableIndexingRemovableDrive(value: boolean | undefined) {
        this._searchDisableIndexingRemovableDrive = value;
    };
    /**
     * Gets the searchEnableAutomaticIndexSizeManangement property value. Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops.
     * @returns a boolean
     */
    public get searchEnableAutomaticIndexSizeManangement() {
        return this._searchEnableAutomaticIndexSizeManangement;
    };
    /**
     * Sets the searchEnableAutomaticIndexSizeManangement property value. Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops.
     * @param value Value to set for the searchEnableAutomaticIndexSizeManangement property.
     */
    public set searchEnableAutomaticIndexSizeManangement(value: boolean | undefined) {
        this._searchEnableAutomaticIndexSizeManangement = value;
    };
    /**
     * Gets the searchEnableRemoteQueries property value. Indicates whether or not to block remote queries of this computer’s index.
     * @returns a boolean
     */
    public get searchEnableRemoteQueries() {
        return this._searchEnableRemoteQueries;
    };
    /**
     * Sets the searchEnableRemoteQueries property value. Indicates whether or not to block remote queries of this computer’s index.
     * @param value Value to set for the searchEnableRemoteQueries property.
     */
    public set searchEnableRemoteQueries(value: boolean | undefined) {
        this._searchEnableRemoteQueries = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("accountsBlockAddingNonMicrosoftAccountEmail", this.accountsBlockAddingNonMicrosoftAccountEmail);
        writer.writeBooleanValue("antiTheftModeBlocked", this.antiTheftModeBlocked);
        writer.writeEnumValue<StateManagementSetting>("appsAllowTrustedAppsSideloading", this.appsAllowTrustedAppsSideloading);
        writer.writeBooleanValue("appsBlockWindowsStoreOriginatedApps", this.appsBlockWindowsStoreOriginatedApps);
        writer.writeCollectionOfPrimitiveValues<string>("bluetoothAllowedServices", this.bluetoothAllowedServices);
        writer.writeBooleanValue("bluetoothBlockAdvertising", this.bluetoothBlockAdvertising);
        writer.writeBooleanValue("bluetoothBlockDiscoverableMode", this.bluetoothBlockDiscoverableMode);
        writer.writeBooleanValue("bluetoothBlocked", this.bluetoothBlocked);
        writer.writeBooleanValue("bluetoothBlockPrePairing", this.bluetoothBlockPrePairing);
        writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        writer.writeBooleanValue("cellularBlockDataWhenRoaming", this.cellularBlockDataWhenRoaming);
        writer.writeBooleanValue("cellularBlockVpn", this.cellularBlockVpn);
        writer.writeBooleanValue("cellularBlockVpnWhenRoaming", this.cellularBlockVpnWhenRoaming);
        writer.writeBooleanValue("certificatesBlockManualRootCertificateInstallation", this.certificatesBlockManualRootCertificateInstallation);
        writer.writeBooleanValue("connectedDevicesServiceBlocked", this.connectedDevicesServiceBlocked);
        writer.writeBooleanValue("copyPasteBlocked", this.copyPasteBlocked);
        writer.writeBooleanValue("cortanaBlocked", this.cortanaBlocked);
        writer.writeBooleanValue("defenderBlockEndUserAccess", this.defenderBlockEndUserAccess);
        writer.writeEnumValue<DefenderCloudBlockLevelType>("defenderCloudBlockLevel", this.defenderCloudBlockLevel);
        writer.writeNumberValue("defenderDaysBeforeDeletingQuarantinedMalware", this.defenderDaysBeforeDeletingQuarantinedMalware);
        writer.writeObjectValue<DefenderDetectedMalwareActions>("defenderDetectedMalwareActions", this.defenderDetectedMalwareActions);
        writer.writeCollectionOfPrimitiveValues<string>("defenderFileExtensionsToExclude", this.defenderFileExtensionsToExclude);
        writer.writeCollectionOfPrimitiveValues<string>("defenderFilesAndFoldersToExclude", this.defenderFilesAndFoldersToExclude);
        writer.writeEnumValue<DefenderMonitorFileActivity>("defenderMonitorFileActivity", this.defenderMonitorFileActivity);
        writer.writeCollectionOfPrimitiveValues<string>("defenderProcessesToExclude", this.defenderProcessesToExclude);
        writer.writeEnumValue<DefenderPromptForSampleSubmission>("defenderPromptForSampleSubmission", this.defenderPromptForSampleSubmission);
        writer.writeBooleanValue("defenderRequireBehaviorMonitoring", this.defenderRequireBehaviorMonitoring);
        writer.writeBooleanValue("defenderRequireCloudProtection", this.defenderRequireCloudProtection);
        writer.writeBooleanValue("defenderRequireNetworkInspectionSystem", this.defenderRequireNetworkInspectionSystem);
        writer.writeBooleanValue("defenderRequireRealTimeMonitoring", this.defenderRequireRealTimeMonitoring);
        writer.writeBooleanValue("defenderScanArchiveFiles", this.defenderScanArchiveFiles);
        writer.writeBooleanValue("defenderScanDownloads", this.defenderScanDownloads);
        writer.writeBooleanValue("defenderScanIncomingMail", this.defenderScanIncomingMail);
        writer.writeBooleanValue("defenderScanMappedNetworkDrivesDuringFullScan", this.defenderScanMappedNetworkDrivesDuringFullScan);
        writer.writeNumberValue("defenderScanMaxCpu", this.defenderScanMaxCpu);
        writer.writeBooleanValue("defenderScanNetworkFiles", this.defenderScanNetworkFiles);
        writer.writeBooleanValue("defenderScanRemovableDrivesDuringFullScan", this.defenderScanRemovableDrivesDuringFullScan);
        writer.writeBooleanValue("defenderScanScriptsLoadedInInternetExplorer", this.defenderScanScriptsLoadedInInternetExplorer);
        writer.writeEnumValue<DefenderScanType>("defenderScanType", this.defenderScanType);
        writer.writeTimeOnlyValue("defenderScheduledQuickScanTime", this.defenderScheduledQuickScanTime);
        writer.writeTimeOnlyValue("defenderScheduledScanTime", this.defenderScheduledScanTime);
        writer.writeNumberValue("defenderSignatureUpdateIntervalInHours", this.defenderSignatureUpdateIntervalInHours);
        writer.writeEnumValue<WeeklySchedule>("defenderSystemScanSchedule", this.defenderSystemScanSchedule);
        writer.writeEnumValue<StateManagementSetting>("developerUnlockSetting", this.developerUnlockSetting);
        writer.writeBooleanValue("deviceManagementBlockFactoryResetOnMobile", this.deviceManagementBlockFactoryResetOnMobile);
        writer.writeBooleanValue("deviceManagementBlockManualUnenroll", this.deviceManagementBlockManualUnenroll);
        writer.writeEnumValue<DiagnosticDataSubmissionMode>("diagnosticsDataSubmissionMode", this.diagnosticsDataSubmissionMode);
        writer.writeBooleanValue("edgeAllowStartPagesModification", this.edgeAllowStartPagesModification);
        writer.writeBooleanValue("edgeBlockAccessToAboutFlags", this.edgeBlockAccessToAboutFlags);
        writer.writeBooleanValue("edgeBlockAddressBarDropdown", this.edgeBlockAddressBarDropdown);
        writer.writeBooleanValue("edgeBlockAutofill", this.edgeBlockAutofill);
        writer.writeBooleanValue("edgeBlockCompatibilityList", this.edgeBlockCompatibilityList);
        writer.writeBooleanValue("edgeBlockDeveloperTools", this.edgeBlockDeveloperTools);
        writer.writeBooleanValue("edgeBlocked", this.edgeBlocked);
        writer.writeBooleanValue("edgeBlockExtensions", this.edgeBlockExtensions);
        writer.writeBooleanValue("edgeBlockInPrivateBrowsing", this.edgeBlockInPrivateBrowsing);
        writer.writeBooleanValue("edgeBlockJavaScript", this.edgeBlockJavaScript);
        writer.writeBooleanValue("edgeBlockLiveTileDataCollection", this.edgeBlockLiveTileDataCollection);
        writer.writeBooleanValue("edgeBlockPasswordManager", this.edgeBlockPasswordManager);
        writer.writeBooleanValue("edgeBlockPopups", this.edgeBlockPopups);
        writer.writeBooleanValue("edgeBlockSearchSuggestions", this.edgeBlockSearchSuggestions);
        writer.writeBooleanValue("edgeBlockSendingDoNotTrackHeader", this.edgeBlockSendingDoNotTrackHeader);
        writer.writeBooleanValue("edgeBlockSendingIntranetTrafficToInternetExplorer", this.edgeBlockSendingIntranetTrafficToInternetExplorer);
        writer.writeBooleanValue("edgeClearBrowsingDataOnExit", this.edgeClearBrowsingDataOnExit);
        writer.writeEnumValue<EdgeCookiePolicy>("edgeCookiePolicy", this.edgeCookiePolicy);
        writer.writeBooleanValue("edgeDisableFirstRunPage", this.edgeDisableFirstRunPage);
        writer.writeStringValue("edgeEnterpriseModeSiteListLocation", this.edgeEnterpriseModeSiteListLocation);
        writer.writeStringValue("edgeFirstRunUrl", this.edgeFirstRunUrl);
        writer.writeCollectionOfPrimitiveValues<string>("edgeHomepageUrls", this.edgeHomepageUrls);
        writer.writeBooleanValue("edgeRequireSmartScreen", this.edgeRequireSmartScreen);
        writer.writeObjectValue<EdgeSearchEngineBase>("edgeSearchEngine", this.edgeSearchEngine);
        writer.writeBooleanValue("edgeSendIntranetTrafficToInternetExplorer", this.edgeSendIntranetTrafficToInternetExplorer);
        writer.writeBooleanValue("edgeSyncFavoritesWithInternetExplorer", this.edgeSyncFavoritesWithInternetExplorer);
        writer.writeStringValue("enterpriseCloudPrintDiscoveryEndPoint", this.enterpriseCloudPrintDiscoveryEndPoint);
        writer.writeNumberValue("enterpriseCloudPrintDiscoveryMaxLimit", this.enterpriseCloudPrintDiscoveryMaxLimit);
        writer.writeStringValue("enterpriseCloudPrintMopriaDiscoveryResourceIdentifier", this.enterpriseCloudPrintMopriaDiscoveryResourceIdentifier);
        writer.writeStringValue("enterpriseCloudPrintOAuthAuthority", this.enterpriseCloudPrintOAuthAuthority);
        writer.writeStringValue("enterpriseCloudPrintOAuthClientIdentifier", this.enterpriseCloudPrintOAuthClientIdentifier);
        writer.writeStringValue("enterpriseCloudPrintResourceIdentifier", this.enterpriseCloudPrintResourceIdentifier);
        writer.writeBooleanValue("experienceBlockDeviceDiscovery", this.experienceBlockDeviceDiscovery);
        writer.writeBooleanValue("experienceBlockErrorDialogWhenNoSIM", this.experienceBlockErrorDialogWhenNoSIM);
        writer.writeBooleanValue("experienceBlockTaskSwitcher", this.experienceBlockTaskSwitcher);
        writer.writeBooleanValue("gameDvrBlocked", this.gameDvrBlocked);
        writer.writeBooleanValue("internetSharingBlocked", this.internetSharingBlocked);
        writer.writeBooleanValue("locationServicesBlocked", this.locationServicesBlocked);
        writer.writeBooleanValue("lockScreenAllowTimeoutConfiguration", this.lockScreenAllowTimeoutConfiguration);
        writer.writeBooleanValue("lockScreenBlockActionCenterNotifications", this.lockScreenBlockActionCenterNotifications);
        writer.writeBooleanValue("lockScreenBlockCortana", this.lockScreenBlockCortana);
        writer.writeBooleanValue("lockScreenBlockToastNotifications", this.lockScreenBlockToastNotifications);
        writer.writeNumberValue("lockScreenTimeoutInSeconds", this.lockScreenTimeoutInSeconds);
        writer.writeBooleanValue("logonBlockFastUserSwitching", this.logonBlockFastUserSwitching);
        writer.writeBooleanValue("microsoftAccountBlocked", this.microsoftAccountBlocked);
        writer.writeBooleanValue("microsoftAccountBlockSettingsSync", this.microsoftAccountBlockSettingsSync);
        writer.writeBooleanValue("networkProxyApplySettingsDeviceWide", this.networkProxyApplySettingsDeviceWide);
        writer.writeStringValue("networkProxyAutomaticConfigurationUrl", this.networkProxyAutomaticConfigurationUrl);
        writer.writeBooleanValue("networkProxyDisableAutoDetect", this.networkProxyDisableAutoDetect);
        writer.writeObjectValue<Windows10NetworkProxyServer>("networkProxyServer", this.networkProxyServer);
        writer.writeBooleanValue("nfcBlocked", this.nfcBlocked);
        writer.writeBooleanValue("oneDriveDisableFileSync", this.oneDriveDisableFileSync);
        writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        writer.writeBooleanValue("passwordRequireWhenResumeFromIdleState", this.passwordRequireWhenResumeFromIdleState);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeStringValue("personalizationDesktopImageUrl", this.personalizationDesktopImageUrl);
        writer.writeStringValue("personalizationLockScreenImageUrl", this.personalizationLockScreenImageUrl);
        writer.writeEnumValue<StateManagementSetting>("privacyAdvertisingId", this.privacyAdvertisingId);
        writer.writeBooleanValue("privacyAutoAcceptPairingAndConsentPrompts", this.privacyAutoAcceptPairingAndConsentPrompts);
        writer.writeBooleanValue("privacyBlockInputPersonalization", this.privacyBlockInputPersonalization);
        writer.writeBooleanValue("resetProtectionModeBlocked", this.resetProtectionModeBlocked);
        writer.writeEnumValue<SafeSearchFilterType>("safeSearchFilter", this.safeSearchFilter);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        writer.writeBooleanValue("searchBlockDiacritics", this.searchBlockDiacritics);
        writer.writeBooleanValue("searchDisableAutoLanguageDetection", this.searchDisableAutoLanguageDetection);
        writer.writeBooleanValue("searchDisableIndexerBackoff", this.searchDisableIndexerBackoff);
        writer.writeBooleanValue("searchDisableIndexingEncryptedItems", this.searchDisableIndexingEncryptedItems);
        writer.writeBooleanValue("searchDisableIndexingRemovableDrive", this.searchDisableIndexingRemovableDrive);
        writer.writeBooleanValue("searchEnableAutomaticIndexSizeManangement", this.searchEnableAutomaticIndexSizeManangement);
        writer.writeBooleanValue("searchEnableRemoteQueries", this.searchEnableRemoteQueries);
        writer.writeBooleanValue("settingsBlockAccountsPage", this.settingsBlockAccountsPage);
        writer.writeBooleanValue("settingsBlockAddProvisioningPackage", this.settingsBlockAddProvisioningPackage);
        writer.writeBooleanValue("settingsBlockAppsPage", this.settingsBlockAppsPage);
        writer.writeBooleanValue("settingsBlockChangeLanguage", this.settingsBlockChangeLanguage);
        writer.writeBooleanValue("settingsBlockChangePowerSleep", this.settingsBlockChangePowerSleep);
        writer.writeBooleanValue("settingsBlockChangeRegion", this.settingsBlockChangeRegion);
        writer.writeBooleanValue("settingsBlockChangeSystemTime", this.settingsBlockChangeSystemTime);
        writer.writeBooleanValue("settingsBlockDevicesPage", this.settingsBlockDevicesPage);
        writer.writeBooleanValue("settingsBlockEaseOfAccessPage", this.settingsBlockEaseOfAccessPage);
        writer.writeBooleanValue("settingsBlockEditDeviceName", this.settingsBlockEditDeviceName);
        writer.writeBooleanValue("settingsBlockGamingPage", this.settingsBlockGamingPage);
        writer.writeBooleanValue("settingsBlockNetworkInternetPage", this.settingsBlockNetworkInternetPage);
        writer.writeBooleanValue("settingsBlockPersonalizationPage", this.settingsBlockPersonalizationPage);
        writer.writeBooleanValue("settingsBlockPrivacyPage", this.settingsBlockPrivacyPage);
        writer.writeBooleanValue("settingsBlockRemoveProvisioningPackage", this.settingsBlockRemoveProvisioningPackage);
        writer.writeBooleanValue("settingsBlockSettingsApp", this.settingsBlockSettingsApp);
        writer.writeBooleanValue("settingsBlockSystemPage", this.settingsBlockSystemPage);
        writer.writeBooleanValue("settingsBlockTimeLanguagePage", this.settingsBlockTimeLanguagePage);
        writer.writeBooleanValue("settingsBlockUpdateSecurityPage", this.settingsBlockUpdateSecurityPage);
        writer.writeBooleanValue("sharedUserAppDataAllowed", this.sharedUserAppDataAllowed);
        writer.writeBooleanValue("smartScreenBlockPromptOverride", this.smartScreenBlockPromptOverride);
        writer.writeBooleanValue("smartScreenBlockPromptOverrideForFiles", this.smartScreenBlockPromptOverrideForFiles);
        writer.writeBooleanValue("smartScreenEnableAppInstallControl", this.smartScreenEnableAppInstallControl);
        writer.writeBooleanValue("startBlockUnpinningAppsFromTaskbar", this.startBlockUnpinningAppsFromTaskbar);
        writer.writeEnumValue<WindowsStartMenuAppListVisibilityType>("startMenuAppListVisibility", this.startMenuAppListVisibility);
        writer.writeBooleanValue("startMenuHideChangeAccountSettings", this.startMenuHideChangeAccountSettings);
        writer.writeBooleanValue("startMenuHideFrequentlyUsedApps", this.startMenuHideFrequentlyUsedApps);
        writer.writeBooleanValue("startMenuHideHibernate", this.startMenuHideHibernate);
        writer.writeBooleanValue("startMenuHideLock", this.startMenuHideLock);
        writer.writeBooleanValue("startMenuHidePowerButton", this.startMenuHidePowerButton);
        writer.writeBooleanValue("startMenuHideRecentJumpLists", this.startMenuHideRecentJumpLists);
        writer.writeBooleanValue("startMenuHideRecentlyAddedApps", this.startMenuHideRecentlyAddedApps);
        writer.writeBooleanValue("startMenuHideRestartOptions", this.startMenuHideRestartOptions);
        writer.writeBooleanValue("startMenuHideShutDown", this.startMenuHideShutDown);
        writer.writeBooleanValue("startMenuHideSignOut", this.startMenuHideSignOut);
        writer.writeBooleanValue("startMenuHideSleep", this.startMenuHideSleep);
        writer.writeBooleanValue("startMenuHideSwitchAccount", this.startMenuHideSwitchAccount);
        writer.writeBooleanValue("startMenuHideUserTile", this.startMenuHideUserTile);
        writer.writeStringValue("startMenuLayoutEdgeAssetsXml", this.startMenuLayoutEdgeAssetsXml);
        writer.writeStringValue("startMenuLayoutXml", this.startMenuLayoutXml);
        writer.writeEnumValue<WindowsStartMenuModeType>("startMenuMode", this.startMenuMode);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderDocuments", this.startMenuPinnedFolderDocuments);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderDownloads", this.startMenuPinnedFolderDownloads);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderFileExplorer", this.startMenuPinnedFolderFileExplorer);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderHomeGroup", this.startMenuPinnedFolderHomeGroup);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderMusic", this.startMenuPinnedFolderMusic);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderNetwork", this.startMenuPinnedFolderNetwork);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderPersonalFolder", this.startMenuPinnedFolderPersonalFolder);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderPictures", this.startMenuPinnedFolderPictures);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderSettings", this.startMenuPinnedFolderSettings);
        writer.writeEnumValue<VisibilitySetting>("startMenuPinnedFolderVideos", this.startMenuPinnedFolderVideos);
        writer.writeBooleanValue("storageBlockRemovableStorage", this.storageBlockRemovableStorage);
        writer.writeBooleanValue("storageRequireMobileDeviceEncryption", this.storageRequireMobileDeviceEncryption);
        writer.writeBooleanValue("storageRestrictAppDataToSystemVolume", this.storageRestrictAppDataToSystemVolume);
        writer.writeBooleanValue("storageRestrictAppInstallToSystemVolume", this.storageRestrictAppInstallToSystemVolume);
        writer.writeBooleanValue("tenantLockdownRequireNetworkDuringOutOfBoxExperience", this.tenantLockdownRequireNetworkDuringOutOfBoxExperience);
        writer.writeBooleanValue("usbBlocked", this.usbBlocked);
        writer.writeBooleanValue("voiceRecordingBlocked", this.voiceRecordingBlocked);
        writer.writeBooleanValue("webRtcBlockLocalhostIpAddress", this.webRtcBlockLocalhostIpAddress);
        writer.writeBooleanValue("wiFiBlockAutomaticConnectHotspots", this.wiFiBlockAutomaticConnectHotspots);
        writer.writeBooleanValue("wiFiBlocked", this.wiFiBlocked);
        writer.writeBooleanValue("wiFiBlockManualConfiguration", this.wiFiBlockManualConfiguration);
        writer.writeNumberValue("wiFiScanInterval", this.wiFiScanInterval);
        writer.writeBooleanValue("windowsSpotlightBlockConsumerSpecificFeatures", this.windowsSpotlightBlockConsumerSpecificFeatures);
        writer.writeBooleanValue("windowsSpotlightBlocked", this.windowsSpotlightBlocked);
        writer.writeBooleanValue("windowsSpotlightBlockOnActionCenter", this.windowsSpotlightBlockOnActionCenter);
        writer.writeBooleanValue("windowsSpotlightBlockTailoredExperiences", this.windowsSpotlightBlockTailoredExperiences);
        writer.writeBooleanValue("windowsSpotlightBlockThirdPartyNotifications", this.windowsSpotlightBlockThirdPartyNotifications);
        writer.writeBooleanValue("windowsSpotlightBlockWelcomeExperience", this.windowsSpotlightBlockWelcomeExperience);
        writer.writeBooleanValue("windowsSpotlightBlockWindowsTips", this.windowsSpotlightBlockWindowsTips);
        writer.writeEnumValue<WindowsSpotlightEnablementSettings>("windowsSpotlightConfigureOnLockScreen", this.windowsSpotlightConfigureOnLockScreen);
        writer.writeBooleanValue("windowsStoreBlockAutoUpdate", this.windowsStoreBlockAutoUpdate);
        writer.writeBooleanValue("windowsStoreBlocked", this.windowsStoreBlocked);
        writer.writeBooleanValue("windowsStoreEnablePrivateStoreOnly", this.windowsStoreEnablePrivateStoreOnly);
        writer.writeBooleanValue("wirelessDisplayBlockProjectionToThisDevice", this.wirelessDisplayBlockProjectionToThisDevice);
        writer.writeBooleanValue("wirelessDisplayBlockUserInputFromReceiver", this.wirelessDisplayBlockUserInputFromReceiver);
        writer.writeBooleanValue("wirelessDisplayRequirePinForPairing", this.wirelessDisplayRequirePinForPairing);
    };
    /**
     * Gets the settingsBlockAccountsPage property value. Indicates whether or not to block access to Accounts in Settings app.
     * @returns a boolean
     */
    public get settingsBlockAccountsPage() {
        return this._settingsBlockAccountsPage;
    };
    /**
     * Sets the settingsBlockAccountsPage property value. Indicates whether or not to block access to Accounts in Settings app.
     * @param value Value to set for the settingsBlockAccountsPage property.
     */
    public set settingsBlockAccountsPage(value: boolean | undefined) {
        this._settingsBlockAccountsPage = value;
    };
    /**
     * Gets the settingsBlockAddProvisioningPackage property value. Indicates whether or not to block the user from installing provisioning packages.
     * @returns a boolean
     */
    public get settingsBlockAddProvisioningPackage() {
        return this._settingsBlockAddProvisioningPackage;
    };
    /**
     * Sets the settingsBlockAddProvisioningPackage property value. Indicates whether or not to block the user from installing provisioning packages.
     * @param value Value to set for the settingsBlockAddProvisioningPackage property.
     */
    public set settingsBlockAddProvisioningPackage(value: boolean | undefined) {
        this._settingsBlockAddProvisioningPackage = value;
    };
    /**
     * Gets the settingsBlockAppsPage property value. Indicates whether or not to block access to Apps in Settings app.
     * @returns a boolean
     */
    public get settingsBlockAppsPage() {
        return this._settingsBlockAppsPage;
    };
    /**
     * Sets the settingsBlockAppsPage property value. Indicates whether or not to block access to Apps in Settings app.
     * @param value Value to set for the settingsBlockAppsPage property.
     */
    public set settingsBlockAppsPage(value: boolean | undefined) {
        this._settingsBlockAppsPage = value;
    };
    /**
     * Gets the settingsBlockChangeLanguage property value. Indicates whether or not to block the user from changing the language settings.
     * @returns a boolean
     */
    public get settingsBlockChangeLanguage() {
        return this._settingsBlockChangeLanguage;
    };
    /**
     * Sets the settingsBlockChangeLanguage property value. Indicates whether or not to block the user from changing the language settings.
     * @param value Value to set for the settingsBlockChangeLanguage property.
     */
    public set settingsBlockChangeLanguage(value: boolean | undefined) {
        this._settingsBlockChangeLanguage = value;
    };
    /**
     * Gets the settingsBlockChangePowerSleep property value. Indicates whether or not to block the user from changing power and sleep settings.
     * @returns a boolean
     */
    public get settingsBlockChangePowerSleep() {
        return this._settingsBlockChangePowerSleep;
    };
    /**
     * Sets the settingsBlockChangePowerSleep property value. Indicates whether or not to block the user from changing power and sleep settings.
     * @param value Value to set for the settingsBlockChangePowerSleep property.
     */
    public set settingsBlockChangePowerSleep(value: boolean | undefined) {
        this._settingsBlockChangePowerSleep = value;
    };
    /**
     * Gets the settingsBlockChangeRegion property value. Indicates whether or not to block the user from changing the region settings.
     * @returns a boolean
     */
    public get settingsBlockChangeRegion() {
        return this._settingsBlockChangeRegion;
    };
    /**
     * Sets the settingsBlockChangeRegion property value. Indicates whether or not to block the user from changing the region settings.
     * @param value Value to set for the settingsBlockChangeRegion property.
     */
    public set settingsBlockChangeRegion(value: boolean | undefined) {
        this._settingsBlockChangeRegion = value;
    };
    /**
     * Gets the settingsBlockChangeSystemTime property value. Indicates whether or not to block the user from changing date and time settings.
     * @returns a boolean
     */
    public get settingsBlockChangeSystemTime() {
        return this._settingsBlockChangeSystemTime;
    };
    /**
     * Sets the settingsBlockChangeSystemTime property value. Indicates whether or not to block the user from changing date and time settings.
     * @param value Value to set for the settingsBlockChangeSystemTime property.
     */
    public set settingsBlockChangeSystemTime(value: boolean | undefined) {
        this._settingsBlockChangeSystemTime = value;
    };
    /**
     * Gets the settingsBlockDevicesPage property value. Indicates whether or not to block access to Devices in Settings app.
     * @returns a boolean
     */
    public get settingsBlockDevicesPage() {
        return this._settingsBlockDevicesPage;
    };
    /**
     * Sets the settingsBlockDevicesPage property value. Indicates whether or not to block access to Devices in Settings app.
     * @param value Value to set for the settingsBlockDevicesPage property.
     */
    public set settingsBlockDevicesPage(value: boolean | undefined) {
        this._settingsBlockDevicesPage = value;
    };
    /**
     * Gets the settingsBlockEaseOfAccessPage property value. Indicates whether or not to block access to Ease of Access in Settings app.
     * @returns a boolean
     */
    public get settingsBlockEaseOfAccessPage() {
        return this._settingsBlockEaseOfAccessPage;
    };
    /**
     * Sets the settingsBlockEaseOfAccessPage property value. Indicates whether or not to block access to Ease of Access in Settings app.
     * @param value Value to set for the settingsBlockEaseOfAccessPage property.
     */
    public set settingsBlockEaseOfAccessPage(value: boolean | undefined) {
        this._settingsBlockEaseOfAccessPage = value;
    };
    /**
     * Gets the settingsBlockEditDeviceName property value. Indicates whether or not to block the user from editing the device name.
     * @returns a boolean
     */
    public get settingsBlockEditDeviceName() {
        return this._settingsBlockEditDeviceName;
    };
    /**
     * Sets the settingsBlockEditDeviceName property value. Indicates whether or not to block the user from editing the device name.
     * @param value Value to set for the settingsBlockEditDeviceName property.
     */
    public set settingsBlockEditDeviceName(value: boolean | undefined) {
        this._settingsBlockEditDeviceName = value;
    };
    /**
     * Gets the settingsBlockGamingPage property value. Indicates whether or not to block access to Gaming in Settings app.
     * @returns a boolean
     */
    public get settingsBlockGamingPage() {
        return this._settingsBlockGamingPage;
    };
    /**
     * Sets the settingsBlockGamingPage property value. Indicates whether or not to block access to Gaming in Settings app.
     * @param value Value to set for the settingsBlockGamingPage property.
     */
    public set settingsBlockGamingPage(value: boolean | undefined) {
        this._settingsBlockGamingPage = value;
    };
    /**
     * Gets the settingsBlockNetworkInternetPage property value. Indicates whether or not to block access to Network & Internet in Settings app.
     * @returns a boolean
     */
    public get settingsBlockNetworkInternetPage() {
        return this._settingsBlockNetworkInternetPage;
    };
    /**
     * Sets the settingsBlockNetworkInternetPage property value. Indicates whether or not to block access to Network & Internet in Settings app.
     * @param value Value to set for the settingsBlockNetworkInternetPage property.
     */
    public set settingsBlockNetworkInternetPage(value: boolean | undefined) {
        this._settingsBlockNetworkInternetPage = value;
    };
    /**
     * Gets the settingsBlockPersonalizationPage property value. Indicates whether or not to block access to Personalization in Settings app.
     * @returns a boolean
     */
    public get settingsBlockPersonalizationPage() {
        return this._settingsBlockPersonalizationPage;
    };
    /**
     * Sets the settingsBlockPersonalizationPage property value. Indicates whether or not to block access to Personalization in Settings app.
     * @param value Value to set for the settingsBlockPersonalizationPage property.
     */
    public set settingsBlockPersonalizationPage(value: boolean | undefined) {
        this._settingsBlockPersonalizationPage = value;
    };
    /**
     * Gets the settingsBlockPrivacyPage property value. Indicates whether or not to block access to Privacy in Settings app.
     * @returns a boolean
     */
    public get settingsBlockPrivacyPage() {
        return this._settingsBlockPrivacyPage;
    };
    /**
     * Sets the settingsBlockPrivacyPage property value. Indicates whether or not to block access to Privacy in Settings app.
     * @param value Value to set for the settingsBlockPrivacyPage property.
     */
    public set settingsBlockPrivacyPage(value: boolean | undefined) {
        this._settingsBlockPrivacyPage = value;
    };
    /**
     * Gets the settingsBlockRemoveProvisioningPackage property value. Indicates whether or not to block the runtime configuration agent from removing provisioning packages.
     * @returns a boolean
     */
    public get settingsBlockRemoveProvisioningPackage() {
        return this._settingsBlockRemoveProvisioningPackage;
    };
    /**
     * Sets the settingsBlockRemoveProvisioningPackage property value. Indicates whether or not to block the runtime configuration agent from removing provisioning packages.
     * @param value Value to set for the settingsBlockRemoveProvisioningPackage property.
     */
    public set settingsBlockRemoveProvisioningPackage(value: boolean | undefined) {
        this._settingsBlockRemoveProvisioningPackage = value;
    };
    /**
     * Gets the settingsBlockSettingsApp property value. Indicates whether or not to block access to Settings app.
     * @returns a boolean
     */
    public get settingsBlockSettingsApp() {
        return this._settingsBlockSettingsApp;
    };
    /**
     * Sets the settingsBlockSettingsApp property value. Indicates whether or not to block access to Settings app.
     * @param value Value to set for the settingsBlockSettingsApp property.
     */
    public set settingsBlockSettingsApp(value: boolean | undefined) {
        this._settingsBlockSettingsApp = value;
    };
    /**
     * Gets the settingsBlockSystemPage property value. Indicates whether or not to block access to System in Settings app.
     * @returns a boolean
     */
    public get settingsBlockSystemPage() {
        return this._settingsBlockSystemPage;
    };
    /**
     * Sets the settingsBlockSystemPage property value. Indicates whether or not to block access to System in Settings app.
     * @param value Value to set for the settingsBlockSystemPage property.
     */
    public set settingsBlockSystemPage(value: boolean | undefined) {
        this._settingsBlockSystemPage = value;
    };
    /**
     * Gets the settingsBlockTimeLanguagePage property value. Indicates whether or not to block access to Time & Language in Settings app.
     * @returns a boolean
     */
    public get settingsBlockTimeLanguagePage() {
        return this._settingsBlockTimeLanguagePage;
    };
    /**
     * Sets the settingsBlockTimeLanguagePage property value. Indicates whether or not to block access to Time & Language in Settings app.
     * @param value Value to set for the settingsBlockTimeLanguagePage property.
     */
    public set settingsBlockTimeLanguagePage(value: boolean | undefined) {
        this._settingsBlockTimeLanguagePage = value;
    };
    /**
     * Gets the settingsBlockUpdateSecurityPage property value. Indicates whether or not to block access to Update & Security in Settings app.
     * @returns a boolean
     */
    public get settingsBlockUpdateSecurityPage() {
        return this._settingsBlockUpdateSecurityPage;
    };
    /**
     * Sets the settingsBlockUpdateSecurityPage property value. Indicates whether or not to block access to Update & Security in Settings app.
     * @param value Value to set for the settingsBlockUpdateSecurityPage property.
     */
    public set settingsBlockUpdateSecurityPage(value: boolean | undefined) {
        this._settingsBlockUpdateSecurityPage = value;
    };
    /**
     * Gets the sharedUserAppDataAllowed property value. Indicates whether or not to block multiple users of the same app to share data.
     * @returns a boolean
     */
    public get sharedUserAppDataAllowed() {
        return this._sharedUserAppDataAllowed;
    };
    /**
     * Sets the sharedUserAppDataAllowed property value. Indicates whether or not to block multiple users of the same app to share data.
     * @param value Value to set for the sharedUserAppDataAllowed property.
     */
    public set sharedUserAppDataAllowed(value: boolean | undefined) {
        this._sharedUserAppDataAllowed = value;
    };
    /**
     * Gets the smartScreenBlockPromptOverride property value. Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites.
     * @returns a boolean
     */
    public get smartScreenBlockPromptOverride() {
        return this._smartScreenBlockPromptOverride;
    };
    /**
     * Sets the smartScreenBlockPromptOverride property value. Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites.
     * @param value Value to set for the smartScreenBlockPromptOverride property.
     */
    public set smartScreenBlockPromptOverride(value: boolean | undefined) {
        this._smartScreenBlockPromptOverride = value;
    };
    /**
     * Gets the smartScreenBlockPromptOverrideForFiles property value. Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files
     * @returns a boolean
     */
    public get smartScreenBlockPromptOverrideForFiles() {
        return this._smartScreenBlockPromptOverrideForFiles;
    };
    /**
     * Sets the smartScreenBlockPromptOverrideForFiles property value. Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files
     * @param value Value to set for the smartScreenBlockPromptOverrideForFiles property.
     */
    public set smartScreenBlockPromptOverrideForFiles(value: boolean | undefined) {
        this._smartScreenBlockPromptOverrideForFiles = value;
    };
    /**
     * Gets the smartScreenEnableAppInstallControl property value. This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT Admins to control whether users are allowed to install apps from places other than the Store.
     * @returns a boolean
     */
    public get smartScreenEnableAppInstallControl() {
        return this._smartScreenEnableAppInstallControl;
    };
    /**
     * Sets the smartScreenEnableAppInstallControl property value. This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT Admins to control whether users are allowed to install apps from places other than the Store.
     * @param value Value to set for the smartScreenEnableAppInstallControl property.
     */
    public set smartScreenEnableAppInstallControl(value: boolean | undefined) {
        this._smartScreenEnableAppInstallControl = value;
    };
    /**
     * Gets the startBlockUnpinningAppsFromTaskbar property value. Indicates whether or not to block the user from unpinning apps from taskbar.
     * @returns a boolean
     */
    public get startBlockUnpinningAppsFromTaskbar() {
        return this._startBlockUnpinningAppsFromTaskbar;
    };
    /**
     * Sets the startBlockUnpinningAppsFromTaskbar property value. Indicates whether or not to block the user from unpinning apps from taskbar.
     * @param value Value to set for the startBlockUnpinningAppsFromTaskbar property.
     */
    public set startBlockUnpinningAppsFromTaskbar(value: boolean | undefined) {
        this._startBlockUnpinningAppsFromTaskbar = value;
    };
    /**
     * Gets the startMenuAppListVisibility property value. Setting the value of this collapses the app list, removes the app list entirely, or disables the corresponding toggle in the Settings app. Possible values are: userDefined, collapse, remove, disableSettingsApp.
     * @returns a windowsStartMenuAppListVisibilityType
     */
    public get startMenuAppListVisibility() {
        return this._startMenuAppListVisibility;
    };
    /**
     * Sets the startMenuAppListVisibility property value. Setting the value of this collapses the app list, removes the app list entirely, or disables the corresponding toggle in the Settings app. Possible values are: userDefined, collapse, remove, disableSettingsApp.
     * @param value Value to set for the startMenuAppListVisibility property.
     */
    public set startMenuAppListVisibility(value: WindowsStartMenuAppListVisibilityType | undefined) {
        this._startMenuAppListVisibility = value;
    };
    /**
     * Gets the startMenuHideChangeAccountSettings property value. Enabling this policy hides the change account setting from appearing in the user tile in the start menu.
     * @returns a boolean
     */
    public get startMenuHideChangeAccountSettings() {
        return this._startMenuHideChangeAccountSettings;
    };
    /**
     * Sets the startMenuHideChangeAccountSettings property value. Enabling this policy hides the change account setting from appearing in the user tile in the start menu.
     * @param value Value to set for the startMenuHideChangeAccountSettings property.
     */
    public set startMenuHideChangeAccountSettings(value: boolean | undefined) {
        this._startMenuHideChangeAccountSettings = value;
    };
    /**
     * Gets the startMenuHideFrequentlyUsedApps property value. Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in the Settings app.
     * @returns a boolean
     */
    public get startMenuHideFrequentlyUsedApps() {
        return this._startMenuHideFrequentlyUsedApps;
    };
    /**
     * Sets the startMenuHideFrequentlyUsedApps property value. Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in the Settings app.
     * @param value Value to set for the startMenuHideFrequentlyUsedApps property.
     */
    public set startMenuHideFrequentlyUsedApps(value: boolean | undefined) {
        this._startMenuHideFrequentlyUsedApps = value;
    };
    /**
     * Gets the startMenuHideHibernate property value. Enabling this policy hides hibernate from appearing in the power button in the start menu.
     * @returns a boolean
     */
    public get startMenuHideHibernate() {
        return this._startMenuHideHibernate;
    };
    /**
     * Sets the startMenuHideHibernate property value. Enabling this policy hides hibernate from appearing in the power button in the start menu.
     * @param value Value to set for the startMenuHideHibernate property.
     */
    public set startMenuHideHibernate(value: boolean | undefined) {
        this._startMenuHideHibernate = value;
    };
    /**
     * Gets the startMenuHideLock property value. Enabling this policy hides lock from appearing in the user tile in the start menu.
     * @returns a boolean
     */
    public get startMenuHideLock() {
        return this._startMenuHideLock;
    };
    /**
     * Sets the startMenuHideLock property value. Enabling this policy hides lock from appearing in the user tile in the start menu.
     * @param value Value to set for the startMenuHideLock property.
     */
    public set startMenuHideLock(value: boolean | undefined) {
        this._startMenuHideLock = value;
    };
    /**
     * Gets the startMenuHidePowerButton property value. Enabling this policy hides the power button from appearing in the start menu.
     * @returns a boolean
     */
    public get startMenuHidePowerButton() {
        return this._startMenuHidePowerButton;
    };
    /**
     * Sets the startMenuHidePowerButton property value. Enabling this policy hides the power button from appearing in the start menu.
     * @param value Value to set for the startMenuHidePowerButton property.
     */
    public set startMenuHidePowerButton(value: boolean | undefined) {
        this._startMenuHidePowerButton = value;
    };
    /**
     * Gets the startMenuHideRecentJumpLists property value. Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding toggle in the Settings app.
     * @returns a boolean
     */
    public get startMenuHideRecentJumpLists() {
        return this._startMenuHideRecentJumpLists;
    };
    /**
     * Sets the startMenuHideRecentJumpLists property value. Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding toggle in the Settings app.
     * @param value Value to set for the startMenuHideRecentJumpLists property.
     */
    public set startMenuHideRecentJumpLists(value: boolean | undefined) {
        this._startMenuHideRecentJumpLists = value;
    };
    /**
     * Gets the startMenuHideRecentlyAddedApps property value. Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle in the Settings app.
     * @returns a boolean
     */
    public get startMenuHideRecentlyAddedApps() {
        return this._startMenuHideRecentlyAddedApps;
    };
    /**
     * Sets the startMenuHideRecentlyAddedApps property value. Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle in the Settings app.
     * @param value Value to set for the startMenuHideRecentlyAddedApps property.
     */
    public set startMenuHideRecentlyAddedApps(value: boolean | undefined) {
        this._startMenuHideRecentlyAddedApps = value;
    };
    /**
     * Gets the startMenuHideRestartOptions property value. Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu.
     * @returns a boolean
     */
    public get startMenuHideRestartOptions() {
        return this._startMenuHideRestartOptions;
    };
    /**
     * Sets the startMenuHideRestartOptions property value. Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu.
     * @param value Value to set for the startMenuHideRestartOptions property.
     */
    public set startMenuHideRestartOptions(value: boolean | undefined) {
        this._startMenuHideRestartOptions = value;
    };
    /**
     * Gets the startMenuHideShutDown property value. Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu.
     * @returns a boolean
     */
    public get startMenuHideShutDown() {
        return this._startMenuHideShutDown;
    };
    /**
     * Sets the startMenuHideShutDown property value. Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu.
     * @param value Value to set for the startMenuHideShutDown property.
     */
    public set startMenuHideShutDown(value: boolean | undefined) {
        this._startMenuHideShutDown = value;
    };
    /**
     * Gets the startMenuHideSignOut property value. Enabling this policy hides sign out from appearing in the user tile in the start menu.
     * @returns a boolean
     */
    public get startMenuHideSignOut() {
        return this._startMenuHideSignOut;
    };
    /**
     * Sets the startMenuHideSignOut property value. Enabling this policy hides sign out from appearing in the user tile in the start menu.
     * @param value Value to set for the startMenuHideSignOut property.
     */
    public set startMenuHideSignOut(value: boolean | undefined) {
        this._startMenuHideSignOut = value;
    };
    /**
     * Gets the startMenuHideSleep property value. Enabling this policy hides sleep from appearing in the power button in the start menu.
     * @returns a boolean
     */
    public get startMenuHideSleep() {
        return this._startMenuHideSleep;
    };
    /**
     * Sets the startMenuHideSleep property value. Enabling this policy hides sleep from appearing in the power button in the start menu.
     * @param value Value to set for the startMenuHideSleep property.
     */
    public set startMenuHideSleep(value: boolean | undefined) {
        this._startMenuHideSleep = value;
    };
    /**
     * Gets the startMenuHideSwitchAccount property value. Enabling this policy hides switch account from appearing in the user tile in the start menu.
     * @returns a boolean
     */
    public get startMenuHideSwitchAccount() {
        return this._startMenuHideSwitchAccount;
    };
    /**
     * Sets the startMenuHideSwitchAccount property value. Enabling this policy hides switch account from appearing in the user tile in the start menu.
     * @param value Value to set for the startMenuHideSwitchAccount property.
     */
    public set startMenuHideSwitchAccount(value: boolean | undefined) {
        this._startMenuHideSwitchAccount = value;
    };
    /**
     * Gets the startMenuHideUserTile property value. Enabling this policy hides the user tile from appearing in the start menu.
     * @returns a boolean
     */
    public get startMenuHideUserTile() {
        return this._startMenuHideUserTile;
    };
    /**
     * Sets the startMenuHideUserTile property value. Enabling this policy hides the user tile from appearing in the start menu.
     * @param value Value to set for the startMenuHideUserTile property.
     */
    public set startMenuHideUserTile(value: boolean | undefined) {
        this._startMenuHideUserTile = value;
    };
    /**
     * Gets the startMenuLayoutEdgeAssetsXml property value. This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is modified. The value should be a UTF-8 Base64 encoded byte array.
     * @returns a binary
     */
    public get startMenuLayoutEdgeAssetsXml() {
        return this._startMenuLayoutEdgeAssetsXml;
    };
    /**
     * Sets the startMenuLayoutEdgeAssetsXml property value. This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is modified. The value should be a UTF-8 Base64 encoded byte array.
     * @param value Value to set for the startMenuLayoutEdgeAssetsXml property.
     */
    public set startMenuLayoutEdgeAssetsXml(value: string | undefined) {
        this._startMenuLayoutEdgeAssetsXml = value;
    };
    /**
     * Gets the startMenuLayoutXml property value. Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format.
     * @returns a binary
     */
    public get startMenuLayoutXml() {
        return this._startMenuLayoutXml;
    };
    /**
     * Sets the startMenuLayoutXml property value. Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format.
     * @param value Value to set for the startMenuLayoutXml property.
     */
    public set startMenuLayoutXml(value: string | undefined) {
        this._startMenuLayoutXml = value;
    };
    /**
     * Gets the startMenuMode property value. Allows admins to decide how the Start menu is displayed. Possible values are: userDefined, fullScreen, nonFullScreen.
     * @returns a windowsStartMenuModeType
     */
    public get startMenuMode() {
        return this._startMenuMode;
    };
    /**
     * Sets the startMenuMode property value. Allows admins to decide how the Start menu is displayed. Possible values are: userDefined, fullScreen, nonFullScreen.
     * @param value Value to set for the startMenuMode property.
     */
    public set startMenuMode(value: WindowsStartMenuModeType | undefined) {
        this._startMenuMode = value;
    };
    /**
     * Gets the startMenuPinnedFolderDocuments property value. Enforces the visibility (Show/Hide) of the Documents folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderDocuments() {
        return this._startMenuPinnedFolderDocuments;
    };
    /**
     * Sets the startMenuPinnedFolderDocuments property value. Enforces the visibility (Show/Hide) of the Documents folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderDocuments property.
     */
    public set startMenuPinnedFolderDocuments(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderDocuments = value;
    };
    /**
     * Gets the startMenuPinnedFolderDownloads property value. Enforces the visibility (Show/Hide) of the Downloads folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderDownloads() {
        return this._startMenuPinnedFolderDownloads;
    };
    /**
     * Sets the startMenuPinnedFolderDownloads property value. Enforces the visibility (Show/Hide) of the Downloads folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderDownloads property.
     */
    public set startMenuPinnedFolderDownloads(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderDownloads = value;
    };
    /**
     * Gets the startMenuPinnedFolderFileExplorer property value. Enforces the visibility (Show/Hide) of the FileExplorer shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderFileExplorer() {
        return this._startMenuPinnedFolderFileExplorer;
    };
    /**
     * Sets the startMenuPinnedFolderFileExplorer property value. Enforces the visibility (Show/Hide) of the FileExplorer shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderFileExplorer property.
     */
    public set startMenuPinnedFolderFileExplorer(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderFileExplorer = value;
    };
    /**
     * Gets the startMenuPinnedFolderHomeGroup property value. Enforces the visibility (Show/Hide) of the HomeGroup folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderHomeGroup() {
        return this._startMenuPinnedFolderHomeGroup;
    };
    /**
     * Sets the startMenuPinnedFolderHomeGroup property value. Enforces the visibility (Show/Hide) of the HomeGroup folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderHomeGroup property.
     */
    public set startMenuPinnedFolderHomeGroup(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderHomeGroup = value;
    };
    /**
     * Gets the startMenuPinnedFolderMusic property value. Enforces the visibility (Show/Hide) of the Music folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderMusic() {
        return this._startMenuPinnedFolderMusic;
    };
    /**
     * Sets the startMenuPinnedFolderMusic property value. Enforces the visibility (Show/Hide) of the Music folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderMusic property.
     */
    public set startMenuPinnedFolderMusic(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderMusic = value;
    };
    /**
     * Gets the startMenuPinnedFolderNetwork property value. Enforces the visibility (Show/Hide) of the Network folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderNetwork() {
        return this._startMenuPinnedFolderNetwork;
    };
    /**
     * Sets the startMenuPinnedFolderNetwork property value. Enforces the visibility (Show/Hide) of the Network folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderNetwork property.
     */
    public set startMenuPinnedFolderNetwork(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderNetwork = value;
    };
    /**
     * Gets the startMenuPinnedFolderPersonalFolder property value. Enforces the visibility (Show/Hide) of the PersonalFolder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderPersonalFolder() {
        return this._startMenuPinnedFolderPersonalFolder;
    };
    /**
     * Sets the startMenuPinnedFolderPersonalFolder property value. Enforces the visibility (Show/Hide) of the PersonalFolder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderPersonalFolder property.
     */
    public set startMenuPinnedFolderPersonalFolder(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderPersonalFolder = value;
    };
    /**
     * Gets the startMenuPinnedFolderPictures property value. Enforces the visibility (Show/Hide) of the Pictures folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderPictures() {
        return this._startMenuPinnedFolderPictures;
    };
    /**
     * Sets the startMenuPinnedFolderPictures property value. Enforces the visibility (Show/Hide) of the Pictures folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderPictures property.
     */
    public set startMenuPinnedFolderPictures(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderPictures = value;
    };
    /**
     * Gets the startMenuPinnedFolderSettings property value. Enforces the visibility (Show/Hide) of the Settings folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderSettings() {
        return this._startMenuPinnedFolderSettings;
    };
    /**
     * Sets the startMenuPinnedFolderSettings property value. Enforces the visibility (Show/Hide) of the Settings folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderSettings property.
     */
    public set startMenuPinnedFolderSettings(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderSettings = value;
    };
    /**
     * Gets the startMenuPinnedFolderVideos property value. Enforces the visibility (Show/Hide) of the Videos folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @returns a visibilitySetting
     */
    public get startMenuPinnedFolderVideos() {
        return this._startMenuPinnedFolderVideos;
    };
    /**
     * Sets the startMenuPinnedFolderVideos property value. Enforces the visibility (Show/Hide) of the Videos folder shortcut on the Start menu. Possible values are: notConfigured, hide, show.
     * @param value Value to set for the startMenuPinnedFolderVideos property.
     */
    public set startMenuPinnedFolderVideos(value: VisibilitySetting | undefined) {
        this._startMenuPinnedFolderVideos = value;
    };
    /**
     * Gets the storageBlockRemovableStorage property value. Indicates whether or not to Block the user from using removable storage.
     * @returns a boolean
     */
    public get storageBlockRemovableStorage() {
        return this._storageBlockRemovableStorage;
    };
    /**
     * Sets the storageBlockRemovableStorage property value. Indicates whether or not to Block the user from using removable storage.
     * @param value Value to set for the storageBlockRemovableStorage property.
     */
    public set storageBlockRemovableStorage(value: boolean | undefined) {
        this._storageBlockRemovableStorage = value;
    };
    /**
     * Gets the storageRequireMobileDeviceEncryption property value. Indicating whether or not to require encryption on a mobile device.
     * @returns a boolean
     */
    public get storageRequireMobileDeviceEncryption() {
        return this._storageRequireMobileDeviceEncryption;
    };
    /**
     * Sets the storageRequireMobileDeviceEncryption property value. Indicating whether or not to require encryption on a mobile device.
     * @param value Value to set for the storageRequireMobileDeviceEncryption property.
     */
    public set storageRequireMobileDeviceEncryption(value: boolean | undefined) {
        this._storageRequireMobileDeviceEncryption = value;
    };
    /**
     * Gets the storageRestrictAppDataToSystemVolume property value. Indicates whether application data is restricted to the system drive.
     * @returns a boolean
     */
    public get storageRestrictAppDataToSystemVolume() {
        return this._storageRestrictAppDataToSystemVolume;
    };
    /**
     * Sets the storageRestrictAppDataToSystemVolume property value. Indicates whether application data is restricted to the system drive.
     * @param value Value to set for the storageRestrictAppDataToSystemVolume property.
     */
    public set storageRestrictAppDataToSystemVolume(value: boolean | undefined) {
        this._storageRestrictAppDataToSystemVolume = value;
    };
    /**
     * Gets the storageRestrictAppInstallToSystemVolume property value. Indicates whether the installation of applications is restricted to the system drive.
     * @returns a boolean
     */
    public get storageRestrictAppInstallToSystemVolume() {
        return this._storageRestrictAppInstallToSystemVolume;
    };
    /**
     * Sets the storageRestrictAppInstallToSystemVolume property value. Indicates whether the installation of applications is restricted to the system drive.
     * @param value Value to set for the storageRestrictAppInstallToSystemVolume property.
     */
    public set storageRestrictAppInstallToSystemVolume(value: boolean | undefined) {
        this._storageRestrictAppInstallToSystemVolume = value;
    };
    /**
     * Gets the tenantLockdownRequireNetworkDuringOutOfBoxExperience property value. Whether the device is required to connect to the network.
     * @returns a boolean
     */
    public get tenantLockdownRequireNetworkDuringOutOfBoxExperience() {
        return this._tenantLockdownRequireNetworkDuringOutOfBoxExperience;
    };
    /**
     * Sets the tenantLockdownRequireNetworkDuringOutOfBoxExperience property value. Whether the device is required to connect to the network.
     * @param value Value to set for the tenantLockdownRequireNetworkDuringOutOfBoxExperience property.
     */
    public set tenantLockdownRequireNetworkDuringOutOfBoxExperience(value: boolean | undefined) {
        this._tenantLockdownRequireNetworkDuringOutOfBoxExperience = value;
    };
    /**
     * Gets the usbBlocked property value. Indicates whether or not to Block the user from USB connection.
     * @returns a boolean
     */
    public get usbBlocked() {
        return this._usbBlocked;
    };
    /**
     * Sets the usbBlocked property value. Indicates whether or not to Block the user from USB connection.
     * @param value Value to set for the usbBlocked property.
     */
    public set usbBlocked(value: boolean | undefined) {
        this._usbBlocked = value;
    };
    /**
     * Gets the voiceRecordingBlocked property value. Indicates whether or not to Block the user from voice recording.
     * @returns a boolean
     */
    public get voiceRecordingBlocked() {
        return this._voiceRecordingBlocked;
    };
    /**
     * Sets the voiceRecordingBlocked property value. Indicates whether or not to Block the user from voice recording.
     * @param value Value to set for the voiceRecordingBlocked property.
     */
    public set voiceRecordingBlocked(value: boolean | undefined) {
        this._voiceRecordingBlocked = value;
    };
    /**
     * Gets the webRtcBlockLocalhostIpAddress property value. Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC
     * @returns a boolean
     */
    public get webRtcBlockLocalhostIpAddress() {
        return this._webRtcBlockLocalhostIpAddress;
    };
    /**
     * Sets the webRtcBlockLocalhostIpAddress property value. Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC
     * @param value Value to set for the webRtcBlockLocalhostIpAddress property.
     */
    public set webRtcBlockLocalhostIpAddress(value: boolean | undefined) {
        this._webRtcBlockLocalhostIpAddress = value;
    };
    /**
     * Gets the wiFiBlockAutomaticConnectHotspots property value. Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
     * @returns a boolean
     */
    public get wiFiBlockAutomaticConnectHotspots() {
        return this._wiFiBlockAutomaticConnectHotspots;
    };
    /**
     * Sets the wiFiBlockAutomaticConnectHotspots property value. Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
     * @param value Value to set for the wiFiBlockAutomaticConnectHotspots property.
     */
    public set wiFiBlockAutomaticConnectHotspots(value: boolean | undefined) {
        this._wiFiBlockAutomaticConnectHotspots = value;
    };
    /**
     * Gets the wiFiBlocked property value. Indicates whether or not to Block the user from using Wi-Fi.
     * @returns a boolean
     */
    public get wiFiBlocked() {
        return this._wiFiBlocked;
    };
    /**
     * Sets the wiFiBlocked property value. Indicates whether or not to Block the user from using Wi-Fi.
     * @param value Value to set for the wiFiBlocked property.
     */
    public set wiFiBlocked(value: boolean | undefined) {
        this._wiFiBlocked = value;
    };
    /**
     * Gets the wiFiBlockManualConfiguration property value. Indicates whether or not to Block the user from using Wi-Fi manual configuration.
     * @returns a boolean
     */
    public get wiFiBlockManualConfiguration() {
        return this._wiFiBlockManualConfiguration;
    };
    /**
     * Sets the wiFiBlockManualConfiguration property value. Indicates whether or not to Block the user from using Wi-Fi manual configuration.
     * @param value Value to set for the wiFiBlockManualConfiguration property.
     */
    public set wiFiBlockManualConfiguration(value: boolean | undefined) {
        this._wiFiBlockManualConfiguration = value;
    };
    /**
     * Gets the wiFiScanInterval property value. Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low frequency. Valid values 1 to 500
     * @returns a integer
     */
    public get wiFiScanInterval() {
        return this._wiFiScanInterval;
    };
    /**
     * Sets the wiFiScanInterval property value. Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low frequency. Valid values 1 to 500
     * @param value Value to set for the wiFiScanInterval property.
     */
    public set wiFiScanInterval(value: number | undefined) {
        this._wiFiScanInterval = value;
    };
    /**
     * Gets the windowsSpotlightBlockConsumerSpecificFeatures property value. Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership notifications, Post-OOBE app install and redirect tiles.
     * @returns a boolean
     */
    public get windowsSpotlightBlockConsumerSpecificFeatures() {
        return this._windowsSpotlightBlockConsumerSpecificFeatures;
    };
    /**
     * Sets the windowsSpotlightBlockConsumerSpecificFeatures property value. Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership notifications, Post-OOBE app install and redirect tiles.
     * @param value Value to set for the windowsSpotlightBlockConsumerSpecificFeatures property.
     */
    public set windowsSpotlightBlockConsumerSpecificFeatures(value: boolean | undefined) {
        this._windowsSpotlightBlockConsumerSpecificFeatures = value;
    };
    /**
     * Gets the windowsSpotlightBlocked property value. Allows IT admins to turn off all Windows Spotlight features
     * @returns a boolean
     */
    public get windowsSpotlightBlocked() {
        return this._windowsSpotlightBlocked;
    };
    /**
     * Sets the windowsSpotlightBlocked property value. Allows IT admins to turn off all Windows Spotlight features
     * @param value Value to set for the windowsSpotlightBlocked property.
     */
    public set windowsSpotlightBlocked(value: boolean | undefined) {
        this._windowsSpotlightBlocked = value;
    };
    /**
     * Gets the windowsSpotlightBlockOnActionCenter property value. Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce users to what is new or changed
     * @returns a boolean
     */
    public get windowsSpotlightBlockOnActionCenter() {
        return this._windowsSpotlightBlockOnActionCenter;
    };
    /**
     * Sets the windowsSpotlightBlockOnActionCenter property value. Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce users to what is new or changed
     * @param value Value to set for the windowsSpotlightBlockOnActionCenter property.
     */
    public set windowsSpotlightBlockOnActionCenter(value: boolean | undefined) {
        this._windowsSpotlightBlockOnActionCenter = value;
    };
    /**
     * Gets the windowsSpotlightBlockTailoredExperiences property value. Block personalized content in Windows spotlight based on user’s device usage.
     * @returns a boolean
     */
    public get windowsSpotlightBlockTailoredExperiences() {
        return this._windowsSpotlightBlockTailoredExperiences;
    };
    /**
     * Sets the windowsSpotlightBlockTailoredExperiences property value. Block personalized content in Windows spotlight based on user’s device usage.
     * @param value Value to set for the windowsSpotlightBlockTailoredExperiences property.
     */
    public set windowsSpotlightBlockTailoredExperiences(value: boolean | undefined) {
        this._windowsSpotlightBlockTailoredExperiences = value;
    };
    /**
     * Gets the windowsSpotlightBlockThirdPartyNotifications property value. Block third party content delivered via Windows Spotlight
     * @returns a boolean
     */
    public get windowsSpotlightBlockThirdPartyNotifications() {
        return this._windowsSpotlightBlockThirdPartyNotifications;
    };
    /**
     * Sets the windowsSpotlightBlockThirdPartyNotifications property value. Block third party content delivered via Windows Spotlight
     * @param value Value to set for the windowsSpotlightBlockThirdPartyNotifications property.
     */
    public set windowsSpotlightBlockThirdPartyNotifications(value: boolean | undefined) {
        this._windowsSpotlightBlockThirdPartyNotifications = value;
    };
    /**
     * Gets the windowsSpotlightBlockWelcomeExperience property value. Block Windows Spotlight Windows welcome experience
     * @returns a boolean
     */
    public get windowsSpotlightBlockWelcomeExperience() {
        return this._windowsSpotlightBlockWelcomeExperience;
    };
    /**
     * Sets the windowsSpotlightBlockWelcomeExperience property value. Block Windows Spotlight Windows welcome experience
     * @param value Value to set for the windowsSpotlightBlockWelcomeExperience property.
     */
    public set windowsSpotlightBlockWelcomeExperience(value: boolean | undefined) {
        this._windowsSpotlightBlockWelcomeExperience = value;
    };
    /**
     * Gets the windowsSpotlightBlockWindowsTips property value. Allows IT admins to turn off the popup of Windows Tips.
     * @returns a boolean
     */
    public get windowsSpotlightBlockWindowsTips() {
        return this._windowsSpotlightBlockWindowsTips;
    };
    /**
     * Sets the windowsSpotlightBlockWindowsTips property value. Allows IT admins to turn off the popup of Windows Tips.
     * @param value Value to set for the windowsSpotlightBlockWindowsTips property.
     */
    public set windowsSpotlightBlockWindowsTips(value: boolean | undefined) {
        this._windowsSpotlightBlockWindowsTips = value;
    };
    /**
     * Gets the windowsSpotlightConfigureOnLockScreen property value. Specifies the type of Spotlight. Possible values are: notConfigured, disabled, enabled.
     * @returns a windowsSpotlightEnablementSettings
     */
    public get windowsSpotlightConfigureOnLockScreen() {
        return this._windowsSpotlightConfigureOnLockScreen;
    };
    /**
     * Sets the windowsSpotlightConfigureOnLockScreen property value. Specifies the type of Spotlight. Possible values are: notConfigured, disabled, enabled.
     * @param value Value to set for the windowsSpotlightConfigureOnLockScreen property.
     */
    public set windowsSpotlightConfigureOnLockScreen(value: WindowsSpotlightEnablementSettings | undefined) {
        this._windowsSpotlightConfigureOnLockScreen = value;
    };
    /**
     * Gets the windowsStoreBlockAutoUpdate property value. Indicates whether or not to block automatic update of apps from Windows Store.
     * @returns a boolean
     */
    public get windowsStoreBlockAutoUpdate() {
        return this._windowsStoreBlockAutoUpdate;
    };
    /**
     * Sets the windowsStoreBlockAutoUpdate property value. Indicates whether or not to block automatic update of apps from Windows Store.
     * @param value Value to set for the windowsStoreBlockAutoUpdate property.
     */
    public set windowsStoreBlockAutoUpdate(value: boolean | undefined) {
        this._windowsStoreBlockAutoUpdate = value;
    };
    /**
     * Gets the windowsStoreBlocked property value. Indicates whether or not to Block the user from using the Windows store.
     * @returns a boolean
     */
    public get windowsStoreBlocked() {
        return this._windowsStoreBlocked;
    };
    /**
     * Sets the windowsStoreBlocked property value. Indicates whether or not to Block the user from using the Windows store.
     * @param value Value to set for the windowsStoreBlocked property.
     */
    public set windowsStoreBlocked(value: boolean | undefined) {
        this._windowsStoreBlocked = value;
    };
    /**
     * Gets the windowsStoreEnablePrivateStoreOnly property value. Indicates whether or not to enable Private Store Only.
     * @returns a boolean
     */
    public get windowsStoreEnablePrivateStoreOnly() {
        return this._windowsStoreEnablePrivateStoreOnly;
    };
    /**
     * Sets the windowsStoreEnablePrivateStoreOnly property value. Indicates whether or not to enable Private Store Only.
     * @param value Value to set for the windowsStoreEnablePrivateStoreOnly property.
     */
    public set windowsStoreEnablePrivateStoreOnly(value: boolean | undefined) {
        this._windowsStoreEnablePrivateStoreOnly = value;
    };
    /**
     * Gets the wirelessDisplayBlockProjectionToThisDevice property value. Indicates whether or not to allow other devices from discovering this PC for projection.
     * @returns a boolean
     */
    public get wirelessDisplayBlockProjectionToThisDevice() {
        return this._wirelessDisplayBlockProjectionToThisDevice;
    };
    /**
     * Sets the wirelessDisplayBlockProjectionToThisDevice property value. Indicates whether or not to allow other devices from discovering this PC for projection.
     * @param value Value to set for the wirelessDisplayBlockProjectionToThisDevice property.
     */
    public set wirelessDisplayBlockProjectionToThisDevice(value: boolean | undefined) {
        this._wirelessDisplayBlockProjectionToThisDevice = value;
    };
    /**
     * Gets the wirelessDisplayBlockUserInputFromReceiver property value. Indicates whether or not to allow user input from wireless display receiver.
     * @returns a boolean
     */
    public get wirelessDisplayBlockUserInputFromReceiver() {
        return this._wirelessDisplayBlockUserInputFromReceiver;
    };
    /**
     * Sets the wirelessDisplayBlockUserInputFromReceiver property value. Indicates whether or not to allow user input from wireless display receiver.
     * @param value Value to set for the wirelessDisplayBlockUserInputFromReceiver property.
     */
    public set wirelessDisplayBlockUserInputFromReceiver(value: boolean | undefined) {
        this._wirelessDisplayBlockUserInputFromReceiver = value;
    };
    /**
     * Gets the wirelessDisplayRequirePinForPairing property value. Indicates whether or not to require a PIN for new devices to initiate pairing.
     * @returns a boolean
     */
    public get wirelessDisplayRequirePinForPairing() {
        return this._wirelessDisplayRequirePinForPairing;
    };
    /**
     * Sets the wirelessDisplayRequirePinForPairing property value. Indicates whether or not to require a PIN for new devices to initiate pairing.
     * @param value Value to set for the wirelessDisplayRequirePinForPairing property.
     */
    public set wirelessDisplayRequirePinForPairing(value: boolean | undefined) {
        this._wirelessDisplayRequirePinForPairing = value;
    };
}
