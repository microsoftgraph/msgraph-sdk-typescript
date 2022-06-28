import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {createIosNetworkUsageRuleFromDiscriminatorValue} from './createIosNetworkUsageRuleFromDiscriminatorValue';
import {createMediaContentRatingAustraliaFromDiscriminatorValue} from './createMediaContentRatingAustraliaFromDiscriminatorValue';
import {createMediaContentRatingCanadaFromDiscriminatorValue} from './createMediaContentRatingCanadaFromDiscriminatorValue';
import {createMediaContentRatingFranceFromDiscriminatorValue} from './createMediaContentRatingFranceFromDiscriminatorValue';
import {createMediaContentRatingGermanyFromDiscriminatorValue} from './createMediaContentRatingGermanyFromDiscriminatorValue';
import {createMediaContentRatingIrelandFromDiscriminatorValue} from './createMediaContentRatingIrelandFromDiscriminatorValue';
import {createMediaContentRatingJapanFromDiscriminatorValue} from './createMediaContentRatingJapanFromDiscriminatorValue';
import {createMediaContentRatingNewZealandFromDiscriminatorValue} from './createMediaContentRatingNewZealandFromDiscriminatorValue';
import {createMediaContentRatingUnitedKingdomFromDiscriminatorValue} from './createMediaContentRatingUnitedKingdomFromDiscriminatorValue';
import {createMediaContentRatingUnitedStatesFromDiscriminatorValue} from './createMediaContentRatingUnitedStatesFromDiscriminatorValue';
import {AppListItemImpl, DeviceConfigurationImpl, IosNetworkUsageRuleImpl, MediaContentRatingAustraliaImpl, MediaContentRatingCanadaImpl, MediaContentRatingFranceImpl, MediaContentRatingGermanyImpl, MediaContentRatingIrelandImpl, MediaContentRatingJapanImpl, MediaContentRatingNewZealandImpl, MediaContentRatingUnitedKingdomImpl, MediaContentRatingUnitedStatesImpl} from './index';
import {IosGeneralDeviceConfiguration} from './iosGeneralDeviceConfiguration';
import {IosNetworkUsageRule} from './iosNetworkUsageRule';
import {MediaContentRatingAustralia} from './mediaContentRatingAustralia';
import {MediaContentRatingCanada} from './mediaContentRatingCanada';
import {MediaContentRatingFrance} from './mediaContentRatingFrance';
import {MediaContentRatingGermany} from './mediaContentRatingGermany';
import {MediaContentRatingIreland} from './mediaContentRatingIreland';
import {MediaContentRatingJapan} from './mediaContentRatingJapan';
import {MediaContentRatingNewZealand} from './mediaContentRatingNewZealand';
import {MediaContentRatingUnitedKingdom} from './mediaContentRatingUnitedKingdom';
import {MediaContentRatingUnitedStates} from './mediaContentRatingUnitedStates';
import {RatingAppsType} from './ratingAppsType';
import {RequiredPasswordType} from './requiredPasswordType';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosGeneralDeviceConfigurationImpl extends DeviceConfigurationImpl implements IosGeneralDeviceConfiguration {
    /** Indicates whether or not to allow account modification when the device is in supervised mode. */
    public accountBlockModification?: boolean | undefined;
    /** Indicates whether or not to allow activation lock when the device is in the supervised mode. */
    public activationLockAllowWhenSupervised?: boolean | undefined;
    /** Indicates whether or not to allow AirDrop when the device is in supervised mode. */
    public airDropBlocked?: boolean | undefined;
    /** Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later). */
    public airDropForceUnmanagedDropTarget?: boolean | undefined;
    /** Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password. */
    public airPlayForcePairingPasswordForOutgoingRequests?: boolean | undefined;
    /** Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later). */
    public appleNewsBlocked?: boolean | undefined;
    /** Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later). */
    public appleWatchBlockPairing?: boolean | undefined;
    /** Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later). */
    public appleWatchForceWristDetection?: boolean | undefined;
    /** Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later. This collection can contain a maximum of 500 elements. */
    public appsSingleAppModeList?: AppListItem[] | undefined;
    /** Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in supervised mode (iOS 9.0 and later). */
    public appStoreBlockAutomaticDownloads?: boolean | undefined;
    /** Indicates whether or not to block the user from using the App Store. Requires a supervised device for iOS 13 and later. */
    public appStoreBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from making in app purchases. */
    public appStoreBlockInAppPurchases?: boolean | undefined;
    /** Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to supervised mode only (iOS 9.0 and later). */
    public appStoreBlockUIAppInstallation?: boolean | undefined;
    /** Indicates whether or not to require a password when using the app store. */
    public appStoreRequirePassword?: boolean | undefined;
    /** List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements. */
    public appsVisibilityList?: AppListItem[] | undefined;
    /** Type of list that is in the AppsVisibilityList. Possible values are: none, appsInListCompliant, appsNotInListCompliant. */
    public appsVisibilityListType?: AppListType | undefined;
    /** Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0 and later). */
    public bluetoothBlockModification?: boolean | undefined;
    /** Indicates whether or not to block the user from accessing the camera of the device. Requires a supervised device for iOS 13 and later. */
    public cameraBlocked?: boolean | undefined;
    /** Indicates whether or not to block data roaming. */
    public cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block global background fetch while roaming. */
    public cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean | undefined;
    /** Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode. */
    public cellularBlockPerAppDataModification?: boolean | undefined;
    /** Indicates whether or not to block Personal Hotspot. */
    public cellularBlockPersonalHotspot?: boolean | undefined;
    /** Indicates whether or not to block voice roaming. */
    public cellularBlockVoiceRoaming?: boolean | undefined;
    /** Indicates whether or not to block untrusted TLS certificates. */
    public certificatesBlockUntrustedTlsCertificates?: boolean | undefined;
    /** Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS 9.3 and later). */
    public classroomAppBlockRemoteScreenObservation?: boolean | undefined;
    /** Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to view a student's screen without prompting when the device is in supervised mode. */
    public classroomAppForceUnpromptedScreenObservation?: boolean | undefined;
    /** List that is in the AppComplianceList. Possible values are: none, appsInListCompliant, appsNotInListCompliant. */
    public compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    public compliantAppsList?: AppListItem[] | undefined;
    /** Indicates whether or not to block the user from installing configuration profiles and certificates interactively when the device is in supervised mode. */
    public configurationProfileBlockChanges?: boolean | undefined;
    /** Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ). */
    public definitionLookupBlocked?: boolean | undefined;
    /** Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in supervised mode. */
    public deviceBlockEnableRestrictions?: boolean | undefined;
    /** Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device is in supervised mode. */
    public deviceBlockEraseContentAndSettings?: boolean | undefined;
    /** Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later). */
    public deviceBlockNameModification?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    public diagnosticDataBlockSubmission?: boolean | undefined;
    /** Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode (iOS 9.3.2 and later). */
    public diagnosticDataBlockSubmissionModification?: boolean | undefined;
    /** Indicates whether or not to block the user from viewing managed documents in unmanaged apps. */
    public documentsBlockManagedDocumentsInUnmanagedApps?: boolean | undefined;
    /** Indicates whether or not to block the user from viewing unmanaged documents in managed apps. */
    public documentsBlockUnmanagedDocumentsInManagedApps?: boolean | undefined;
    /** An email address lacking a suffix that matches any of these strings will be considered out-of-domain. */
    public emailInDomainSuffixes?: string[] | undefined;
    /** Indicates whether or not to block the user from trusting an enterprise app. */
    public enterpriseAppBlockTrust?: boolean | undefined;
    /** [Deprecated] Configuring this setting and setting the value to 'true' has no effect on the device. */
    public enterpriseAppBlockTrustModification?: boolean | undefined;
    /** Indicates whether or not to block the user from using FaceTime. Requires a supervised device for iOS 13 and later. */
    public faceTimeBlocked?: boolean | undefined;
    /** Indicates whether or not to block changes to Find My Friends when the device is in supervised mode. */
    public findMyFriendsBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Game Center when the device is in supervised mode. */
    public gameCenterBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from having friends in Game Center. Requires a supervised device for iOS 13 and later. */
    public gamingBlockGameCenterFriends?: boolean | undefined;
    /** Indicates whether or not to block the user from using multiplayer gaming. Requires a supervised device for iOS 13 and later. */
    public gamingBlockMultiplayer?: boolean | undefined;
    /** indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device is in supervised mode. */
    public hostPairingBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode. */
    public iBooksStoreBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica. */
    public iBooksStoreBlockErotica?: boolean | undefined;
    /** Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS device. */
    public iCloudBlockActivityContinuation?: boolean | undefined;
    /** Indicates whether or not to block iCloud backup. Requires a supervised device for iOS 13 and later. */
    public iCloudBlockBackup?: boolean | undefined;
    /** Indicates whether or not to block iCloud document sync. Requires a supervised device for iOS 13 and later. */
    public iCloudBlockDocumentSync?: boolean | undefined;
    /** Indicates whether or not to block Managed Apps Cloud Sync. */
    public iCloudBlockManagedAppsSync?: boolean | undefined;
    /** Indicates whether or not to block iCloud Photo Library. */
    public iCloudBlockPhotoLibrary?: boolean | undefined;
    /** Indicates whether or not to block iCloud Photo Stream Sync. */
    public iCloudBlockPhotoStreamSync?: boolean | undefined;
    /** Indicates whether or not to block Shared Photo Stream. */
    public iCloudBlockSharedPhotoStream?: boolean | undefined;
    /** Indicates whether or not to require backups to iCloud be encrypted. */
    public iCloudRequireEncryptedBackup?: boolean | undefined;
    /** Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store. Requires a supervised device for iOS 13 and later. */
    public iTunesBlockExplicitContent?: boolean | undefined;
    /** Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised mode (iOS 9.3 and later and macOS 10.12 and later). */
    public iTunesBlockMusicService?: boolean | undefined;
    /** Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and later). */
    public iTunesBlockRadio?: boolean | undefined;
    /** Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later). */
    public keyboardBlockAutoCorrect?: boolean | undefined;
    /** Indicates whether or not to block the user from using dictation input when the device is in supervised mode. */
    public keyboardBlockDictation?: boolean | undefined;
    /** Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later). */
    public keyboardBlockPredictive?: boolean | undefined;
    /** Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later). */
    public keyboardBlockShortcuts?: boolean | undefined;
    /** Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later). */
    public keyboardBlockSpellCheck?: boolean | undefined;
    /** Indicates whether or not to allow assistive speak while in kiosk mode. */
    public kioskModeAllowAssistiveSpeak?: boolean | undefined;
    /** Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode. */
    public kioskModeAllowAssistiveTouchSettings?: boolean | undefined;
    /** Indicates whether or not to allow device auto lock while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockAutoLock instead. */
    public kioskModeAllowAutoLock?: boolean | undefined;
    /** Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode. */
    public kioskModeAllowColorInversionSettings?: boolean | undefined;
    /** Indicates whether or not to allow use of the ringer switch while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockRingerSwitch instead. */
    public kioskModeAllowRingerSwitch?: boolean | undefined;
    /** Indicates whether or not to allow screen rotation while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockScreenRotation instead. */
    public kioskModeAllowScreenRotation?: boolean | undefined;
    /** Indicates whether or not to allow use of the sleep button while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockSleepButton instead. */
    public kioskModeAllowSleepButton?: boolean | undefined;
    /** Indicates whether or not to allow use of the touchscreen while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockTouchscreen instead. */
    public kioskModeAllowTouchscreen?: boolean | undefined;
    /** Indicates whether or not to allow access to the voice over settings while in kiosk mode. */
    public kioskModeAllowVoiceOverSettings?: boolean | undefined;
    /** Indicates whether or not to allow use of the volume buttons while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockVolumeButtons instead. */
    public kioskModeAllowVolumeButtons?: boolean | undefined;
    /** Indicates whether or not to allow access to the zoom settings while in kiosk mode. */
    public kioskModeAllowZoomSettings?: boolean | undefined;
    /** URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known. */
    public kioskModeAppStoreUrl?: string | undefined;
    /** ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set. */
    public kioskModeBuiltInAppId?: string | undefined;
    /** Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will be ignored. */
    public kioskModeManagedAppId?: string | undefined;
    /** Indicates whether or not to require assistive touch while in kiosk mode. */
    public kioskModeRequireAssistiveTouch?: boolean | undefined;
    /** Indicates whether or not to require color inversion while in kiosk mode. */
    public kioskModeRequireColorInversion?: boolean | undefined;
    /** Indicates whether or not to require mono audio while in kiosk mode. */
    public kioskModeRequireMonoAudio?: boolean | undefined;
    /** Indicates whether or not to require voice over while in kiosk mode. */
    public kioskModeRequireVoiceOver?: boolean | undefined;
    /** Indicates whether or not to require zoom while in kiosk mode. */
    public kioskModeRequireZoom?: boolean | undefined;
    /** Indicates whether or not to block the user from using control center on the lock screen. */
    public lockScreenBlockControlCenter?: boolean | undefined;
    /** Indicates whether or not to block the user from using the notification view on the lock screen. */
    public lockScreenBlockNotificationView?: boolean | undefined;
    /** Indicates whether or not to block the user from using passbook when the device is locked. */
    public lockScreenBlockPassbook?: boolean | undefined;
    /** Indicates whether or not to block the user from using the Today View on the lock screen. */
    public lockScreenBlockTodayView?: boolean | undefined;
    /** Media content rating settings for Apps. Possible values are: allAllowed, allBlocked, agesAbove4, agesAbove9, agesAbove12, agesAbove17. */
    public mediaContentRatingApps?: RatingAppsType | undefined;
    /** Media content rating settings for Australia */
    public mediaContentRatingAustralia?: MediaContentRatingAustralia | undefined;
    /** Media content rating settings for Canada */
    public mediaContentRatingCanada?: MediaContentRatingCanada | undefined;
    /** Media content rating settings for France */
    public mediaContentRatingFrance?: MediaContentRatingFrance | undefined;
    /** Media content rating settings for Germany */
    public mediaContentRatingGermany?: MediaContentRatingGermany | undefined;
    /** Media content rating settings for Ireland */
    public mediaContentRatingIreland?: MediaContentRatingIreland | undefined;
    /** Media content rating settings for Japan */
    public mediaContentRatingJapan?: MediaContentRatingJapan | undefined;
    /** Media content rating settings for New Zealand */
    public mediaContentRatingNewZealand?: MediaContentRatingNewZealand | undefined;
    /** Media content rating settings for United Kingdom */
    public mediaContentRatingUnitedKingdom?: MediaContentRatingUnitedKingdom | undefined;
    /** Media content rating settings for United States */
    public mediaContentRatingUnitedStates?: MediaContentRatingUnitedStates | undefined;
    /** Indicates whether or not to block the user from using the Messages app on the supervised device. */
    public messagesBlocked?: boolean | undefined;
    /** List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000 elements. */
    public networkUsageRules?: IosNetworkUsageRule[] | undefined;
    /** Indicates whether or not to allow notifications settings modification (iOS 9.3 and later). */
    public notificationsBlockSettingsModification?: boolean | undefined;
    /** Block modification of registered Touch ID fingerprints when in supervised mode. */
    public passcodeBlockFingerprintModification?: boolean | undefined;
    /** Indicates whether or not to block fingerprint unlock. */
    public passcodeBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later). */
    public passcodeBlockModification?: boolean | undefined;
    /** Indicates whether or not to block simple passcodes. */
    public passcodeBlockSimple?: boolean | undefined;
    /** Number of days before the passcode expires. Valid values 1 to 65535 */
    public passcodeExpirationDays?: number | undefined;
    /** Number of character sets a passcode must contain. Valid values 0 to 4 */
    public passcodeMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passcode. Valid values 4 to 14 */
    public passcodeMinimumLength?: number | undefined;
    /** Minutes of inactivity before a passcode is required. */
    public passcodeMinutesOfInactivityBeforeLock?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    public passcodeMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passcodes to block. Valid values 1 to 24 */
    public passcodePreviousPasscodeBlockCount?: number | undefined;
    /** Indicates whether or not to require a passcode. */
    public passcodeRequired?: boolean | undefined;
    /** Type of passcode that is required. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passcodeRequiredType?: RequiredPasswordType | undefined;
    /** Number of sign in failures allowed before wiping the device. Valid values 2 to 11 */
    public passcodeSignInFailureCountBeforeWipe?: number | undefined;
    /** Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later). */
    public podcastsBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Auto fill in Safari. Requires a supervised device for iOS 13 and later. */
    public safariBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block the user from using Safari. Requires a supervised device for iOS 13 and later. */
    public safariBlocked?: boolean | undefined;
    /** Indicates whether or not to block JavaScript in Safari. */
    public safariBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block popups in Safari. */
    public safariBlockPopups?: boolean | undefined;
    /** Cookie settings for Safari. Possible values are: browserDefault, blockAlways, allowCurrentWebSite, allowFromWebsitesVisited, allowAlways. */
    public safariCookieSettings?: WebBrowserCookieSettings | undefined;
    /** URLs matching the patterns listed here will be considered managed. */
    public safariManagedDomains?: string[] | undefined;
    /** Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised mode (iOS 9.3 and later). */
    public safariPasswordAutoFillDomains?: string[] | undefined;
    /** Indicates whether or not to require fraud warning in Safari. */
    public safariRequireFraudWarning?: boolean | undefined;
    /** Indicates whether or not to block the user from taking Screenshots. */
    public screenCaptureBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Siri. */
    public siriBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Siri when locked. */
    public siriBlockedWhenLocked?: boolean | undefined;
    /** Indicates whether or not to block Siri from querying user-generated content when used on a supervised device. */
    public siriBlockUserGeneratedContent?: boolean | undefined;
    /** Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device. */
    public siriRequireProfanityFilter?: boolean | undefined;
    /** Indicates whether or not to block Spotlight search from returning internet results on supervised device. */
    public spotlightBlockInternetResults?: boolean | undefined;
    /** Indicates whether or not to block voice dialing. */
    public voiceDialingBlocked?: boolean | undefined;
    /** Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) . */
    public wallpaperBlockModification?: boolean | undefined;
    /** Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is in supervised mode. Available for devices running iOS and iPadOS versions 14.4 and earlier. Devices running 14.5+ should use the setting, 'WiFiConnectToAllowedNetworksOnlyForced. */
    public wiFiConnectOnlyToConfiguredNetworks?: boolean | undefined;
    /**
     * Instantiates a new IosGeneralDeviceConfiguration and sets the default values.
     * @param iosGeneralDeviceConfigurationParameterValue 
     */
    public constructor(iosGeneralDeviceConfigurationParameterValue?: IosGeneralDeviceConfiguration | undefined) {
        super(iosGeneralDeviceConfigurationParameterValue);
        this.accountBlockModification = iosGeneralDeviceConfigurationParameterValue?.accountBlockModification;
        this.activationLockAllowWhenSupervised = iosGeneralDeviceConfigurationParameterValue?.activationLockAllowWhenSupervised;
        this.airDropBlocked = iosGeneralDeviceConfigurationParameterValue?.airDropBlocked;
        this.airDropForceUnmanagedDropTarget = iosGeneralDeviceConfigurationParameterValue?.airDropForceUnmanagedDropTarget;
        this.airPlayForcePairingPasswordForOutgoingRequests = iosGeneralDeviceConfigurationParameterValue?.airPlayForcePairingPasswordForOutgoingRequests;
        this.appleNewsBlocked = iosGeneralDeviceConfigurationParameterValue?.appleNewsBlocked;
        this.appleWatchBlockPairing = iosGeneralDeviceConfigurationParameterValue?.appleWatchBlockPairing;
        this.appleWatchForceWristDetection = iosGeneralDeviceConfigurationParameterValue?.appleWatchForceWristDetection;
        this.appsSingleAppModeList = iosGeneralDeviceConfigurationParameterValue?.appsSingleAppModeList;
        this.appStoreBlockAutomaticDownloads = iosGeneralDeviceConfigurationParameterValue?.appStoreBlockAutomaticDownloads;
        this.appStoreBlocked = iosGeneralDeviceConfigurationParameterValue?.appStoreBlocked;
        this.appStoreBlockInAppPurchases = iosGeneralDeviceConfigurationParameterValue?.appStoreBlockInAppPurchases;
        this.appStoreBlockUIAppInstallation = iosGeneralDeviceConfigurationParameterValue?.appStoreBlockUIAppInstallation;
        this.appStoreRequirePassword = iosGeneralDeviceConfigurationParameterValue?.appStoreRequirePassword;
        this.appsVisibilityList = iosGeneralDeviceConfigurationParameterValue?.appsVisibilityList;
        this.appsVisibilityListType = iosGeneralDeviceConfigurationParameterValue?.appsVisibilityListType;
        this.bluetoothBlockModification = iosGeneralDeviceConfigurationParameterValue?.bluetoothBlockModification;
        this.cameraBlocked = iosGeneralDeviceConfigurationParameterValue?.cameraBlocked;
        this.cellularBlockDataRoaming = iosGeneralDeviceConfigurationParameterValue?.cellularBlockDataRoaming;
        this.cellularBlockGlobalBackgroundFetchWhileRoaming = iosGeneralDeviceConfigurationParameterValue?.cellularBlockGlobalBackgroundFetchWhileRoaming;
        this.cellularBlockPerAppDataModification = iosGeneralDeviceConfigurationParameterValue?.cellularBlockPerAppDataModification;
        this.cellularBlockPersonalHotspot = iosGeneralDeviceConfigurationParameterValue?.cellularBlockPersonalHotspot;
        this.cellularBlockVoiceRoaming = iosGeneralDeviceConfigurationParameterValue?.cellularBlockVoiceRoaming;
        this.certificatesBlockUntrustedTlsCertificates = iosGeneralDeviceConfigurationParameterValue?.certificatesBlockUntrustedTlsCertificates;
        this.classroomAppBlockRemoteScreenObservation = iosGeneralDeviceConfigurationParameterValue?.classroomAppBlockRemoteScreenObservation;
        this.classroomAppForceUnpromptedScreenObservation = iosGeneralDeviceConfigurationParameterValue?.classroomAppForceUnpromptedScreenObservation;
        this.compliantAppListType = iosGeneralDeviceConfigurationParameterValue?.compliantAppListType;
        this.compliantAppsList = iosGeneralDeviceConfigurationParameterValue?.compliantAppsList;
        this.configurationProfileBlockChanges = iosGeneralDeviceConfigurationParameterValue?.configurationProfileBlockChanges;
        this.definitionLookupBlocked = iosGeneralDeviceConfigurationParameterValue?.definitionLookupBlocked;
        this.deviceBlockEnableRestrictions = iosGeneralDeviceConfigurationParameterValue?.deviceBlockEnableRestrictions;
        this.deviceBlockEraseContentAndSettings = iosGeneralDeviceConfigurationParameterValue?.deviceBlockEraseContentAndSettings;
        this.deviceBlockNameModification = iosGeneralDeviceConfigurationParameterValue?.deviceBlockNameModification;
        this.diagnosticDataBlockSubmission = iosGeneralDeviceConfigurationParameterValue?.diagnosticDataBlockSubmission;
        this.diagnosticDataBlockSubmissionModification = iosGeneralDeviceConfigurationParameterValue?.diagnosticDataBlockSubmissionModification;
        this.documentsBlockManagedDocumentsInUnmanagedApps = iosGeneralDeviceConfigurationParameterValue?.documentsBlockManagedDocumentsInUnmanagedApps;
        this.documentsBlockUnmanagedDocumentsInManagedApps = iosGeneralDeviceConfigurationParameterValue?.documentsBlockUnmanagedDocumentsInManagedApps;
        this.emailInDomainSuffixes = iosGeneralDeviceConfigurationParameterValue?.emailInDomainSuffixes;
        this.enterpriseAppBlockTrust = iosGeneralDeviceConfigurationParameterValue?.enterpriseAppBlockTrust;
        this.enterpriseAppBlockTrustModification = iosGeneralDeviceConfigurationParameterValue?.enterpriseAppBlockTrustModification;
        this.faceTimeBlocked = iosGeneralDeviceConfigurationParameterValue?.faceTimeBlocked;
        this.findMyFriendsBlocked = iosGeneralDeviceConfigurationParameterValue?.findMyFriendsBlocked;
        this.gameCenterBlocked = iosGeneralDeviceConfigurationParameterValue?.gameCenterBlocked;
        this.gamingBlockGameCenterFriends = iosGeneralDeviceConfigurationParameterValue?.gamingBlockGameCenterFriends;
        this.gamingBlockMultiplayer = iosGeneralDeviceConfigurationParameterValue?.gamingBlockMultiplayer;
        this.hostPairingBlocked = iosGeneralDeviceConfigurationParameterValue?.hostPairingBlocked;
        this.iBooksStoreBlocked = iosGeneralDeviceConfigurationParameterValue?.iBooksStoreBlocked;
        this.iBooksStoreBlockErotica = iosGeneralDeviceConfigurationParameterValue?.iBooksStoreBlockErotica;
        this.iCloudBlockActivityContinuation = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockActivityContinuation;
        this.iCloudBlockBackup = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockBackup;
        this.iCloudBlockDocumentSync = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockDocumentSync;
        this.iCloudBlockManagedAppsSync = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockManagedAppsSync;
        this.iCloudBlockPhotoLibrary = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockPhotoLibrary;
        this.iCloudBlockPhotoStreamSync = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockPhotoStreamSync;
        this.iCloudBlockSharedPhotoStream = iosGeneralDeviceConfigurationParameterValue?.iCloudBlockSharedPhotoStream;
        this.iCloudRequireEncryptedBackup = iosGeneralDeviceConfigurationParameterValue?.iCloudRequireEncryptedBackup;
        this.iTunesBlockExplicitContent = iosGeneralDeviceConfigurationParameterValue?.iTunesBlockExplicitContent;
        this.iTunesBlockMusicService = iosGeneralDeviceConfigurationParameterValue?.iTunesBlockMusicService;
        this.iTunesBlockRadio = iosGeneralDeviceConfigurationParameterValue?.iTunesBlockRadio;
        this.keyboardBlockAutoCorrect = iosGeneralDeviceConfigurationParameterValue?.keyboardBlockAutoCorrect;
        this.keyboardBlockDictation = iosGeneralDeviceConfigurationParameterValue?.keyboardBlockDictation;
        this.keyboardBlockPredictive = iosGeneralDeviceConfigurationParameterValue?.keyboardBlockPredictive;
        this.keyboardBlockShortcuts = iosGeneralDeviceConfigurationParameterValue?.keyboardBlockShortcuts;
        this.keyboardBlockSpellCheck = iosGeneralDeviceConfigurationParameterValue?.keyboardBlockSpellCheck;
        this.kioskModeAllowAssistiveSpeak = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowAssistiveSpeak;
        this.kioskModeAllowAssistiveTouchSettings = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowAssistiveTouchSettings;
        this.kioskModeAllowAutoLock = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowAutoLock;
        this.kioskModeAllowColorInversionSettings = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowColorInversionSettings;
        this.kioskModeAllowRingerSwitch = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowRingerSwitch;
        this.kioskModeAllowScreenRotation = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowScreenRotation;
        this.kioskModeAllowSleepButton = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowSleepButton;
        this.kioskModeAllowTouchscreen = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowTouchscreen;
        this.kioskModeAllowVoiceOverSettings = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowVoiceOverSettings;
        this.kioskModeAllowVolumeButtons = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowVolumeButtons;
        this.kioskModeAllowZoomSettings = iosGeneralDeviceConfigurationParameterValue?.kioskModeAllowZoomSettings;
        this.kioskModeAppStoreUrl = iosGeneralDeviceConfigurationParameterValue?.kioskModeAppStoreUrl;
        this.kioskModeBuiltInAppId = iosGeneralDeviceConfigurationParameterValue?.kioskModeBuiltInAppId;
        this.kioskModeManagedAppId = iosGeneralDeviceConfigurationParameterValue?.kioskModeManagedAppId;
        this.kioskModeRequireAssistiveTouch = iosGeneralDeviceConfigurationParameterValue?.kioskModeRequireAssistiveTouch;
        this.kioskModeRequireColorInversion = iosGeneralDeviceConfigurationParameterValue?.kioskModeRequireColorInversion;
        this.kioskModeRequireMonoAudio = iosGeneralDeviceConfigurationParameterValue?.kioskModeRequireMonoAudio;
        this.kioskModeRequireVoiceOver = iosGeneralDeviceConfigurationParameterValue?.kioskModeRequireVoiceOver;
        this.kioskModeRequireZoom = iosGeneralDeviceConfigurationParameterValue?.kioskModeRequireZoom;
        this.lockScreenBlockControlCenter = iosGeneralDeviceConfigurationParameterValue?.lockScreenBlockControlCenter;
        this.lockScreenBlockNotificationView = iosGeneralDeviceConfigurationParameterValue?.lockScreenBlockNotificationView;
        this.lockScreenBlockPassbook = iosGeneralDeviceConfigurationParameterValue?.lockScreenBlockPassbook;
        this.lockScreenBlockTodayView = iosGeneralDeviceConfigurationParameterValue?.lockScreenBlockTodayView;
        this.mediaContentRatingApps = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingApps;
        this.mediaContentRatingAustralia = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingAustralia;
        this.mediaContentRatingCanada = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingCanada;
        this.mediaContentRatingFrance = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingFrance;
        this.mediaContentRatingGermany = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingGermany;
        this.mediaContentRatingIreland = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingIreland;
        this.mediaContentRatingJapan = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingJapan;
        this.mediaContentRatingNewZealand = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingNewZealand;
        this.mediaContentRatingUnitedKingdom = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingUnitedKingdom;
        this.mediaContentRatingUnitedStates = iosGeneralDeviceConfigurationParameterValue?.mediaContentRatingUnitedStates;
        this.messagesBlocked = iosGeneralDeviceConfigurationParameterValue?.messagesBlocked;
        this.networkUsageRules = iosGeneralDeviceConfigurationParameterValue?.networkUsageRules;
        this.notificationsBlockSettingsModification = iosGeneralDeviceConfigurationParameterValue?.notificationsBlockSettingsModification;
        this.passcodeBlockFingerprintModification = iosGeneralDeviceConfigurationParameterValue?.passcodeBlockFingerprintModification;
        this.passcodeBlockFingerprintUnlock = iosGeneralDeviceConfigurationParameterValue?.passcodeBlockFingerprintUnlock;
        this.passcodeBlockModification = iosGeneralDeviceConfigurationParameterValue?.passcodeBlockModification;
        this.passcodeBlockSimple = iosGeneralDeviceConfigurationParameterValue?.passcodeBlockSimple;
        this.passcodeExpirationDays = iosGeneralDeviceConfigurationParameterValue?.passcodeExpirationDays;
        this.passcodeMinimumCharacterSetCount = iosGeneralDeviceConfigurationParameterValue?.passcodeMinimumCharacterSetCount;
        this.passcodeMinimumLength = iosGeneralDeviceConfigurationParameterValue?.passcodeMinimumLength;
        this.passcodeMinutesOfInactivityBeforeLock = iosGeneralDeviceConfigurationParameterValue?.passcodeMinutesOfInactivityBeforeLock;
        this.passcodeMinutesOfInactivityBeforeScreenTimeout = iosGeneralDeviceConfigurationParameterValue?.passcodeMinutesOfInactivityBeforeScreenTimeout;
        this.passcodePreviousPasscodeBlockCount = iosGeneralDeviceConfigurationParameterValue?.passcodePreviousPasscodeBlockCount;
        this.passcodeRequired = iosGeneralDeviceConfigurationParameterValue?.passcodeRequired;
        this.passcodeRequiredType = iosGeneralDeviceConfigurationParameterValue?.passcodeRequiredType;
        this.passcodeSignInFailureCountBeforeWipe = iosGeneralDeviceConfigurationParameterValue?.passcodeSignInFailureCountBeforeWipe;
        this.podcastsBlocked = iosGeneralDeviceConfigurationParameterValue?.podcastsBlocked;
        this.safariBlockAutofill = iosGeneralDeviceConfigurationParameterValue?.safariBlockAutofill;
        this.safariBlocked = iosGeneralDeviceConfigurationParameterValue?.safariBlocked;
        this.safariBlockJavaScript = iosGeneralDeviceConfigurationParameterValue?.safariBlockJavaScript;
        this.safariBlockPopups = iosGeneralDeviceConfigurationParameterValue?.safariBlockPopups;
        this.safariCookieSettings = iosGeneralDeviceConfigurationParameterValue?.safariCookieSettings;
        this.safariManagedDomains = iosGeneralDeviceConfigurationParameterValue?.safariManagedDomains;
        this.safariPasswordAutoFillDomains = iosGeneralDeviceConfigurationParameterValue?.safariPasswordAutoFillDomains;
        this.safariRequireFraudWarning = iosGeneralDeviceConfigurationParameterValue?.safariRequireFraudWarning;
        this.screenCaptureBlocked = iosGeneralDeviceConfigurationParameterValue?.screenCaptureBlocked;
        this.siriBlocked = iosGeneralDeviceConfigurationParameterValue?.siriBlocked;
        this.siriBlockedWhenLocked = iosGeneralDeviceConfigurationParameterValue?.siriBlockedWhenLocked;
        this.siriBlockUserGeneratedContent = iosGeneralDeviceConfigurationParameterValue?.siriBlockUserGeneratedContent;
        this.siriRequireProfanityFilter = iosGeneralDeviceConfigurationParameterValue?.siriRequireProfanityFilter;
        this.spotlightBlockInternetResults = iosGeneralDeviceConfigurationParameterValue?.spotlightBlockInternetResults;
        this.voiceDialingBlocked = iosGeneralDeviceConfigurationParameterValue?.voiceDialingBlocked;
        this.wallpaperBlockModification = iosGeneralDeviceConfigurationParameterValue?.wallpaperBlockModification;
        this.wiFiConnectOnlyToConfiguredNetworks = iosGeneralDeviceConfigurationParameterValue?.wiFiConnectOnlyToConfiguredNetworks;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountBlockModification": n => { this.accountBlockModification = n.getBooleanValue(); },
            "activationLockAllowWhenSupervised": n => { this.activationLockAllowWhenSupervised = n.getBooleanValue(); },
            "airDropBlocked": n => { this.airDropBlocked = n.getBooleanValue(); },
            "airDropForceUnmanagedDropTarget": n => { this.airDropForceUnmanagedDropTarget = n.getBooleanValue(); },
            "airPlayForcePairingPasswordForOutgoingRequests": n => { this.airPlayForcePairingPasswordForOutgoingRequests = n.getBooleanValue(); },
            "appleNewsBlocked": n => { this.appleNewsBlocked = n.getBooleanValue(); },
            "appleWatchBlockPairing": n => { this.appleWatchBlockPairing = n.getBooleanValue(); },
            "appleWatchForceWristDetection": n => { this.appleWatchForceWristDetection = n.getBooleanValue(); },
            "appsSingleAppModeList": n => { this.appsSingleAppModeList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "appStoreBlockAutomaticDownloads": n => { this.appStoreBlockAutomaticDownloads = n.getBooleanValue(); },
            "appStoreBlocked": n => { this.appStoreBlocked = n.getBooleanValue(); },
            "appStoreBlockInAppPurchases": n => { this.appStoreBlockInAppPurchases = n.getBooleanValue(); },
            "appStoreBlockUIAppInstallation": n => { this.appStoreBlockUIAppInstallation = n.getBooleanValue(); },
            "appStoreRequirePassword": n => { this.appStoreRequirePassword = n.getBooleanValue(); },
            "appsVisibilityList": n => { this.appsVisibilityList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "appsVisibilityListType": n => { this.appsVisibilityListType = n.getEnumValue<AppListType>(AppListType); },
            "bluetoothBlockModification": n => { this.bluetoothBlockModification = n.getBooleanValue(); },
            "cameraBlocked": n => { this.cameraBlocked = n.getBooleanValue(); },
            "cellularBlockDataRoaming": n => { this.cellularBlockDataRoaming = n.getBooleanValue(); },
            "cellularBlockGlobalBackgroundFetchWhileRoaming": n => { this.cellularBlockGlobalBackgroundFetchWhileRoaming = n.getBooleanValue(); },
            "cellularBlockPerAppDataModification": n => { this.cellularBlockPerAppDataModification = n.getBooleanValue(); },
            "cellularBlockPersonalHotspot": n => { this.cellularBlockPersonalHotspot = n.getBooleanValue(); },
            "cellularBlockVoiceRoaming": n => { this.cellularBlockVoiceRoaming = n.getBooleanValue(); },
            "certificatesBlockUntrustedTlsCertificates": n => { this.certificatesBlockUntrustedTlsCertificates = n.getBooleanValue(); },
            "classroomAppBlockRemoteScreenObservation": n => { this.classroomAppBlockRemoteScreenObservation = n.getBooleanValue(); },
            "classroomAppForceUnpromptedScreenObservation": n => { this.classroomAppForceUnpromptedScreenObservation = n.getBooleanValue(); },
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
            "configurationProfileBlockChanges": n => { this.configurationProfileBlockChanges = n.getBooleanValue(); },
            "definitionLookupBlocked": n => { this.definitionLookupBlocked = n.getBooleanValue(); },
            "deviceBlockEnableRestrictions": n => { this.deviceBlockEnableRestrictions = n.getBooleanValue(); },
            "deviceBlockEraseContentAndSettings": n => { this.deviceBlockEraseContentAndSettings = n.getBooleanValue(); },
            "deviceBlockNameModification": n => { this.deviceBlockNameModification = n.getBooleanValue(); },
            "diagnosticDataBlockSubmission": n => { this.diagnosticDataBlockSubmission = n.getBooleanValue(); },
            "diagnosticDataBlockSubmissionModification": n => { this.diagnosticDataBlockSubmissionModification = n.getBooleanValue(); },
            "documentsBlockManagedDocumentsInUnmanagedApps": n => { this.documentsBlockManagedDocumentsInUnmanagedApps = n.getBooleanValue(); },
            "documentsBlockUnmanagedDocumentsInManagedApps": n => { this.documentsBlockUnmanagedDocumentsInManagedApps = n.getBooleanValue(); },
            "emailInDomainSuffixes": n => { this.emailInDomainSuffixes = n.getCollectionOfPrimitiveValues<string>(); },
            "enterpriseAppBlockTrust": n => { this.enterpriseAppBlockTrust = n.getBooleanValue(); },
            "enterpriseAppBlockTrustModification": n => { this.enterpriseAppBlockTrustModification = n.getBooleanValue(); },
            "faceTimeBlocked": n => { this.faceTimeBlocked = n.getBooleanValue(); },
            "findMyFriendsBlocked": n => { this.findMyFriendsBlocked = n.getBooleanValue(); },
            "gameCenterBlocked": n => { this.gameCenterBlocked = n.getBooleanValue(); },
            "gamingBlockGameCenterFriends": n => { this.gamingBlockGameCenterFriends = n.getBooleanValue(); },
            "gamingBlockMultiplayer": n => { this.gamingBlockMultiplayer = n.getBooleanValue(); },
            "hostPairingBlocked": n => { this.hostPairingBlocked = n.getBooleanValue(); },
            "iBooksStoreBlocked": n => { this.iBooksStoreBlocked = n.getBooleanValue(); },
            "iBooksStoreBlockErotica": n => { this.iBooksStoreBlockErotica = n.getBooleanValue(); },
            "iCloudBlockActivityContinuation": n => { this.iCloudBlockActivityContinuation = n.getBooleanValue(); },
            "iCloudBlockBackup": n => { this.iCloudBlockBackup = n.getBooleanValue(); },
            "iCloudBlockDocumentSync": n => { this.iCloudBlockDocumentSync = n.getBooleanValue(); },
            "iCloudBlockManagedAppsSync": n => { this.iCloudBlockManagedAppsSync = n.getBooleanValue(); },
            "iCloudBlockPhotoLibrary": n => { this.iCloudBlockPhotoLibrary = n.getBooleanValue(); },
            "iCloudBlockPhotoStreamSync": n => { this.iCloudBlockPhotoStreamSync = n.getBooleanValue(); },
            "iCloudBlockSharedPhotoStream": n => { this.iCloudBlockSharedPhotoStream = n.getBooleanValue(); },
            "iCloudRequireEncryptedBackup": n => { this.iCloudRequireEncryptedBackup = n.getBooleanValue(); },
            "iTunesBlockExplicitContent": n => { this.iTunesBlockExplicitContent = n.getBooleanValue(); },
            "iTunesBlockMusicService": n => { this.iTunesBlockMusicService = n.getBooleanValue(); },
            "iTunesBlockRadio": n => { this.iTunesBlockRadio = n.getBooleanValue(); },
            "keyboardBlockAutoCorrect": n => { this.keyboardBlockAutoCorrect = n.getBooleanValue(); },
            "keyboardBlockDictation": n => { this.keyboardBlockDictation = n.getBooleanValue(); },
            "keyboardBlockPredictive": n => { this.keyboardBlockPredictive = n.getBooleanValue(); },
            "keyboardBlockShortcuts": n => { this.keyboardBlockShortcuts = n.getBooleanValue(); },
            "keyboardBlockSpellCheck": n => { this.keyboardBlockSpellCheck = n.getBooleanValue(); },
            "kioskModeAllowAssistiveSpeak": n => { this.kioskModeAllowAssistiveSpeak = n.getBooleanValue(); },
            "kioskModeAllowAssistiveTouchSettings": n => { this.kioskModeAllowAssistiveTouchSettings = n.getBooleanValue(); },
            "kioskModeAllowAutoLock": n => { this.kioskModeAllowAutoLock = n.getBooleanValue(); },
            "kioskModeAllowColorInversionSettings": n => { this.kioskModeAllowColorInversionSettings = n.getBooleanValue(); },
            "kioskModeAllowRingerSwitch": n => { this.kioskModeAllowRingerSwitch = n.getBooleanValue(); },
            "kioskModeAllowScreenRotation": n => { this.kioskModeAllowScreenRotation = n.getBooleanValue(); },
            "kioskModeAllowSleepButton": n => { this.kioskModeAllowSleepButton = n.getBooleanValue(); },
            "kioskModeAllowTouchscreen": n => { this.kioskModeAllowTouchscreen = n.getBooleanValue(); },
            "kioskModeAllowVoiceOverSettings": n => { this.kioskModeAllowVoiceOverSettings = n.getBooleanValue(); },
            "kioskModeAllowVolumeButtons": n => { this.kioskModeAllowVolumeButtons = n.getBooleanValue(); },
            "kioskModeAllowZoomSettings": n => { this.kioskModeAllowZoomSettings = n.getBooleanValue(); },
            "kioskModeAppStoreUrl": n => { this.kioskModeAppStoreUrl = n.getStringValue(); },
            "kioskModeBuiltInAppId": n => { this.kioskModeBuiltInAppId = n.getStringValue(); },
            "kioskModeManagedAppId": n => { this.kioskModeManagedAppId = n.getStringValue(); },
            "kioskModeRequireAssistiveTouch": n => { this.kioskModeRequireAssistiveTouch = n.getBooleanValue(); },
            "kioskModeRequireColorInversion": n => { this.kioskModeRequireColorInversion = n.getBooleanValue(); },
            "kioskModeRequireMonoAudio": n => { this.kioskModeRequireMonoAudio = n.getBooleanValue(); },
            "kioskModeRequireVoiceOver": n => { this.kioskModeRequireVoiceOver = n.getBooleanValue(); },
            "kioskModeRequireZoom": n => { this.kioskModeRequireZoom = n.getBooleanValue(); },
            "lockScreenBlockControlCenter": n => { this.lockScreenBlockControlCenter = n.getBooleanValue(); },
            "lockScreenBlockNotificationView": n => { this.lockScreenBlockNotificationView = n.getBooleanValue(); },
            "lockScreenBlockPassbook": n => { this.lockScreenBlockPassbook = n.getBooleanValue(); },
            "lockScreenBlockTodayView": n => { this.lockScreenBlockTodayView = n.getBooleanValue(); },
            "mediaContentRatingApps": n => { this.mediaContentRatingApps = n.getEnumValue<RatingAppsType>(RatingAppsType); },
            "mediaContentRatingAustralia": n => { this.mediaContentRatingAustralia = n.getObjectValue<MediaContentRatingAustraliaImpl>(createMediaContentRatingAustraliaFromDiscriminatorValue); },
            "mediaContentRatingCanada": n => { this.mediaContentRatingCanada = n.getObjectValue<MediaContentRatingCanadaImpl>(createMediaContentRatingCanadaFromDiscriminatorValue); },
            "mediaContentRatingFrance": n => { this.mediaContentRatingFrance = n.getObjectValue<MediaContentRatingFranceImpl>(createMediaContentRatingFranceFromDiscriminatorValue); },
            "mediaContentRatingGermany": n => { this.mediaContentRatingGermany = n.getObjectValue<MediaContentRatingGermanyImpl>(createMediaContentRatingGermanyFromDiscriminatorValue); },
            "mediaContentRatingIreland": n => { this.mediaContentRatingIreland = n.getObjectValue<MediaContentRatingIrelandImpl>(createMediaContentRatingIrelandFromDiscriminatorValue); },
            "mediaContentRatingJapan": n => { this.mediaContentRatingJapan = n.getObjectValue<MediaContentRatingJapanImpl>(createMediaContentRatingJapanFromDiscriminatorValue); },
            "mediaContentRatingNewZealand": n => { this.mediaContentRatingNewZealand = n.getObjectValue<MediaContentRatingNewZealandImpl>(createMediaContentRatingNewZealandFromDiscriminatorValue); },
            "mediaContentRatingUnitedKingdom": n => { this.mediaContentRatingUnitedKingdom = n.getObjectValue<MediaContentRatingUnitedKingdomImpl>(createMediaContentRatingUnitedKingdomFromDiscriminatorValue); },
            "mediaContentRatingUnitedStates": n => { this.mediaContentRatingUnitedStates = n.getObjectValue<MediaContentRatingUnitedStatesImpl>(createMediaContentRatingUnitedStatesFromDiscriminatorValue); },
            "messagesBlocked": n => { this.messagesBlocked = n.getBooleanValue(); },
            "networkUsageRules": n => { this.networkUsageRules = n.getCollectionOfObjectValues<IosNetworkUsageRuleImpl>(createIosNetworkUsageRuleFromDiscriminatorValue); },
            "notificationsBlockSettingsModification": n => { this.notificationsBlockSettingsModification = n.getBooleanValue(); },
            "passcodeBlockFingerprintModification": n => { this.passcodeBlockFingerprintModification = n.getBooleanValue(); },
            "passcodeBlockFingerprintUnlock": n => { this.passcodeBlockFingerprintUnlock = n.getBooleanValue(); },
            "passcodeBlockModification": n => { this.passcodeBlockModification = n.getBooleanValue(); },
            "passcodeBlockSimple": n => { this.passcodeBlockSimple = n.getBooleanValue(); },
            "passcodeExpirationDays": n => { this.passcodeExpirationDays = n.getNumberValue(); },
            "passcodeMinimumCharacterSetCount": n => { this.passcodeMinimumCharacterSetCount = n.getNumberValue(); },
            "passcodeMinimumLength": n => { this.passcodeMinimumLength = n.getNumberValue(); },
            "passcodeMinutesOfInactivityBeforeLock": n => { this.passcodeMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passcodeMinutesOfInactivityBeforeScreenTimeout": n => { this.passcodeMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passcodePreviousPasscodeBlockCount": n => { this.passcodePreviousPasscodeBlockCount = n.getNumberValue(); },
            "passcodeRequired": n => { this.passcodeRequired = n.getBooleanValue(); },
            "passcodeRequiredType": n => { this.passcodeRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
            "passcodeSignInFailureCountBeforeWipe": n => { this.passcodeSignInFailureCountBeforeWipe = n.getNumberValue(); },
            "podcastsBlocked": n => { this.podcastsBlocked = n.getBooleanValue(); },
            "safariBlockAutofill": n => { this.safariBlockAutofill = n.getBooleanValue(); },
            "safariBlocked": n => { this.safariBlocked = n.getBooleanValue(); },
            "safariBlockJavaScript": n => { this.safariBlockJavaScript = n.getBooleanValue(); },
            "safariBlockPopups": n => { this.safariBlockPopups = n.getBooleanValue(); },
            "safariCookieSettings": n => { this.safariCookieSettings = n.getEnumValue<WebBrowserCookieSettings>(WebBrowserCookieSettings); },
            "safariManagedDomains": n => { this.safariManagedDomains = n.getCollectionOfPrimitiveValues<string>(); },
            "safariPasswordAutoFillDomains": n => { this.safariPasswordAutoFillDomains = n.getCollectionOfPrimitiveValues<string>(); },
            "safariRequireFraudWarning": n => { this.safariRequireFraudWarning = n.getBooleanValue(); },
            "screenCaptureBlocked": n => { this.screenCaptureBlocked = n.getBooleanValue(); },
            "siriBlocked": n => { this.siriBlocked = n.getBooleanValue(); },
            "siriBlockedWhenLocked": n => { this.siriBlockedWhenLocked = n.getBooleanValue(); },
            "siriBlockUserGeneratedContent": n => { this.siriBlockUserGeneratedContent = n.getBooleanValue(); },
            "siriRequireProfanityFilter": n => { this.siriRequireProfanityFilter = n.getBooleanValue(); },
            "spotlightBlockInternetResults": n => { this.spotlightBlockInternetResults = n.getBooleanValue(); },
            "voiceDialingBlocked": n => { this.voiceDialingBlocked = n.getBooleanValue(); },
            "wallpaperBlockModification": n => { this.wallpaperBlockModification = n.getBooleanValue(); },
            "wiFiConnectOnlyToConfiguredNetworks": n => { this.wiFiConnectOnlyToConfiguredNetworks = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountBlockModification){
            writer.writeBooleanValue("accountBlockModification", this.accountBlockModification);
        }
        if(this.activationLockAllowWhenSupervised){
            writer.writeBooleanValue("activationLockAllowWhenSupervised", this.activationLockAllowWhenSupervised);
        }
        if(this.airDropBlocked){
            writer.writeBooleanValue("airDropBlocked", this.airDropBlocked);
        }
        if(this.airDropForceUnmanagedDropTarget){
            writer.writeBooleanValue("airDropForceUnmanagedDropTarget", this.airDropForceUnmanagedDropTarget);
        }
        if(this.airPlayForcePairingPasswordForOutgoingRequests){
            writer.writeBooleanValue("airPlayForcePairingPasswordForOutgoingRequests", this.airPlayForcePairingPasswordForOutgoingRequests);
        }
        if(this.appleNewsBlocked){
            writer.writeBooleanValue("appleNewsBlocked", this.appleNewsBlocked);
        }
        if(this.appleWatchBlockPairing){
            writer.writeBooleanValue("appleWatchBlockPairing", this.appleWatchBlockPairing);
        }
        if(this.appleWatchForceWristDetection){
            writer.writeBooleanValue("appleWatchForceWristDetection", this.appleWatchForceWristDetection);
        }
        if(this.appsSingleAppModeList && this.appsSingleAppModeList.length != 0){        const appsSingleAppModeListArrValue: AppListItemImpl[] = []; this.appsSingleAppModeList?.forEach(element => {appsSingleAppModeListArrValue.push(new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("appsSingleAppModeList", appsSingleAppModeListArrValue);
        }
        if(this.appStoreBlockAutomaticDownloads){
            writer.writeBooleanValue("appStoreBlockAutomaticDownloads", this.appStoreBlockAutomaticDownloads);
        }
        if(this.appStoreBlocked){
            writer.writeBooleanValue("appStoreBlocked", this.appStoreBlocked);
        }
        if(this.appStoreBlockInAppPurchases){
            writer.writeBooleanValue("appStoreBlockInAppPurchases", this.appStoreBlockInAppPurchases);
        }
        if(this.appStoreBlockUIAppInstallation){
            writer.writeBooleanValue("appStoreBlockUIAppInstallation", this.appStoreBlockUIAppInstallation);
        }
        if(this.appStoreRequirePassword){
            writer.writeBooleanValue("appStoreRequirePassword", this.appStoreRequirePassword);
        }
        if(this.appsVisibilityList && this.appsVisibilityList.length != 0){        const appsVisibilityListArrValue: AppListItemImpl[] = []; this.appsVisibilityList?.forEach(element => {appsVisibilityListArrValue.push(new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("appsVisibilityList", appsVisibilityListArrValue);
        }
        if(this.appsVisibilityListType){
            writer.writeEnumValue<AppListType>("appsVisibilityListType", this.appsVisibilityListType);
        }
        if(this.bluetoothBlockModification){
            writer.writeBooleanValue("bluetoothBlockModification", this.bluetoothBlockModification);
        }
        if(this.cameraBlocked){
            writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        }
        if(this.cellularBlockDataRoaming){
            writer.writeBooleanValue("cellularBlockDataRoaming", this.cellularBlockDataRoaming);
        }
        if(this.cellularBlockGlobalBackgroundFetchWhileRoaming){
            writer.writeBooleanValue("cellularBlockGlobalBackgroundFetchWhileRoaming", this.cellularBlockGlobalBackgroundFetchWhileRoaming);
        }
        if(this.cellularBlockPerAppDataModification){
            writer.writeBooleanValue("cellularBlockPerAppDataModification", this.cellularBlockPerAppDataModification);
        }
        if(this.cellularBlockPersonalHotspot){
            writer.writeBooleanValue("cellularBlockPersonalHotspot", this.cellularBlockPersonalHotspot);
        }
        if(this.cellularBlockVoiceRoaming){
            writer.writeBooleanValue("cellularBlockVoiceRoaming", this.cellularBlockVoiceRoaming);
        }
        if(this.certificatesBlockUntrustedTlsCertificates){
            writer.writeBooleanValue("certificatesBlockUntrustedTlsCertificates", this.certificatesBlockUntrustedTlsCertificates);
        }
        if(this.classroomAppBlockRemoteScreenObservation){
            writer.writeBooleanValue("classroomAppBlockRemoteScreenObservation", this.classroomAppBlockRemoteScreenObservation);
        }
        if(this.classroomAppForceUnpromptedScreenObservation){
            writer.writeBooleanValue("classroomAppForceUnpromptedScreenObservation", this.classroomAppForceUnpromptedScreenObservation);
        }
        if(this.compliantAppListType){
            writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        }
        if(this.compliantAppsList && this.compliantAppsList.length != 0){        const compliantAppsListArrValue: AppListItemImpl[] = []; this.compliantAppsList?.forEach(element => {compliantAppsListArrValue.push(new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("compliantAppsList", compliantAppsListArrValue);
        }
        if(this.configurationProfileBlockChanges){
            writer.writeBooleanValue("configurationProfileBlockChanges", this.configurationProfileBlockChanges);
        }
        if(this.definitionLookupBlocked){
            writer.writeBooleanValue("definitionLookupBlocked", this.definitionLookupBlocked);
        }
        if(this.deviceBlockEnableRestrictions){
            writer.writeBooleanValue("deviceBlockEnableRestrictions", this.deviceBlockEnableRestrictions);
        }
        if(this.deviceBlockEraseContentAndSettings){
            writer.writeBooleanValue("deviceBlockEraseContentAndSettings", this.deviceBlockEraseContentAndSettings);
        }
        if(this.deviceBlockNameModification){
            writer.writeBooleanValue("deviceBlockNameModification", this.deviceBlockNameModification);
        }
        if(this.diagnosticDataBlockSubmission){
            writer.writeBooleanValue("diagnosticDataBlockSubmission", this.diagnosticDataBlockSubmission);
        }
        if(this.diagnosticDataBlockSubmissionModification){
            writer.writeBooleanValue("diagnosticDataBlockSubmissionModification", this.diagnosticDataBlockSubmissionModification);
        }
        if(this.documentsBlockManagedDocumentsInUnmanagedApps){
            writer.writeBooleanValue("documentsBlockManagedDocumentsInUnmanagedApps", this.documentsBlockManagedDocumentsInUnmanagedApps);
        }
        if(this.documentsBlockUnmanagedDocumentsInManagedApps){
            writer.writeBooleanValue("documentsBlockUnmanagedDocumentsInManagedApps", this.documentsBlockUnmanagedDocumentsInManagedApps);
        }
        if(this.emailInDomainSuffixes){
            writer.writeCollectionOfPrimitiveValues<string>("emailInDomainSuffixes", this.emailInDomainSuffixes);
        }
        if(this.enterpriseAppBlockTrust){
            writer.writeBooleanValue("enterpriseAppBlockTrust", this.enterpriseAppBlockTrust);
        }
        if(this.enterpriseAppBlockTrustModification){
            writer.writeBooleanValue("enterpriseAppBlockTrustModification", this.enterpriseAppBlockTrustModification);
        }
        if(this.faceTimeBlocked){
            writer.writeBooleanValue("faceTimeBlocked", this.faceTimeBlocked);
        }
        if(this.findMyFriendsBlocked){
            writer.writeBooleanValue("findMyFriendsBlocked", this.findMyFriendsBlocked);
        }
        if(this.gameCenterBlocked){
            writer.writeBooleanValue("gameCenterBlocked", this.gameCenterBlocked);
        }
        if(this.gamingBlockGameCenterFriends){
            writer.writeBooleanValue("gamingBlockGameCenterFriends", this.gamingBlockGameCenterFriends);
        }
        if(this.gamingBlockMultiplayer){
            writer.writeBooleanValue("gamingBlockMultiplayer", this.gamingBlockMultiplayer);
        }
        if(this.hostPairingBlocked){
            writer.writeBooleanValue("hostPairingBlocked", this.hostPairingBlocked);
        }
        if(this.iBooksStoreBlocked){
            writer.writeBooleanValue("iBooksStoreBlocked", this.iBooksStoreBlocked);
        }
        if(this.iBooksStoreBlockErotica){
            writer.writeBooleanValue("iBooksStoreBlockErotica", this.iBooksStoreBlockErotica);
        }
        if(this.iCloudBlockActivityContinuation){
            writer.writeBooleanValue("iCloudBlockActivityContinuation", this.iCloudBlockActivityContinuation);
        }
        if(this.iCloudBlockBackup){
            writer.writeBooleanValue("iCloudBlockBackup", this.iCloudBlockBackup);
        }
        if(this.iCloudBlockDocumentSync){
            writer.writeBooleanValue("iCloudBlockDocumentSync", this.iCloudBlockDocumentSync);
        }
        if(this.iCloudBlockManagedAppsSync){
            writer.writeBooleanValue("iCloudBlockManagedAppsSync", this.iCloudBlockManagedAppsSync);
        }
        if(this.iCloudBlockPhotoLibrary){
            writer.writeBooleanValue("iCloudBlockPhotoLibrary", this.iCloudBlockPhotoLibrary);
        }
        if(this.iCloudBlockPhotoStreamSync){
            writer.writeBooleanValue("iCloudBlockPhotoStreamSync", this.iCloudBlockPhotoStreamSync);
        }
        if(this.iCloudBlockSharedPhotoStream){
            writer.writeBooleanValue("iCloudBlockSharedPhotoStream", this.iCloudBlockSharedPhotoStream);
        }
        if(this.iCloudRequireEncryptedBackup){
            writer.writeBooleanValue("iCloudRequireEncryptedBackup", this.iCloudRequireEncryptedBackup);
        }
        if(this.iTunesBlockExplicitContent){
            writer.writeBooleanValue("iTunesBlockExplicitContent", this.iTunesBlockExplicitContent);
        }
        if(this.iTunesBlockMusicService){
            writer.writeBooleanValue("iTunesBlockMusicService", this.iTunesBlockMusicService);
        }
        if(this.iTunesBlockRadio){
            writer.writeBooleanValue("iTunesBlockRadio", this.iTunesBlockRadio);
        }
        if(this.keyboardBlockAutoCorrect){
            writer.writeBooleanValue("keyboardBlockAutoCorrect", this.keyboardBlockAutoCorrect);
        }
        if(this.keyboardBlockDictation){
            writer.writeBooleanValue("keyboardBlockDictation", this.keyboardBlockDictation);
        }
        if(this.keyboardBlockPredictive){
            writer.writeBooleanValue("keyboardBlockPredictive", this.keyboardBlockPredictive);
        }
        if(this.keyboardBlockShortcuts){
            writer.writeBooleanValue("keyboardBlockShortcuts", this.keyboardBlockShortcuts);
        }
        if(this.keyboardBlockSpellCheck){
            writer.writeBooleanValue("keyboardBlockSpellCheck", this.keyboardBlockSpellCheck);
        }
        if(this.kioskModeAllowAssistiveSpeak){
            writer.writeBooleanValue("kioskModeAllowAssistiveSpeak", this.kioskModeAllowAssistiveSpeak);
        }
        if(this.kioskModeAllowAssistiveTouchSettings){
            writer.writeBooleanValue("kioskModeAllowAssistiveTouchSettings", this.kioskModeAllowAssistiveTouchSettings);
        }
        if(this.kioskModeAllowAutoLock){
            writer.writeBooleanValue("kioskModeAllowAutoLock", this.kioskModeAllowAutoLock);
        }
        if(this.kioskModeAllowColorInversionSettings){
            writer.writeBooleanValue("kioskModeAllowColorInversionSettings", this.kioskModeAllowColorInversionSettings);
        }
        if(this.kioskModeAllowRingerSwitch){
            writer.writeBooleanValue("kioskModeAllowRingerSwitch", this.kioskModeAllowRingerSwitch);
        }
        if(this.kioskModeAllowScreenRotation){
            writer.writeBooleanValue("kioskModeAllowScreenRotation", this.kioskModeAllowScreenRotation);
        }
        if(this.kioskModeAllowSleepButton){
            writer.writeBooleanValue("kioskModeAllowSleepButton", this.kioskModeAllowSleepButton);
        }
        if(this.kioskModeAllowTouchscreen){
            writer.writeBooleanValue("kioskModeAllowTouchscreen", this.kioskModeAllowTouchscreen);
        }
        if(this.kioskModeAllowVoiceOverSettings){
            writer.writeBooleanValue("kioskModeAllowVoiceOverSettings", this.kioskModeAllowVoiceOverSettings);
        }
        if(this.kioskModeAllowVolumeButtons){
            writer.writeBooleanValue("kioskModeAllowVolumeButtons", this.kioskModeAllowVolumeButtons);
        }
        if(this.kioskModeAllowZoomSettings){
            writer.writeBooleanValue("kioskModeAllowZoomSettings", this.kioskModeAllowZoomSettings);
        }
        if(this.kioskModeAppStoreUrl){
            writer.writeStringValue("kioskModeAppStoreUrl", this.kioskModeAppStoreUrl);
        }
        if(this.kioskModeBuiltInAppId){
            writer.writeStringValue("kioskModeBuiltInAppId", this.kioskModeBuiltInAppId);
        }
        if(this.kioskModeManagedAppId){
            writer.writeStringValue("kioskModeManagedAppId", this.kioskModeManagedAppId);
        }
        if(this.kioskModeRequireAssistiveTouch){
            writer.writeBooleanValue("kioskModeRequireAssistiveTouch", this.kioskModeRequireAssistiveTouch);
        }
        if(this.kioskModeRequireColorInversion){
            writer.writeBooleanValue("kioskModeRequireColorInversion", this.kioskModeRequireColorInversion);
        }
        if(this.kioskModeRequireMonoAudio){
            writer.writeBooleanValue("kioskModeRequireMonoAudio", this.kioskModeRequireMonoAudio);
        }
        if(this.kioskModeRequireVoiceOver){
            writer.writeBooleanValue("kioskModeRequireVoiceOver", this.kioskModeRequireVoiceOver);
        }
        if(this.kioskModeRequireZoom){
            writer.writeBooleanValue("kioskModeRequireZoom", this.kioskModeRequireZoom);
        }
        if(this.lockScreenBlockControlCenter){
            writer.writeBooleanValue("lockScreenBlockControlCenter", this.lockScreenBlockControlCenter);
        }
        if(this.lockScreenBlockNotificationView){
            writer.writeBooleanValue("lockScreenBlockNotificationView", this.lockScreenBlockNotificationView);
        }
        if(this.lockScreenBlockPassbook){
            writer.writeBooleanValue("lockScreenBlockPassbook", this.lockScreenBlockPassbook);
        }
        if(this.lockScreenBlockTodayView){
            writer.writeBooleanValue("lockScreenBlockTodayView", this.lockScreenBlockTodayView);
        }
        if(this.mediaContentRatingApps){
            writer.writeEnumValue<RatingAppsType>("mediaContentRatingApps", this.mediaContentRatingApps);
        }
        if(this.mediaContentRatingAustralia){
            writer.writeObjectValue<MediaContentRatingAustraliaImpl>("mediaContentRatingAustralia", new MediaContentRatingAustraliaImpl(this.mediaContentRatingAustralia));
        }
        if(this.mediaContentRatingCanada){
            writer.writeObjectValue<MediaContentRatingCanadaImpl>("mediaContentRatingCanada", new MediaContentRatingCanadaImpl(this.mediaContentRatingCanada));
        }
        if(this.mediaContentRatingFrance){
            writer.writeObjectValue<MediaContentRatingFranceImpl>("mediaContentRatingFrance", new MediaContentRatingFranceImpl(this.mediaContentRatingFrance));
        }
        if(this.mediaContentRatingGermany){
            writer.writeObjectValue<MediaContentRatingGermanyImpl>("mediaContentRatingGermany", new MediaContentRatingGermanyImpl(this.mediaContentRatingGermany));
        }
        if(this.mediaContentRatingIreland){
            writer.writeObjectValue<MediaContentRatingIrelandImpl>("mediaContentRatingIreland", new MediaContentRatingIrelandImpl(this.mediaContentRatingIreland));
        }
        if(this.mediaContentRatingJapan){
            writer.writeObjectValue<MediaContentRatingJapanImpl>("mediaContentRatingJapan", new MediaContentRatingJapanImpl(this.mediaContentRatingJapan));
        }
        if(this.mediaContentRatingNewZealand){
            writer.writeObjectValue<MediaContentRatingNewZealandImpl>("mediaContentRatingNewZealand", new MediaContentRatingNewZealandImpl(this.mediaContentRatingNewZealand));
        }
        if(this.mediaContentRatingUnitedKingdom){
            writer.writeObjectValue<MediaContentRatingUnitedKingdomImpl>("mediaContentRatingUnitedKingdom", new MediaContentRatingUnitedKingdomImpl(this.mediaContentRatingUnitedKingdom));
        }
        if(this.mediaContentRatingUnitedStates){
            writer.writeObjectValue<MediaContentRatingUnitedStatesImpl>("mediaContentRatingUnitedStates", new MediaContentRatingUnitedStatesImpl(this.mediaContentRatingUnitedStates));
        }
        if(this.messagesBlocked){
            writer.writeBooleanValue("messagesBlocked", this.messagesBlocked);
        }
        if(this.networkUsageRules && this.networkUsageRules.length != 0){        const networkUsageRulesArrValue: IosNetworkUsageRuleImpl[] = []; this.networkUsageRules?.forEach(element => {networkUsageRulesArrValue.push(new IosNetworkUsageRuleImpl(element));});
            writer.writeCollectionOfObjectValues<IosNetworkUsageRuleImpl>("networkUsageRules", networkUsageRulesArrValue);
        }
        if(this.notificationsBlockSettingsModification){
            writer.writeBooleanValue("notificationsBlockSettingsModification", this.notificationsBlockSettingsModification);
        }
        if(this.passcodeBlockFingerprintModification){
            writer.writeBooleanValue("passcodeBlockFingerprintModification", this.passcodeBlockFingerprintModification);
        }
        if(this.passcodeBlockFingerprintUnlock){
            writer.writeBooleanValue("passcodeBlockFingerprintUnlock", this.passcodeBlockFingerprintUnlock);
        }
        if(this.passcodeBlockModification){
            writer.writeBooleanValue("passcodeBlockModification", this.passcodeBlockModification);
        }
        if(this.passcodeBlockSimple){
            writer.writeBooleanValue("passcodeBlockSimple", this.passcodeBlockSimple);
        }
        if(this.passcodeExpirationDays){
            writer.writeNumberValue("passcodeExpirationDays", this.passcodeExpirationDays);
        }
        if(this.passcodeMinimumCharacterSetCount){
            writer.writeNumberValue("passcodeMinimumCharacterSetCount", this.passcodeMinimumCharacterSetCount);
        }
        if(this.passcodeMinimumLength){
            writer.writeNumberValue("passcodeMinimumLength", this.passcodeMinimumLength);
        }
        if(this.passcodeMinutesOfInactivityBeforeLock){
            writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", this.passcodeMinutesOfInactivityBeforeLock);
        }
        if(this.passcodeMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("passcodeMinutesOfInactivityBeforeScreenTimeout", this.passcodeMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.passcodePreviousPasscodeBlockCount){
            writer.writeNumberValue("passcodePreviousPasscodeBlockCount", this.passcodePreviousPasscodeBlockCount);
        }
        if(this.passcodeRequired){
            writer.writeBooleanValue("passcodeRequired", this.passcodeRequired);
        }
        if(this.passcodeRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", this.passcodeRequiredType);
        }
        if(this.passcodeSignInFailureCountBeforeWipe){
            writer.writeNumberValue("passcodeSignInFailureCountBeforeWipe", this.passcodeSignInFailureCountBeforeWipe);
        }
        if(this.podcastsBlocked){
            writer.writeBooleanValue("podcastsBlocked", this.podcastsBlocked);
        }
        if(this.safariBlockAutofill){
            writer.writeBooleanValue("safariBlockAutofill", this.safariBlockAutofill);
        }
        if(this.safariBlocked){
            writer.writeBooleanValue("safariBlocked", this.safariBlocked);
        }
        if(this.safariBlockJavaScript){
            writer.writeBooleanValue("safariBlockJavaScript", this.safariBlockJavaScript);
        }
        if(this.safariBlockPopups){
            writer.writeBooleanValue("safariBlockPopups", this.safariBlockPopups);
        }
        if(this.safariCookieSettings){
            writer.writeEnumValue<WebBrowserCookieSettings>("safariCookieSettings", this.safariCookieSettings);
        }
        if(this.safariManagedDomains){
            writer.writeCollectionOfPrimitiveValues<string>("safariManagedDomains", this.safariManagedDomains);
        }
        if(this.safariPasswordAutoFillDomains){
            writer.writeCollectionOfPrimitiveValues<string>("safariPasswordAutoFillDomains", this.safariPasswordAutoFillDomains);
        }
        if(this.safariRequireFraudWarning){
            writer.writeBooleanValue("safariRequireFraudWarning", this.safariRequireFraudWarning);
        }
        if(this.screenCaptureBlocked){
            writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        }
        if(this.siriBlocked){
            writer.writeBooleanValue("siriBlocked", this.siriBlocked);
        }
        if(this.siriBlockedWhenLocked){
            writer.writeBooleanValue("siriBlockedWhenLocked", this.siriBlockedWhenLocked);
        }
        if(this.siriBlockUserGeneratedContent){
            writer.writeBooleanValue("siriBlockUserGeneratedContent", this.siriBlockUserGeneratedContent);
        }
        if(this.siriRequireProfanityFilter){
            writer.writeBooleanValue("siriRequireProfanityFilter", this.siriRequireProfanityFilter);
        }
        if(this.spotlightBlockInternetResults){
            writer.writeBooleanValue("spotlightBlockInternetResults", this.spotlightBlockInternetResults);
        }
        if(this.voiceDialingBlocked){
            writer.writeBooleanValue("voiceDialingBlocked", this.voiceDialingBlocked);
        }
        if(this.wallpaperBlockModification){
            writer.writeBooleanValue("wallpaperBlockModification", this.wallpaperBlockModification);
        }
        if(this.wiFiConnectOnlyToConfiguredNetworks){
            writer.writeBooleanValue("wiFiConnectOnlyToConfiguredNetworks", this.wiFiConnectOnlyToConfiguredNetworks);
        }
    };
}
