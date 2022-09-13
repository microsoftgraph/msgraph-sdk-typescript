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
import {AppListItem, DeviceConfiguration, IosNetworkUsageRule, MediaContentRatingAustralia, MediaContentRatingCanada, MediaContentRatingFrance, MediaContentRatingGermany, MediaContentRatingIreland, MediaContentRatingJapan, MediaContentRatingNewZealand, MediaContentRatingUnitedKingdom, MediaContentRatingUnitedStates} from './index';
import {RatingAppsType} from './ratingAppsType';
import {RequiredPasswordType} from './requiredPasswordType';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosGeneralDeviceConfiguration extends DeviceConfiguration implements Parsable {
    /** Indicates whether or not to allow account modification when the device is in supervised mode. */
    private _accountBlockModification?: boolean | undefined;
    /** Indicates whether or not to allow activation lock when the device is in the supervised mode. */
    private _activationLockAllowWhenSupervised?: boolean | undefined;
    /** Indicates whether or not to allow AirDrop when the device is in supervised mode. */
    private _airDropBlocked?: boolean | undefined;
    /** Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later). */
    private _airDropForceUnmanagedDropTarget?: boolean | undefined;
    /** Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password. */
    private _airPlayForcePairingPasswordForOutgoingRequests?: boolean | undefined;
    /** Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later). */
    private _appleNewsBlocked?: boolean | undefined;
    /** Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later). */
    private _appleWatchBlockPairing?: boolean | undefined;
    /** Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later). */
    private _appleWatchForceWristDetection?: boolean | undefined;
    /** Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later. This collection can contain a maximum of 500 elements. */
    private _appsSingleAppModeList?: AppListItem[] | undefined;
    /** Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in supervised mode (iOS 9.0 and later). */
    private _appStoreBlockAutomaticDownloads?: boolean | undefined;
    /** Indicates whether or not to block the user from using the App Store. Requires a supervised device for iOS 13 and later. */
    private _appStoreBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from making in app purchases. */
    private _appStoreBlockInAppPurchases?: boolean | undefined;
    /** Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to supervised mode only (iOS 9.0 and later). */
    private _appStoreBlockUIAppInstallation?: boolean | undefined;
    /** Indicates whether or not to require a password when using the app store. */
    private _appStoreRequirePassword?: boolean | undefined;
    /** List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements. */
    private _appsVisibilityList?: AppListItem[] | undefined;
    /** Possible values of the compliance app list. */
    private _appsVisibilityListType?: AppListType | undefined;
    /** Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0 and later). */
    private _bluetoothBlockModification?: boolean | undefined;
    /** Indicates whether or not to block the user from accessing the camera of the device. Requires a supervised device for iOS 13 and later. */
    private _cameraBlocked?: boolean | undefined;
    /** Indicates whether or not to block data roaming. */
    private _cellularBlockDataRoaming?: boolean | undefined;
    /** Indicates whether or not to block global background fetch while roaming. */
    private _cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean | undefined;
    /** Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode. */
    private _cellularBlockPerAppDataModification?: boolean | undefined;
    /** Indicates whether or not to block Personal Hotspot. */
    private _cellularBlockPersonalHotspot?: boolean | undefined;
    /** Indicates whether or not to block voice roaming. */
    private _cellularBlockVoiceRoaming?: boolean | undefined;
    /** Indicates whether or not to block untrusted TLS certificates. */
    private _certificatesBlockUntrustedTlsCertificates?: boolean | undefined;
    /** Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS 9.3 and later). */
    private _classroomAppBlockRemoteScreenObservation?: boolean | undefined;
    /** Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to view a student's screen without prompting when the device is in supervised mode. */
    private _classroomAppForceUnpromptedScreenObservation?: boolean | undefined;
    /** Possible values of the compliance app list. */
    private _compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    private _compliantAppsList?: AppListItem[] | undefined;
    /** Indicates whether or not to block the user from installing configuration profiles and certificates interactively when the device is in supervised mode. */
    private _configurationProfileBlockChanges?: boolean | undefined;
    /** Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ). */
    private _definitionLookupBlocked?: boolean | undefined;
    /** Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in supervised mode. */
    private _deviceBlockEnableRestrictions?: boolean | undefined;
    /** Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device is in supervised mode. */
    private _deviceBlockEraseContentAndSettings?: boolean | undefined;
    /** Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later). */
    private _deviceBlockNameModification?: boolean | undefined;
    /** Indicates whether or not to block diagnostic data submission. */
    private _diagnosticDataBlockSubmission?: boolean | undefined;
    /** Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode (iOS 9.3.2 and later). */
    private _diagnosticDataBlockSubmissionModification?: boolean | undefined;
    /** Indicates whether or not to block the user from viewing managed documents in unmanaged apps. */
    private _documentsBlockManagedDocumentsInUnmanagedApps?: boolean | undefined;
    /** Indicates whether or not to block the user from viewing unmanaged documents in managed apps. */
    private _documentsBlockUnmanagedDocumentsInManagedApps?: boolean | undefined;
    /** An email address lacking a suffix that matches any of these strings will be considered out-of-domain. */
    private _emailInDomainSuffixes?: string[] | undefined;
    /** Indicates whether or not to block the user from trusting an enterprise app. */
    private _enterpriseAppBlockTrust?: boolean | undefined;
    /** [Deprecated] Configuring this setting and setting the value to 'true' has no effect on the device. */
    private _enterpriseAppBlockTrustModification?: boolean | undefined;
    /** Indicates whether or not to block the user from using FaceTime. Requires a supervised device for iOS 13 and later. */
    private _faceTimeBlocked?: boolean | undefined;
    /** Indicates whether or not to block changes to Find My Friends when the device is in supervised mode. */
    private _findMyFriendsBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Game Center when the device is in supervised mode. */
    private _gameCenterBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from having friends in Game Center. Requires a supervised device for iOS 13 and later. */
    private _gamingBlockGameCenterFriends?: boolean | undefined;
    /** Indicates whether or not to block the user from using multiplayer gaming. Requires a supervised device for iOS 13 and later. */
    private _gamingBlockMultiplayer?: boolean | undefined;
    /** indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device is in supervised mode. */
    private _hostPairingBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode. */
    private _iBooksStoreBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica. */
    private _iBooksStoreBlockErotica?: boolean | undefined;
    /** Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS device. */
    private _iCloudBlockActivityContinuation?: boolean | undefined;
    /** Indicates whether or not to block iCloud backup. Requires a supervised device for iOS 13 and later. */
    private _iCloudBlockBackup?: boolean | undefined;
    /** Indicates whether or not to block iCloud document sync. Requires a supervised device for iOS 13 and later. */
    private _iCloudBlockDocumentSync?: boolean | undefined;
    /** Indicates whether or not to block Managed Apps Cloud Sync. */
    private _iCloudBlockManagedAppsSync?: boolean | undefined;
    /** Indicates whether or not to block iCloud Photo Library. */
    private _iCloudBlockPhotoLibrary?: boolean | undefined;
    /** Indicates whether or not to block iCloud Photo Stream Sync. */
    private _iCloudBlockPhotoStreamSync?: boolean | undefined;
    /** Indicates whether or not to block Shared Photo Stream. */
    private _iCloudBlockSharedPhotoStream?: boolean | undefined;
    /** Indicates whether or not to require backups to iCloud be encrypted. */
    private _iCloudRequireEncryptedBackup?: boolean | undefined;
    /** Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store. Requires a supervised device for iOS 13 and later. */
    private _iTunesBlockExplicitContent?: boolean | undefined;
    /** Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised mode (iOS 9.3 and later and macOS 10.12 and later). */
    private _iTunesBlockMusicService?: boolean | undefined;
    /** Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and later). */
    private _iTunesBlockRadio?: boolean | undefined;
    /** Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later). */
    private _keyboardBlockAutoCorrect?: boolean | undefined;
    /** Indicates whether or not to block the user from using dictation input when the device is in supervised mode. */
    private _keyboardBlockDictation?: boolean | undefined;
    /** Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later). */
    private _keyboardBlockPredictive?: boolean | undefined;
    /** Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later). */
    private _keyboardBlockShortcuts?: boolean | undefined;
    /** Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later). */
    private _keyboardBlockSpellCheck?: boolean | undefined;
    /** Indicates whether or not to allow assistive speak while in kiosk mode. */
    private _kioskModeAllowAssistiveSpeak?: boolean | undefined;
    /** Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode. */
    private _kioskModeAllowAssistiveTouchSettings?: boolean | undefined;
    /** Indicates whether or not to allow device auto lock while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockAutoLock instead. */
    private _kioskModeAllowAutoLock?: boolean | undefined;
    /** Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode. */
    private _kioskModeAllowColorInversionSettings?: boolean | undefined;
    /** Indicates whether or not to allow use of the ringer switch while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockRingerSwitch instead. */
    private _kioskModeAllowRingerSwitch?: boolean | undefined;
    /** Indicates whether or not to allow screen rotation while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockScreenRotation instead. */
    private _kioskModeAllowScreenRotation?: boolean | undefined;
    /** Indicates whether or not to allow use of the sleep button while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockSleepButton instead. */
    private _kioskModeAllowSleepButton?: boolean | undefined;
    /** Indicates whether or not to allow use of the touchscreen while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockTouchscreen instead. */
    private _kioskModeAllowTouchscreen?: boolean | undefined;
    /** Indicates whether or not to allow access to the voice over settings while in kiosk mode. */
    private _kioskModeAllowVoiceOverSettings?: boolean | undefined;
    /** Indicates whether or not to allow use of the volume buttons while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockVolumeButtons instead. */
    private _kioskModeAllowVolumeButtons?: boolean | undefined;
    /** Indicates whether or not to allow access to the zoom settings while in kiosk mode. */
    private _kioskModeAllowZoomSettings?: boolean | undefined;
    /** URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known. */
    private _kioskModeAppStoreUrl?: string | undefined;
    /** ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set. */
    private _kioskModeBuiltInAppId?: string | undefined;
    /** Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will be ignored. */
    private _kioskModeManagedAppId?: string | undefined;
    /** Indicates whether or not to require assistive touch while in kiosk mode. */
    private _kioskModeRequireAssistiveTouch?: boolean | undefined;
    /** Indicates whether or not to require color inversion while in kiosk mode. */
    private _kioskModeRequireColorInversion?: boolean | undefined;
    /** Indicates whether or not to require mono audio while in kiosk mode. */
    private _kioskModeRequireMonoAudio?: boolean | undefined;
    /** Indicates whether or not to require voice over while in kiosk mode. */
    private _kioskModeRequireVoiceOver?: boolean | undefined;
    /** Indicates whether or not to require zoom while in kiosk mode. */
    private _kioskModeRequireZoom?: boolean | undefined;
    /** Indicates whether or not to block the user from using control center on the lock screen. */
    private _lockScreenBlockControlCenter?: boolean | undefined;
    /** Indicates whether or not to block the user from using the notification view on the lock screen. */
    private _lockScreenBlockNotificationView?: boolean | undefined;
    /** Indicates whether or not to block the user from using passbook when the device is locked. */
    private _lockScreenBlockPassbook?: boolean | undefined;
    /** Indicates whether or not to block the user from using the Today View on the lock screen. */
    private _lockScreenBlockTodayView?: boolean | undefined;
    /** Apps rating as in media content */
    private _mediaContentRatingApps?: RatingAppsType | undefined;
    /** Media content rating settings for Australia */
    private _mediaContentRatingAustralia?: MediaContentRatingAustralia | undefined;
    /** Media content rating settings for Canada */
    private _mediaContentRatingCanada?: MediaContentRatingCanada | undefined;
    /** Media content rating settings for France */
    private _mediaContentRatingFrance?: MediaContentRatingFrance | undefined;
    /** Media content rating settings for Germany */
    private _mediaContentRatingGermany?: MediaContentRatingGermany | undefined;
    /** Media content rating settings for Ireland */
    private _mediaContentRatingIreland?: MediaContentRatingIreland | undefined;
    /** Media content rating settings for Japan */
    private _mediaContentRatingJapan?: MediaContentRatingJapan | undefined;
    /** Media content rating settings for New Zealand */
    private _mediaContentRatingNewZealand?: MediaContentRatingNewZealand | undefined;
    /** Media content rating settings for United Kingdom */
    private _mediaContentRatingUnitedKingdom?: MediaContentRatingUnitedKingdom | undefined;
    /** Media content rating settings for United States */
    private _mediaContentRatingUnitedStates?: MediaContentRatingUnitedStates | undefined;
    /** Indicates whether or not to block the user from using the Messages app on the supervised device. */
    private _messagesBlocked?: boolean | undefined;
    /** List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000 elements. */
    private _networkUsageRules?: IosNetworkUsageRule[] | undefined;
    /** Indicates whether or not to allow notifications settings modification (iOS 9.3 and later). */
    private _notificationsBlockSettingsModification?: boolean | undefined;
    /** Block modification of registered Touch ID fingerprints when in supervised mode. */
    private _passcodeBlockFingerprintModification?: boolean | undefined;
    /** Indicates whether or not to block fingerprint unlock. */
    private _passcodeBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later). */
    private _passcodeBlockModification?: boolean | undefined;
    /** Indicates whether or not to block simple passcodes. */
    private _passcodeBlockSimple?: boolean | undefined;
    /** Number of days before the passcode expires. Valid values 1 to 65535 */
    private _passcodeExpirationDays?: number | undefined;
    /** Number of character sets a passcode must contain. Valid values 0 to 4 */
    private _passcodeMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passcode. Valid values 4 to 14 */
    private _passcodeMinimumLength?: number | undefined;
    /** Minutes of inactivity before a passcode is required. */
    private _passcodeMinutesOfInactivityBeforeLock?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    private _passcodeMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passcodes to block. Valid values 1 to 24 */
    private _passcodePreviousPasscodeBlockCount?: number | undefined;
    /** Indicates whether or not to require a passcode. */
    private _passcodeRequired?: boolean | undefined;
    /** Possible values of required passwords. */
    private _passcodeRequiredType?: RequiredPasswordType | undefined;
    /** Number of sign in failures allowed before wiping the device. Valid values 2 to 11 */
    private _passcodeSignInFailureCountBeforeWipe?: number | undefined;
    /** Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later). */
    private _podcastsBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Auto fill in Safari. Requires a supervised device for iOS 13 and later. */
    private _safariBlockAutofill?: boolean | undefined;
    /** Indicates whether or not to block the user from using Safari. Requires a supervised device for iOS 13 and later. */
    private _safariBlocked?: boolean | undefined;
    /** Indicates whether or not to block JavaScript in Safari. */
    private _safariBlockJavaScript?: boolean | undefined;
    /** Indicates whether or not to block popups in Safari. */
    private _safariBlockPopups?: boolean | undefined;
    /** Web Browser Cookie Settings. */
    private _safariCookieSettings?: WebBrowserCookieSettings | undefined;
    /** URLs matching the patterns listed here will be considered managed. */
    private _safariManagedDomains?: string[] | undefined;
    /** Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised mode (iOS 9.3 and later). */
    private _safariPasswordAutoFillDomains?: string[] | undefined;
    /** Indicates whether or not to require fraud warning in Safari. */
    private _safariRequireFraudWarning?: boolean | undefined;
    /** Indicates whether or not to block the user from taking Screenshots. */
    private _screenCaptureBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Siri. */
    private _siriBlocked?: boolean | undefined;
    /** Indicates whether or not to block the user from using Siri when locked. */
    private _siriBlockedWhenLocked?: boolean | undefined;
    /** Indicates whether or not to block Siri from querying user-generated content when used on a supervised device. */
    private _siriBlockUserGeneratedContent?: boolean | undefined;
    /** Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device. */
    private _siriRequireProfanityFilter?: boolean | undefined;
    /** Indicates whether or not to block Spotlight search from returning internet results on supervised device. */
    private _spotlightBlockInternetResults?: boolean | undefined;
    /** Indicates whether or not to block voice dialing. */
    private _voiceDialingBlocked?: boolean | undefined;
    /** Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) . */
    private _wallpaperBlockModification?: boolean | undefined;
    /** Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is in supervised mode. Available for devices running iOS and iPadOS versions 14.4 and earlier. Devices running 14.5+ should use the setting, 'WiFiConnectToAllowedNetworksOnlyForced. */
    private _wiFiConnectOnlyToConfiguredNetworks?: boolean | undefined;
    /**
     * Gets the accountBlockModification property value. Indicates whether or not to allow account modification when the device is in supervised mode.
     * @returns a boolean
     */
    public get accountBlockModification() {
        return this._accountBlockModification;
    };
    /**
     * Sets the accountBlockModification property value. Indicates whether or not to allow account modification when the device is in supervised mode.
     * @param value Value to set for the accountBlockModification property.
     */
    public set accountBlockModification(value: boolean | undefined) {
        this._accountBlockModification = value;
    };
    /**
     * Gets the activationLockAllowWhenSupervised property value. Indicates whether or not to allow activation lock when the device is in the supervised mode.
     * @returns a boolean
     */
    public get activationLockAllowWhenSupervised() {
        return this._activationLockAllowWhenSupervised;
    };
    /**
     * Sets the activationLockAllowWhenSupervised property value. Indicates whether or not to allow activation lock when the device is in the supervised mode.
     * @param value Value to set for the activationLockAllowWhenSupervised property.
     */
    public set activationLockAllowWhenSupervised(value: boolean | undefined) {
        this._activationLockAllowWhenSupervised = value;
    };
    /**
     * Gets the airDropBlocked property value. Indicates whether or not to allow AirDrop when the device is in supervised mode.
     * @returns a boolean
     */
    public get airDropBlocked() {
        return this._airDropBlocked;
    };
    /**
     * Sets the airDropBlocked property value. Indicates whether or not to allow AirDrop when the device is in supervised mode.
     * @param value Value to set for the airDropBlocked property.
     */
    public set airDropBlocked(value: boolean | undefined) {
        this._airDropBlocked = value;
    };
    /**
     * Gets the airDropForceUnmanagedDropTarget property value. Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later).
     * @returns a boolean
     */
    public get airDropForceUnmanagedDropTarget() {
        return this._airDropForceUnmanagedDropTarget;
    };
    /**
     * Sets the airDropForceUnmanagedDropTarget property value. Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later).
     * @param value Value to set for the airDropForceUnmanagedDropTarget property.
     */
    public set airDropForceUnmanagedDropTarget(value: boolean | undefined) {
        this._airDropForceUnmanagedDropTarget = value;
    };
    /**
     * Gets the airPlayForcePairingPasswordForOutgoingRequests property value. Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password.
     * @returns a boolean
     */
    public get airPlayForcePairingPasswordForOutgoingRequests() {
        return this._airPlayForcePairingPasswordForOutgoingRequests;
    };
    /**
     * Sets the airPlayForcePairingPasswordForOutgoingRequests property value. Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password.
     * @param value Value to set for the airPlayForcePairingPasswordForOutgoingRequests property.
     */
    public set airPlayForcePairingPasswordForOutgoingRequests(value: boolean | undefined) {
        this._airPlayForcePairingPasswordForOutgoingRequests = value;
    };
    /**
     * Gets the appleNewsBlocked property value. Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later).
     * @returns a boolean
     */
    public get appleNewsBlocked() {
        return this._appleNewsBlocked;
    };
    /**
     * Sets the appleNewsBlocked property value. Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later).
     * @param value Value to set for the appleNewsBlocked property.
     */
    public set appleNewsBlocked(value: boolean | undefined) {
        this._appleNewsBlocked = value;
    };
    /**
     * Gets the appleWatchBlockPairing property value. Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later).
     * @returns a boolean
     */
    public get appleWatchBlockPairing() {
        return this._appleWatchBlockPairing;
    };
    /**
     * Sets the appleWatchBlockPairing property value. Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later).
     * @param value Value to set for the appleWatchBlockPairing property.
     */
    public set appleWatchBlockPairing(value: boolean | undefined) {
        this._appleWatchBlockPairing = value;
    };
    /**
     * Gets the appleWatchForceWristDetection property value. Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later).
     * @returns a boolean
     */
    public get appleWatchForceWristDetection() {
        return this._appleWatchForceWristDetection;
    };
    /**
     * Sets the appleWatchForceWristDetection property value. Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later).
     * @param value Value to set for the appleWatchForceWristDetection property.
     */
    public set appleWatchForceWristDetection(value: boolean | undefined) {
        this._appleWatchForceWristDetection = value;
    };
    /**
     * Gets the appsSingleAppModeList property value. Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later. This collection can contain a maximum of 500 elements.
     * @returns a appListItem
     */
    public get appsSingleAppModeList() {
        return this._appsSingleAppModeList;
    };
    /**
     * Sets the appsSingleAppModeList property value. Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the appsSingleAppModeList property.
     */
    public set appsSingleAppModeList(value: AppListItem[] | undefined) {
        this._appsSingleAppModeList = value;
    };
    /**
     * Gets the appStoreBlockAutomaticDownloads property value. Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in supervised mode (iOS 9.0 and later).
     * @returns a boolean
     */
    public get appStoreBlockAutomaticDownloads() {
        return this._appStoreBlockAutomaticDownloads;
    };
    /**
     * Sets the appStoreBlockAutomaticDownloads property value. Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in supervised mode (iOS 9.0 and later).
     * @param value Value to set for the appStoreBlockAutomaticDownloads property.
     */
    public set appStoreBlockAutomaticDownloads(value: boolean | undefined) {
        this._appStoreBlockAutomaticDownloads = value;
    };
    /**
     * Gets the appStoreBlocked property value. Indicates whether or not to block the user from using the App Store. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get appStoreBlocked() {
        return this._appStoreBlocked;
    };
    /**
     * Sets the appStoreBlocked property value. Indicates whether or not to block the user from using the App Store. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the appStoreBlocked property.
     */
    public set appStoreBlocked(value: boolean | undefined) {
        this._appStoreBlocked = value;
    };
    /**
     * Gets the appStoreBlockInAppPurchases property value. Indicates whether or not to block the user from making in app purchases.
     * @returns a boolean
     */
    public get appStoreBlockInAppPurchases() {
        return this._appStoreBlockInAppPurchases;
    };
    /**
     * Sets the appStoreBlockInAppPurchases property value. Indicates whether or not to block the user from making in app purchases.
     * @param value Value to set for the appStoreBlockInAppPurchases property.
     */
    public set appStoreBlockInAppPurchases(value: boolean | undefined) {
        this._appStoreBlockInAppPurchases = value;
    };
    /**
     * Gets the appStoreBlockUIAppInstallation property value. Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to supervised mode only (iOS 9.0 and later).
     * @returns a boolean
     */
    public get appStoreBlockUIAppInstallation() {
        return this._appStoreBlockUIAppInstallation;
    };
    /**
     * Sets the appStoreBlockUIAppInstallation property value. Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to supervised mode only (iOS 9.0 and later).
     * @param value Value to set for the appStoreBlockUIAppInstallation property.
     */
    public set appStoreBlockUIAppInstallation(value: boolean | undefined) {
        this._appStoreBlockUIAppInstallation = value;
    };
    /**
     * Gets the appStoreRequirePassword property value. Indicates whether or not to require a password when using the app store.
     * @returns a boolean
     */
    public get appStoreRequirePassword() {
        return this._appStoreRequirePassword;
    };
    /**
     * Sets the appStoreRequirePassword property value. Indicates whether or not to require a password when using the app store.
     * @param value Value to set for the appStoreRequirePassword property.
     */
    public set appStoreRequirePassword(value: boolean | undefined) {
        this._appStoreRequirePassword = value;
    };
    /**
     * Gets the appsVisibilityList property value. List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements.
     * @returns a appListItem
     */
    public get appsVisibilityList() {
        return this._appsVisibilityList;
    };
    /**
     * Sets the appsVisibilityList property value. List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements.
     * @param value Value to set for the appsVisibilityList property.
     */
    public set appsVisibilityList(value: AppListItem[] | undefined) {
        this._appsVisibilityList = value;
    };
    /**
     * Gets the appsVisibilityListType property value. Possible values of the compliance app list.
     * @returns a appListType
     */
    public get appsVisibilityListType() {
        return this._appsVisibilityListType;
    };
    /**
     * Sets the appsVisibilityListType property value. Possible values of the compliance app list.
     * @param value Value to set for the appsVisibilityListType property.
     */
    public set appsVisibilityListType(value: AppListType | undefined) {
        this._appsVisibilityListType = value;
    };
    /**
     * Gets the bluetoothBlockModification property value. Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0 and later).
     * @returns a boolean
     */
    public get bluetoothBlockModification() {
        return this._bluetoothBlockModification;
    };
    /**
     * Sets the bluetoothBlockModification property value. Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0 and later).
     * @param value Value to set for the bluetoothBlockModification property.
     */
    public set bluetoothBlockModification(value: boolean | undefined) {
        this._bluetoothBlockModification = value;
    };
    /**
     * Gets the cameraBlocked property value. Indicates whether or not to block the user from accessing the camera of the device. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get cameraBlocked() {
        return this._cameraBlocked;
    };
    /**
     * Sets the cameraBlocked property value. Indicates whether or not to block the user from accessing the camera of the device. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the cameraBlocked property.
     */
    public set cameraBlocked(value: boolean | undefined) {
        this._cameraBlocked = value;
    };
    /**
     * Gets the cellularBlockDataRoaming property value. Indicates whether or not to block data roaming.
     * @returns a boolean
     */
    public get cellularBlockDataRoaming() {
        return this._cellularBlockDataRoaming;
    };
    /**
     * Sets the cellularBlockDataRoaming property value. Indicates whether or not to block data roaming.
     * @param value Value to set for the cellularBlockDataRoaming property.
     */
    public set cellularBlockDataRoaming(value: boolean | undefined) {
        this._cellularBlockDataRoaming = value;
    };
    /**
     * Gets the cellularBlockGlobalBackgroundFetchWhileRoaming property value. Indicates whether or not to block global background fetch while roaming.
     * @returns a boolean
     */
    public get cellularBlockGlobalBackgroundFetchWhileRoaming() {
        return this._cellularBlockGlobalBackgroundFetchWhileRoaming;
    };
    /**
     * Sets the cellularBlockGlobalBackgroundFetchWhileRoaming property value. Indicates whether or not to block global background fetch while roaming.
     * @param value Value to set for the cellularBlockGlobalBackgroundFetchWhileRoaming property.
     */
    public set cellularBlockGlobalBackgroundFetchWhileRoaming(value: boolean | undefined) {
        this._cellularBlockGlobalBackgroundFetchWhileRoaming = value;
    };
    /**
     * Gets the cellularBlockPerAppDataModification property value. Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode.
     * @returns a boolean
     */
    public get cellularBlockPerAppDataModification() {
        return this._cellularBlockPerAppDataModification;
    };
    /**
     * Sets the cellularBlockPerAppDataModification property value. Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode.
     * @param value Value to set for the cellularBlockPerAppDataModification property.
     */
    public set cellularBlockPerAppDataModification(value: boolean | undefined) {
        this._cellularBlockPerAppDataModification = value;
    };
    /**
     * Gets the cellularBlockPersonalHotspot property value. Indicates whether or not to block Personal Hotspot.
     * @returns a boolean
     */
    public get cellularBlockPersonalHotspot() {
        return this._cellularBlockPersonalHotspot;
    };
    /**
     * Sets the cellularBlockPersonalHotspot property value. Indicates whether or not to block Personal Hotspot.
     * @param value Value to set for the cellularBlockPersonalHotspot property.
     */
    public set cellularBlockPersonalHotspot(value: boolean | undefined) {
        this._cellularBlockPersonalHotspot = value;
    };
    /**
     * Gets the cellularBlockVoiceRoaming property value. Indicates whether or not to block voice roaming.
     * @returns a boolean
     */
    public get cellularBlockVoiceRoaming() {
        return this._cellularBlockVoiceRoaming;
    };
    /**
     * Sets the cellularBlockVoiceRoaming property value. Indicates whether or not to block voice roaming.
     * @param value Value to set for the cellularBlockVoiceRoaming property.
     */
    public set cellularBlockVoiceRoaming(value: boolean | undefined) {
        this._cellularBlockVoiceRoaming = value;
    };
    /**
     * Gets the certificatesBlockUntrustedTlsCertificates property value. Indicates whether or not to block untrusted TLS certificates.
     * @returns a boolean
     */
    public get certificatesBlockUntrustedTlsCertificates() {
        return this._certificatesBlockUntrustedTlsCertificates;
    };
    /**
     * Sets the certificatesBlockUntrustedTlsCertificates property value. Indicates whether or not to block untrusted TLS certificates.
     * @param value Value to set for the certificatesBlockUntrustedTlsCertificates property.
     */
    public set certificatesBlockUntrustedTlsCertificates(value: boolean | undefined) {
        this._certificatesBlockUntrustedTlsCertificates = value;
    };
    /**
     * Gets the classroomAppBlockRemoteScreenObservation property value. Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS 9.3 and later).
     * @returns a boolean
     */
    public get classroomAppBlockRemoteScreenObservation() {
        return this._classroomAppBlockRemoteScreenObservation;
    };
    /**
     * Sets the classroomAppBlockRemoteScreenObservation property value. Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS 9.3 and later).
     * @param value Value to set for the classroomAppBlockRemoteScreenObservation property.
     */
    public set classroomAppBlockRemoteScreenObservation(value: boolean | undefined) {
        this._classroomAppBlockRemoteScreenObservation = value;
    };
    /**
     * Gets the classroomAppForceUnpromptedScreenObservation property value. Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to view a student's screen without prompting when the device is in supervised mode.
     * @returns a boolean
     */
    public get classroomAppForceUnpromptedScreenObservation() {
        return this._classroomAppForceUnpromptedScreenObservation;
    };
    /**
     * Sets the classroomAppForceUnpromptedScreenObservation property value. Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to view a student's screen without prompting when the device is in supervised mode.
     * @param value Value to set for the classroomAppForceUnpromptedScreenObservation property.
     */
    public set classroomAppForceUnpromptedScreenObservation(value: boolean | undefined) {
        this._classroomAppForceUnpromptedScreenObservation = value;
    };
    /**
     * Gets the compliantAppListType property value. Possible values of the compliance app list.
     * @returns a appListType
     */
    public get compliantAppListType() {
        return this._compliantAppListType;
    };
    /**
     * Sets the compliantAppListType property value. Possible values of the compliance app list.
     * @param value Value to set for the compliantAppListType property.
     */
    public set compliantAppListType(value: AppListType | undefined) {
        this._compliantAppListType = value;
    };
    /**
     * Gets the compliantAppsList property value. List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     * @returns a appListItem
     */
    public get compliantAppsList() {
        return this._compliantAppsList;
    };
    /**
     * Sets the compliantAppsList property value. List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     * @param value Value to set for the compliantAppsList property.
     */
    public set compliantAppsList(value: AppListItem[] | undefined) {
        this._compliantAppsList = value;
    };
    /**
     * Gets the configurationProfileBlockChanges property value. Indicates whether or not to block the user from installing configuration profiles and certificates interactively when the device is in supervised mode.
     * @returns a boolean
     */
    public get configurationProfileBlockChanges() {
        return this._configurationProfileBlockChanges;
    };
    /**
     * Sets the configurationProfileBlockChanges property value. Indicates whether or not to block the user from installing configuration profiles and certificates interactively when the device is in supervised mode.
     * @param value Value to set for the configurationProfileBlockChanges property.
     */
    public set configurationProfileBlockChanges(value: boolean | undefined) {
        this._configurationProfileBlockChanges = value;
    };
    /**
     * Instantiates a new IosGeneralDeviceConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosGeneralDeviceConfiguration";
    };
    /**
     * Gets the definitionLookupBlocked property value. Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ).
     * @returns a boolean
     */
    public get definitionLookupBlocked() {
        return this._definitionLookupBlocked;
    };
    /**
     * Sets the definitionLookupBlocked property value. Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ).
     * @param value Value to set for the definitionLookupBlocked property.
     */
    public set definitionLookupBlocked(value: boolean | undefined) {
        this._definitionLookupBlocked = value;
    };
    /**
     * Gets the deviceBlockEnableRestrictions property value. Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in supervised mode.
     * @returns a boolean
     */
    public get deviceBlockEnableRestrictions() {
        return this._deviceBlockEnableRestrictions;
    };
    /**
     * Sets the deviceBlockEnableRestrictions property value. Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in supervised mode.
     * @param value Value to set for the deviceBlockEnableRestrictions property.
     */
    public set deviceBlockEnableRestrictions(value: boolean | undefined) {
        this._deviceBlockEnableRestrictions = value;
    };
    /**
     * Gets the deviceBlockEraseContentAndSettings property value. Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device is in supervised mode.
     * @returns a boolean
     */
    public get deviceBlockEraseContentAndSettings() {
        return this._deviceBlockEraseContentAndSettings;
    };
    /**
     * Sets the deviceBlockEraseContentAndSettings property value. Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device is in supervised mode.
     * @param value Value to set for the deviceBlockEraseContentAndSettings property.
     */
    public set deviceBlockEraseContentAndSettings(value: boolean | undefined) {
        this._deviceBlockEraseContentAndSettings = value;
    };
    /**
     * Gets the deviceBlockNameModification property value. Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later).
     * @returns a boolean
     */
    public get deviceBlockNameModification() {
        return this._deviceBlockNameModification;
    };
    /**
     * Sets the deviceBlockNameModification property value. Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later).
     * @param value Value to set for the deviceBlockNameModification property.
     */
    public set deviceBlockNameModification(value: boolean | undefined) {
        this._deviceBlockNameModification = value;
    };
    /**
     * Gets the diagnosticDataBlockSubmission property value. Indicates whether or not to block diagnostic data submission.
     * @returns a boolean
     */
    public get diagnosticDataBlockSubmission() {
        return this._diagnosticDataBlockSubmission;
    };
    /**
     * Sets the diagnosticDataBlockSubmission property value. Indicates whether or not to block diagnostic data submission.
     * @param value Value to set for the diagnosticDataBlockSubmission property.
     */
    public set diagnosticDataBlockSubmission(value: boolean | undefined) {
        this._diagnosticDataBlockSubmission = value;
    };
    /**
     * Gets the diagnosticDataBlockSubmissionModification property value. Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode (iOS 9.3.2 and later).
     * @returns a boolean
     */
    public get diagnosticDataBlockSubmissionModification() {
        return this._diagnosticDataBlockSubmissionModification;
    };
    /**
     * Sets the diagnosticDataBlockSubmissionModification property value. Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode (iOS 9.3.2 and later).
     * @param value Value to set for the diagnosticDataBlockSubmissionModification property.
     */
    public set diagnosticDataBlockSubmissionModification(value: boolean | undefined) {
        this._diagnosticDataBlockSubmissionModification = value;
    };
    /**
     * Gets the documentsBlockManagedDocumentsInUnmanagedApps property value. Indicates whether or not to block the user from viewing managed documents in unmanaged apps.
     * @returns a boolean
     */
    public get documentsBlockManagedDocumentsInUnmanagedApps() {
        return this._documentsBlockManagedDocumentsInUnmanagedApps;
    };
    /**
     * Sets the documentsBlockManagedDocumentsInUnmanagedApps property value. Indicates whether or not to block the user from viewing managed documents in unmanaged apps.
     * @param value Value to set for the documentsBlockManagedDocumentsInUnmanagedApps property.
     */
    public set documentsBlockManagedDocumentsInUnmanagedApps(value: boolean | undefined) {
        this._documentsBlockManagedDocumentsInUnmanagedApps = value;
    };
    /**
     * Gets the documentsBlockUnmanagedDocumentsInManagedApps property value. Indicates whether or not to block the user from viewing unmanaged documents in managed apps.
     * @returns a boolean
     */
    public get documentsBlockUnmanagedDocumentsInManagedApps() {
        return this._documentsBlockUnmanagedDocumentsInManagedApps;
    };
    /**
     * Sets the documentsBlockUnmanagedDocumentsInManagedApps property value. Indicates whether or not to block the user from viewing unmanaged documents in managed apps.
     * @param value Value to set for the documentsBlockUnmanagedDocumentsInManagedApps property.
     */
    public set documentsBlockUnmanagedDocumentsInManagedApps(value: boolean | undefined) {
        this._documentsBlockUnmanagedDocumentsInManagedApps = value;
    };
    /**
     * Gets the emailInDomainSuffixes property value. An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
     * @returns a string
     */
    public get emailInDomainSuffixes() {
        return this._emailInDomainSuffixes;
    };
    /**
     * Sets the emailInDomainSuffixes property value. An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
     * @param value Value to set for the emailInDomainSuffixes property.
     */
    public set emailInDomainSuffixes(value: string[] | undefined) {
        this._emailInDomainSuffixes = value;
    };
    /**
     * Gets the enterpriseAppBlockTrust property value. Indicates whether or not to block the user from trusting an enterprise app.
     * @returns a boolean
     */
    public get enterpriseAppBlockTrust() {
        return this._enterpriseAppBlockTrust;
    };
    /**
     * Sets the enterpriseAppBlockTrust property value. Indicates whether or not to block the user from trusting an enterprise app.
     * @param value Value to set for the enterpriseAppBlockTrust property.
     */
    public set enterpriseAppBlockTrust(value: boolean | undefined) {
        this._enterpriseAppBlockTrust = value;
    };
    /**
     * Gets the enterpriseAppBlockTrustModification property value. [Deprecated] Configuring this setting and setting the value to 'true' has no effect on the device.
     * @returns a boolean
     */
    public get enterpriseAppBlockTrustModification() {
        return this._enterpriseAppBlockTrustModification;
    };
    /**
     * Sets the enterpriseAppBlockTrustModification property value. [Deprecated] Configuring this setting and setting the value to 'true' has no effect on the device.
     * @param value Value to set for the enterpriseAppBlockTrustModification property.
     */
    public set enterpriseAppBlockTrustModification(value: boolean | undefined) {
        this._enterpriseAppBlockTrustModification = value;
    };
    /**
     * Gets the faceTimeBlocked property value. Indicates whether or not to block the user from using FaceTime. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get faceTimeBlocked() {
        return this._faceTimeBlocked;
    };
    /**
     * Sets the faceTimeBlocked property value. Indicates whether or not to block the user from using FaceTime. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the faceTimeBlocked property.
     */
    public set faceTimeBlocked(value: boolean | undefined) {
        this._faceTimeBlocked = value;
    };
    /**
     * Gets the findMyFriendsBlocked property value. Indicates whether or not to block changes to Find My Friends when the device is in supervised mode.
     * @returns a boolean
     */
    public get findMyFriendsBlocked() {
        return this._findMyFriendsBlocked;
    };
    /**
     * Sets the findMyFriendsBlocked property value. Indicates whether or not to block changes to Find My Friends when the device is in supervised mode.
     * @param value Value to set for the findMyFriendsBlocked property.
     */
    public set findMyFriendsBlocked(value: boolean | undefined) {
        this._findMyFriendsBlocked = value;
    };
    /**
     * Gets the gameCenterBlocked property value. Indicates whether or not to block the user from using Game Center when the device is in supervised mode.
     * @returns a boolean
     */
    public get gameCenterBlocked() {
        return this._gameCenterBlocked;
    };
    /**
     * Sets the gameCenterBlocked property value. Indicates whether or not to block the user from using Game Center when the device is in supervised mode.
     * @param value Value to set for the gameCenterBlocked property.
     */
    public set gameCenterBlocked(value: boolean | undefined) {
        this._gameCenterBlocked = value;
    };
    /**
     * Gets the gamingBlockGameCenterFriends property value. Indicates whether or not to block the user from having friends in Game Center. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get gamingBlockGameCenterFriends() {
        return this._gamingBlockGameCenterFriends;
    };
    /**
     * Sets the gamingBlockGameCenterFriends property value. Indicates whether or not to block the user from having friends in Game Center. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the gamingBlockGameCenterFriends property.
     */
    public set gamingBlockGameCenterFriends(value: boolean | undefined) {
        this._gamingBlockGameCenterFriends = value;
    };
    /**
     * Gets the gamingBlockMultiplayer property value. Indicates whether or not to block the user from using multiplayer gaming. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get gamingBlockMultiplayer() {
        return this._gamingBlockMultiplayer;
    };
    /**
     * Sets the gamingBlockMultiplayer property value. Indicates whether or not to block the user from using multiplayer gaming. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the gamingBlockMultiplayer property.
     */
    public set gamingBlockMultiplayer(value: boolean | undefined) {
        this._gamingBlockMultiplayer = value;
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
            "appsSingleAppModeList": n => { this.appsSingleAppModeList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "appStoreBlockAutomaticDownloads": n => { this.appStoreBlockAutomaticDownloads = n.getBooleanValue(); },
            "appStoreBlocked": n => { this.appStoreBlocked = n.getBooleanValue(); },
            "appStoreBlockInAppPurchases": n => { this.appStoreBlockInAppPurchases = n.getBooleanValue(); },
            "appStoreBlockUIAppInstallation": n => { this.appStoreBlockUIAppInstallation = n.getBooleanValue(); },
            "appStoreRequirePassword": n => { this.appStoreRequirePassword = n.getBooleanValue(); },
            "appsVisibilityList": n => { this.appsVisibilityList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
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
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
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
            "mediaContentRatingAustralia": n => { this.mediaContentRatingAustralia = n.getObjectValue<MediaContentRatingAustralia>(createMediaContentRatingAustraliaFromDiscriminatorValue); },
            "mediaContentRatingCanada": n => { this.mediaContentRatingCanada = n.getObjectValue<MediaContentRatingCanada>(createMediaContentRatingCanadaFromDiscriminatorValue); },
            "mediaContentRatingFrance": n => { this.mediaContentRatingFrance = n.getObjectValue<MediaContentRatingFrance>(createMediaContentRatingFranceFromDiscriminatorValue); },
            "mediaContentRatingGermany": n => { this.mediaContentRatingGermany = n.getObjectValue<MediaContentRatingGermany>(createMediaContentRatingGermanyFromDiscriminatorValue); },
            "mediaContentRatingIreland": n => { this.mediaContentRatingIreland = n.getObjectValue<MediaContentRatingIreland>(createMediaContentRatingIrelandFromDiscriminatorValue); },
            "mediaContentRatingJapan": n => { this.mediaContentRatingJapan = n.getObjectValue<MediaContentRatingJapan>(createMediaContentRatingJapanFromDiscriminatorValue); },
            "mediaContentRatingNewZealand": n => { this.mediaContentRatingNewZealand = n.getObjectValue<MediaContentRatingNewZealand>(createMediaContentRatingNewZealandFromDiscriminatorValue); },
            "mediaContentRatingUnitedKingdom": n => { this.mediaContentRatingUnitedKingdom = n.getObjectValue<MediaContentRatingUnitedKingdom>(createMediaContentRatingUnitedKingdomFromDiscriminatorValue); },
            "mediaContentRatingUnitedStates": n => { this.mediaContentRatingUnitedStates = n.getObjectValue<MediaContentRatingUnitedStates>(createMediaContentRatingUnitedStatesFromDiscriminatorValue); },
            "messagesBlocked": n => { this.messagesBlocked = n.getBooleanValue(); },
            "networkUsageRules": n => { this.networkUsageRules = n.getCollectionOfObjectValues<IosNetworkUsageRule>(createIosNetworkUsageRuleFromDiscriminatorValue); },
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
     * Gets the hostPairingBlocked property value. indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device is in supervised mode.
     * @returns a boolean
     */
    public get hostPairingBlocked() {
        return this._hostPairingBlocked;
    };
    /**
     * Sets the hostPairingBlocked property value. indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device is in supervised mode.
     * @param value Value to set for the hostPairingBlocked property.
     */
    public set hostPairingBlocked(value: boolean | undefined) {
        this._hostPairingBlocked = value;
    };
    /**
     * Gets the iBooksStoreBlocked property value. Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode.
     * @returns a boolean
     */
    public get iBooksStoreBlocked() {
        return this._iBooksStoreBlocked;
    };
    /**
     * Sets the iBooksStoreBlocked property value. Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode.
     * @param value Value to set for the iBooksStoreBlocked property.
     */
    public set iBooksStoreBlocked(value: boolean | undefined) {
        this._iBooksStoreBlocked = value;
    };
    /**
     * Gets the iBooksStoreBlockErotica property value. Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica.
     * @returns a boolean
     */
    public get iBooksStoreBlockErotica() {
        return this._iBooksStoreBlockErotica;
    };
    /**
     * Sets the iBooksStoreBlockErotica property value. Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica.
     * @param value Value to set for the iBooksStoreBlockErotica property.
     */
    public set iBooksStoreBlockErotica(value: boolean | undefined) {
        this._iBooksStoreBlockErotica = value;
    };
    /**
     * Gets the iCloudBlockActivityContinuation property value. Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS device.
     * @returns a boolean
     */
    public get iCloudBlockActivityContinuation() {
        return this._iCloudBlockActivityContinuation;
    };
    /**
     * Sets the iCloudBlockActivityContinuation property value. Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS device.
     * @param value Value to set for the iCloudBlockActivityContinuation property.
     */
    public set iCloudBlockActivityContinuation(value: boolean | undefined) {
        this._iCloudBlockActivityContinuation = value;
    };
    /**
     * Gets the iCloudBlockBackup property value. Indicates whether or not to block iCloud backup. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get iCloudBlockBackup() {
        return this._iCloudBlockBackup;
    };
    /**
     * Sets the iCloudBlockBackup property value. Indicates whether or not to block iCloud backup. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the iCloudBlockBackup property.
     */
    public set iCloudBlockBackup(value: boolean | undefined) {
        this._iCloudBlockBackup = value;
    };
    /**
     * Gets the iCloudBlockDocumentSync property value. Indicates whether or not to block iCloud document sync. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get iCloudBlockDocumentSync() {
        return this._iCloudBlockDocumentSync;
    };
    /**
     * Sets the iCloudBlockDocumentSync property value. Indicates whether or not to block iCloud document sync. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the iCloudBlockDocumentSync property.
     */
    public set iCloudBlockDocumentSync(value: boolean | undefined) {
        this._iCloudBlockDocumentSync = value;
    };
    /**
     * Gets the iCloudBlockManagedAppsSync property value. Indicates whether or not to block Managed Apps Cloud Sync.
     * @returns a boolean
     */
    public get iCloudBlockManagedAppsSync() {
        return this._iCloudBlockManagedAppsSync;
    };
    /**
     * Sets the iCloudBlockManagedAppsSync property value. Indicates whether or not to block Managed Apps Cloud Sync.
     * @param value Value to set for the iCloudBlockManagedAppsSync property.
     */
    public set iCloudBlockManagedAppsSync(value: boolean | undefined) {
        this._iCloudBlockManagedAppsSync = value;
    };
    /**
     * Gets the iCloudBlockPhotoLibrary property value. Indicates whether or not to block iCloud Photo Library.
     * @returns a boolean
     */
    public get iCloudBlockPhotoLibrary() {
        return this._iCloudBlockPhotoLibrary;
    };
    /**
     * Sets the iCloudBlockPhotoLibrary property value. Indicates whether or not to block iCloud Photo Library.
     * @param value Value to set for the iCloudBlockPhotoLibrary property.
     */
    public set iCloudBlockPhotoLibrary(value: boolean | undefined) {
        this._iCloudBlockPhotoLibrary = value;
    };
    /**
     * Gets the iCloudBlockPhotoStreamSync property value. Indicates whether or not to block iCloud Photo Stream Sync.
     * @returns a boolean
     */
    public get iCloudBlockPhotoStreamSync() {
        return this._iCloudBlockPhotoStreamSync;
    };
    /**
     * Sets the iCloudBlockPhotoStreamSync property value. Indicates whether or not to block iCloud Photo Stream Sync.
     * @param value Value to set for the iCloudBlockPhotoStreamSync property.
     */
    public set iCloudBlockPhotoStreamSync(value: boolean | undefined) {
        this._iCloudBlockPhotoStreamSync = value;
    };
    /**
     * Gets the iCloudBlockSharedPhotoStream property value. Indicates whether or not to block Shared Photo Stream.
     * @returns a boolean
     */
    public get iCloudBlockSharedPhotoStream() {
        return this._iCloudBlockSharedPhotoStream;
    };
    /**
     * Sets the iCloudBlockSharedPhotoStream property value. Indicates whether or not to block Shared Photo Stream.
     * @param value Value to set for the iCloudBlockSharedPhotoStream property.
     */
    public set iCloudBlockSharedPhotoStream(value: boolean | undefined) {
        this._iCloudBlockSharedPhotoStream = value;
    };
    /**
     * Gets the iCloudRequireEncryptedBackup property value. Indicates whether or not to require backups to iCloud be encrypted.
     * @returns a boolean
     */
    public get iCloudRequireEncryptedBackup() {
        return this._iCloudRequireEncryptedBackup;
    };
    /**
     * Sets the iCloudRequireEncryptedBackup property value. Indicates whether or not to require backups to iCloud be encrypted.
     * @param value Value to set for the iCloudRequireEncryptedBackup property.
     */
    public set iCloudRequireEncryptedBackup(value: boolean | undefined) {
        this._iCloudRequireEncryptedBackup = value;
    };
    /**
     * Gets the iTunesBlockExplicitContent property value. Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get iTunesBlockExplicitContent() {
        return this._iTunesBlockExplicitContent;
    };
    /**
     * Sets the iTunesBlockExplicitContent property value. Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the iTunesBlockExplicitContent property.
     */
    public set iTunesBlockExplicitContent(value: boolean | undefined) {
        this._iTunesBlockExplicitContent = value;
    };
    /**
     * Gets the iTunesBlockMusicService property value. Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised mode (iOS 9.3 and later and macOS 10.12 and later).
     * @returns a boolean
     */
    public get iTunesBlockMusicService() {
        return this._iTunesBlockMusicService;
    };
    /**
     * Sets the iTunesBlockMusicService property value. Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised mode (iOS 9.3 and later and macOS 10.12 and later).
     * @param value Value to set for the iTunesBlockMusicService property.
     */
    public set iTunesBlockMusicService(value: boolean | undefined) {
        this._iTunesBlockMusicService = value;
    };
    /**
     * Gets the iTunesBlockRadio property value. Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and later).
     * @returns a boolean
     */
    public get iTunesBlockRadio() {
        return this._iTunesBlockRadio;
    };
    /**
     * Sets the iTunesBlockRadio property value. Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and later).
     * @param value Value to set for the iTunesBlockRadio property.
     */
    public set iTunesBlockRadio(value: boolean | undefined) {
        this._iTunesBlockRadio = value;
    };
    /**
     * Gets the keyboardBlockAutoCorrect property value. Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later).
     * @returns a boolean
     */
    public get keyboardBlockAutoCorrect() {
        return this._keyboardBlockAutoCorrect;
    };
    /**
     * Sets the keyboardBlockAutoCorrect property value. Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later).
     * @param value Value to set for the keyboardBlockAutoCorrect property.
     */
    public set keyboardBlockAutoCorrect(value: boolean | undefined) {
        this._keyboardBlockAutoCorrect = value;
    };
    /**
     * Gets the keyboardBlockDictation property value. Indicates whether or not to block the user from using dictation input when the device is in supervised mode.
     * @returns a boolean
     */
    public get keyboardBlockDictation() {
        return this._keyboardBlockDictation;
    };
    /**
     * Sets the keyboardBlockDictation property value. Indicates whether or not to block the user from using dictation input when the device is in supervised mode.
     * @param value Value to set for the keyboardBlockDictation property.
     */
    public set keyboardBlockDictation(value: boolean | undefined) {
        this._keyboardBlockDictation = value;
    };
    /**
     * Gets the keyboardBlockPredictive property value. Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later).
     * @returns a boolean
     */
    public get keyboardBlockPredictive() {
        return this._keyboardBlockPredictive;
    };
    /**
     * Sets the keyboardBlockPredictive property value. Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later).
     * @param value Value to set for the keyboardBlockPredictive property.
     */
    public set keyboardBlockPredictive(value: boolean | undefined) {
        this._keyboardBlockPredictive = value;
    };
    /**
     * Gets the keyboardBlockShortcuts property value. Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later).
     * @returns a boolean
     */
    public get keyboardBlockShortcuts() {
        return this._keyboardBlockShortcuts;
    };
    /**
     * Sets the keyboardBlockShortcuts property value. Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later).
     * @param value Value to set for the keyboardBlockShortcuts property.
     */
    public set keyboardBlockShortcuts(value: boolean | undefined) {
        this._keyboardBlockShortcuts = value;
    };
    /**
     * Gets the keyboardBlockSpellCheck property value. Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later).
     * @returns a boolean
     */
    public get keyboardBlockSpellCheck() {
        return this._keyboardBlockSpellCheck;
    };
    /**
     * Sets the keyboardBlockSpellCheck property value. Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later).
     * @param value Value to set for the keyboardBlockSpellCheck property.
     */
    public set keyboardBlockSpellCheck(value: boolean | undefined) {
        this._keyboardBlockSpellCheck = value;
    };
    /**
     * Gets the kioskModeAllowAssistiveSpeak property value. Indicates whether or not to allow assistive speak while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeAllowAssistiveSpeak() {
        return this._kioskModeAllowAssistiveSpeak;
    };
    /**
     * Sets the kioskModeAllowAssistiveSpeak property value. Indicates whether or not to allow assistive speak while in kiosk mode.
     * @param value Value to set for the kioskModeAllowAssistiveSpeak property.
     */
    public set kioskModeAllowAssistiveSpeak(value: boolean | undefined) {
        this._kioskModeAllowAssistiveSpeak = value;
    };
    /**
     * Gets the kioskModeAllowAssistiveTouchSettings property value. Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeAllowAssistiveTouchSettings() {
        return this._kioskModeAllowAssistiveTouchSettings;
    };
    /**
     * Sets the kioskModeAllowAssistiveTouchSettings property value. Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode.
     * @param value Value to set for the kioskModeAllowAssistiveTouchSettings property.
     */
    public set kioskModeAllowAssistiveTouchSettings(value: boolean | undefined) {
        this._kioskModeAllowAssistiveTouchSettings = value;
    };
    /**
     * Gets the kioskModeAllowAutoLock property value. Indicates whether or not to allow device auto lock while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockAutoLock instead.
     * @returns a boolean
     */
    public get kioskModeAllowAutoLock() {
        return this._kioskModeAllowAutoLock;
    };
    /**
     * Sets the kioskModeAllowAutoLock property value. Indicates whether or not to allow device auto lock while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockAutoLock instead.
     * @param value Value to set for the kioskModeAllowAutoLock property.
     */
    public set kioskModeAllowAutoLock(value: boolean | undefined) {
        this._kioskModeAllowAutoLock = value;
    };
    /**
     * Gets the kioskModeAllowColorInversionSettings property value. Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeAllowColorInversionSettings() {
        return this._kioskModeAllowColorInversionSettings;
    };
    /**
     * Sets the kioskModeAllowColorInversionSettings property value. Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode.
     * @param value Value to set for the kioskModeAllowColorInversionSettings property.
     */
    public set kioskModeAllowColorInversionSettings(value: boolean | undefined) {
        this._kioskModeAllowColorInversionSettings = value;
    };
    /**
     * Gets the kioskModeAllowRingerSwitch property value. Indicates whether or not to allow use of the ringer switch while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockRingerSwitch instead.
     * @returns a boolean
     */
    public get kioskModeAllowRingerSwitch() {
        return this._kioskModeAllowRingerSwitch;
    };
    /**
     * Sets the kioskModeAllowRingerSwitch property value. Indicates whether or not to allow use of the ringer switch while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockRingerSwitch instead.
     * @param value Value to set for the kioskModeAllowRingerSwitch property.
     */
    public set kioskModeAllowRingerSwitch(value: boolean | undefined) {
        this._kioskModeAllowRingerSwitch = value;
    };
    /**
     * Gets the kioskModeAllowScreenRotation property value. Indicates whether or not to allow screen rotation while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockScreenRotation instead.
     * @returns a boolean
     */
    public get kioskModeAllowScreenRotation() {
        return this._kioskModeAllowScreenRotation;
    };
    /**
     * Sets the kioskModeAllowScreenRotation property value. Indicates whether or not to allow screen rotation while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockScreenRotation instead.
     * @param value Value to set for the kioskModeAllowScreenRotation property.
     */
    public set kioskModeAllowScreenRotation(value: boolean | undefined) {
        this._kioskModeAllowScreenRotation = value;
    };
    /**
     * Gets the kioskModeAllowSleepButton property value. Indicates whether or not to allow use of the sleep button while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockSleepButton instead.
     * @returns a boolean
     */
    public get kioskModeAllowSleepButton() {
        return this._kioskModeAllowSleepButton;
    };
    /**
     * Sets the kioskModeAllowSleepButton property value. Indicates whether or not to allow use of the sleep button while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockSleepButton instead.
     * @param value Value to set for the kioskModeAllowSleepButton property.
     */
    public set kioskModeAllowSleepButton(value: boolean | undefined) {
        this._kioskModeAllowSleepButton = value;
    };
    /**
     * Gets the kioskModeAllowTouchscreen property value. Indicates whether or not to allow use of the touchscreen while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockTouchscreen instead.
     * @returns a boolean
     */
    public get kioskModeAllowTouchscreen() {
        return this._kioskModeAllowTouchscreen;
    };
    /**
     * Sets the kioskModeAllowTouchscreen property value. Indicates whether or not to allow use of the touchscreen while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockTouchscreen instead.
     * @param value Value to set for the kioskModeAllowTouchscreen property.
     */
    public set kioskModeAllowTouchscreen(value: boolean | undefined) {
        this._kioskModeAllowTouchscreen = value;
    };
    /**
     * Gets the kioskModeAllowVoiceOverSettings property value. Indicates whether or not to allow access to the voice over settings while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeAllowVoiceOverSettings() {
        return this._kioskModeAllowVoiceOverSettings;
    };
    /**
     * Sets the kioskModeAllowVoiceOverSettings property value. Indicates whether or not to allow access to the voice over settings while in kiosk mode.
     * @param value Value to set for the kioskModeAllowVoiceOverSettings property.
     */
    public set kioskModeAllowVoiceOverSettings(value: boolean | undefined) {
        this._kioskModeAllowVoiceOverSettings = value;
    };
    /**
     * Gets the kioskModeAllowVolumeButtons property value. Indicates whether or not to allow use of the volume buttons while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockVolumeButtons instead.
     * @returns a boolean
     */
    public get kioskModeAllowVolumeButtons() {
        return this._kioskModeAllowVolumeButtons;
    };
    /**
     * Sets the kioskModeAllowVolumeButtons property value. Indicates whether or not to allow use of the volume buttons while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockVolumeButtons instead.
     * @param value Value to set for the kioskModeAllowVolumeButtons property.
     */
    public set kioskModeAllowVolumeButtons(value: boolean | undefined) {
        this._kioskModeAllowVolumeButtons = value;
    };
    /**
     * Gets the kioskModeAllowZoomSettings property value. Indicates whether or not to allow access to the zoom settings while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeAllowZoomSettings() {
        return this._kioskModeAllowZoomSettings;
    };
    /**
     * Sets the kioskModeAllowZoomSettings property value. Indicates whether or not to allow access to the zoom settings while in kiosk mode.
     * @param value Value to set for the kioskModeAllowZoomSettings property.
     */
    public set kioskModeAllowZoomSettings(value: boolean | undefined) {
        this._kioskModeAllowZoomSettings = value;
    };
    /**
     * Gets the kioskModeAppStoreUrl property value. URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known.
     * @returns a string
     */
    public get kioskModeAppStoreUrl() {
        return this._kioskModeAppStoreUrl;
    };
    /**
     * Sets the kioskModeAppStoreUrl property value. URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known.
     * @param value Value to set for the kioskModeAppStoreUrl property.
     */
    public set kioskModeAppStoreUrl(value: string | undefined) {
        this._kioskModeAppStoreUrl = value;
    };
    /**
     * Gets the kioskModeBuiltInAppId property value. ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set.
     * @returns a string
     */
    public get kioskModeBuiltInAppId() {
        return this._kioskModeBuiltInAppId;
    };
    /**
     * Sets the kioskModeBuiltInAppId property value. ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set.
     * @param value Value to set for the kioskModeBuiltInAppId property.
     */
    public set kioskModeBuiltInAppId(value: string | undefined) {
        this._kioskModeBuiltInAppId = value;
    };
    /**
     * Gets the kioskModeManagedAppId property value. Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will be ignored.
     * @returns a string
     */
    public get kioskModeManagedAppId() {
        return this._kioskModeManagedAppId;
    };
    /**
     * Sets the kioskModeManagedAppId property value. Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will be ignored.
     * @param value Value to set for the kioskModeManagedAppId property.
     */
    public set kioskModeManagedAppId(value: string | undefined) {
        this._kioskModeManagedAppId = value;
    };
    /**
     * Gets the kioskModeRequireAssistiveTouch property value. Indicates whether or not to require assistive touch while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeRequireAssistiveTouch() {
        return this._kioskModeRequireAssistiveTouch;
    };
    /**
     * Sets the kioskModeRequireAssistiveTouch property value. Indicates whether or not to require assistive touch while in kiosk mode.
     * @param value Value to set for the kioskModeRequireAssistiveTouch property.
     */
    public set kioskModeRequireAssistiveTouch(value: boolean | undefined) {
        this._kioskModeRequireAssistiveTouch = value;
    };
    /**
     * Gets the kioskModeRequireColorInversion property value. Indicates whether or not to require color inversion while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeRequireColorInversion() {
        return this._kioskModeRequireColorInversion;
    };
    /**
     * Sets the kioskModeRequireColorInversion property value. Indicates whether or not to require color inversion while in kiosk mode.
     * @param value Value to set for the kioskModeRequireColorInversion property.
     */
    public set kioskModeRequireColorInversion(value: boolean | undefined) {
        this._kioskModeRequireColorInversion = value;
    };
    /**
     * Gets the kioskModeRequireMonoAudio property value. Indicates whether or not to require mono audio while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeRequireMonoAudio() {
        return this._kioskModeRequireMonoAudio;
    };
    /**
     * Sets the kioskModeRequireMonoAudio property value. Indicates whether or not to require mono audio while in kiosk mode.
     * @param value Value to set for the kioskModeRequireMonoAudio property.
     */
    public set kioskModeRequireMonoAudio(value: boolean | undefined) {
        this._kioskModeRequireMonoAudio = value;
    };
    /**
     * Gets the kioskModeRequireVoiceOver property value. Indicates whether or not to require voice over while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeRequireVoiceOver() {
        return this._kioskModeRequireVoiceOver;
    };
    /**
     * Sets the kioskModeRequireVoiceOver property value. Indicates whether or not to require voice over while in kiosk mode.
     * @param value Value to set for the kioskModeRequireVoiceOver property.
     */
    public set kioskModeRequireVoiceOver(value: boolean | undefined) {
        this._kioskModeRequireVoiceOver = value;
    };
    /**
     * Gets the kioskModeRequireZoom property value. Indicates whether or not to require zoom while in kiosk mode.
     * @returns a boolean
     */
    public get kioskModeRequireZoom() {
        return this._kioskModeRequireZoom;
    };
    /**
     * Sets the kioskModeRequireZoom property value. Indicates whether or not to require zoom while in kiosk mode.
     * @param value Value to set for the kioskModeRequireZoom property.
     */
    public set kioskModeRequireZoom(value: boolean | undefined) {
        this._kioskModeRequireZoom = value;
    };
    /**
     * Gets the lockScreenBlockControlCenter property value. Indicates whether or not to block the user from using control center on the lock screen.
     * @returns a boolean
     */
    public get lockScreenBlockControlCenter() {
        return this._lockScreenBlockControlCenter;
    };
    /**
     * Sets the lockScreenBlockControlCenter property value. Indicates whether or not to block the user from using control center on the lock screen.
     * @param value Value to set for the lockScreenBlockControlCenter property.
     */
    public set lockScreenBlockControlCenter(value: boolean | undefined) {
        this._lockScreenBlockControlCenter = value;
    };
    /**
     * Gets the lockScreenBlockNotificationView property value. Indicates whether or not to block the user from using the notification view on the lock screen.
     * @returns a boolean
     */
    public get lockScreenBlockNotificationView() {
        return this._lockScreenBlockNotificationView;
    };
    /**
     * Sets the lockScreenBlockNotificationView property value. Indicates whether or not to block the user from using the notification view on the lock screen.
     * @param value Value to set for the lockScreenBlockNotificationView property.
     */
    public set lockScreenBlockNotificationView(value: boolean | undefined) {
        this._lockScreenBlockNotificationView = value;
    };
    /**
     * Gets the lockScreenBlockPassbook property value. Indicates whether or not to block the user from using passbook when the device is locked.
     * @returns a boolean
     */
    public get lockScreenBlockPassbook() {
        return this._lockScreenBlockPassbook;
    };
    /**
     * Sets the lockScreenBlockPassbook property value. Indicates whether or not to block the user from using passbook when the device is locked.
     * @param value Value to set for the lockScreenBlockPassbook property.
     */
    public set lockScreenBlockPassbook(value: boolean | undefined) {
        this._lockScreenBlockPassbook = value;
    };
    /**
     * Gets the lockScreenBlockTodayView property value. Indicates whether or not to block the user from using the Today View on the lock screen.
     * @returns a boolean
     */
    public get lockScreenBlockTodayView() {
        return this._lockScreenBlockTodayView;
    };
    /**
     * Sets the lockScreenBlockTodayView property value. Indicates whether or not to block the user from using the Today View on the lock screen.
     * @param value Value to set for the lockScreenBlockTodayView property.
     */
    public set lockScreenBlockTodayView(value: boolean | undefined) {
        this._lockScreenBlockTodayView = value;
    };
    /**
     * Gets the mediaContentRatingApps property value. Apps rating as in media content
     * @returns a ratingAppsType
     */
    public get mediaContentRatingApps() {
        return this._mediaContentRatingApps;
    };
    /**
     * Sets the mediaContentRatingApps property value. Apps rating as in media content
     * @param value Value to set for the mediaContentRatingApps property.
     */
    public set mediaContentRatingApps(value: RatingAppsType | undefined) {
        this._mediaContentRatingApps = value;
    };
    /**
     * Gets the mediaContentRatingAustralia property value. Media content rating settings for Australia
     * @returns a mediaContentRatingAustralia
     */
    public get mediaContentRatingAustralia() {
        return this._mediaContentRatingAustralia;
    };
    /**
     * Sets the mediaContentRatingAustralia property value. Media content rating settings for Australia
     * @param value Value to set for the mediaContentRatingAustralia property.
     */
    public set mediaContentRatingAustralia(value: MediaContentRatingAustralia | undefined) {
        this._mediaContentRatingAustralia = value;
    };
    /**
     * Gets the mediaContentRatingCanada property value. Media content rating settings for Canada
     * @returns a mediaContentRatingCanada
     */
    public get mediaContentRatingCanada() {
        return this._mediaContentRatingCanada;
    };
    /**
     * Sets the mediaContentRatingCanada property value. Media content rating settings for Canada
     * @param value Value to set for the mediaContentRatingCanada property.
     */
    public set mediaContentRatingCanada(value: MediaContentRatingCanada | undefined) {
        this._mediaContentRatingCanada = value;
    };
    /**
     * Gets the mediaContentRatingFrance property value. Media content rating settings for France
     * @returns a mediaContentRatingFrance
     */
    public get mediaContentRatingFrance() {
        return this._mediaContentRatingFrance;
    };
    /**
     * Sets the mediaContentRatingFrance property value. Media content rating settings for France
     * @param value Value to set for the mediaContentRatingFrance property.
     */
    public set mediaContentRatingFrance(value: MediaContentRatingFrance | undefined) {
        this._mediaContentRatingFrance = value;
    };
    /**
     * Gets the mediaContentRatingGermany property value. Media content rating settings for Germany
     * @returns a mediaContentRatingGermany
     */
    public get mediaContentRatingGermany() {
        return this._mediaContentRatingGermany;
    };
    /**
     * Sets the mediaContentRatingGermany property value. Media content rating settings for Germany
     * @param value Value to set for the mediaContentRatingGermany property.
     */
    public set mediaContentRatingGermany(value: MediaContentRatingGermany | undefined) {
        this._mediaContentRatingGermany = value;
    };
    /**
     * Gets the mediaContentRatingIreland property value. Media content rating settings for Ireland
     * @returns a mediaContentRatingIreland
     */
    public get mediaContentRatingIreland() {
        return this._mediaContentRatingIreland;
    };
    /**
     * Sets the mediaContentRatingIreland property value. Media content rating settings for Ireland
     * @param value Value to set for the mediaContentRatingIreland property.
     */
    public set mediaContentRatingIreland(value: MediaContentRatingIreland | undefined) {
        this._mediaContentRatingIreland = value;
    };
    /**
     * Gets the mediaContentRatingJapan property value. Media content rating settings for Japan
     * @returns a mediaContentRatingJapan
     */
    public get mediaContentRatingJapan() {
        return this._mediaContentRatingJapan;
    };
    /**
     * Sets the mediaContentRatingJapan property value. Media content rating settings for Japan
     * @param value Value to set for the mediaContentRatingJapan property.
     */
    public set mediaContentRatingJapan(value: MediaContentRatingJapan | undefined) {
        this._mediaContentRatingJapan = value;
    };
    /**
     * Gets the mediaContentRatingNewZealand property value. Media content rating settings for New Zealand
     * @returns a mediaContentRatingNewZealand
     */
    public get mediaContentRatingNewZealand() {
        return this._mediaContentRatingNewZealand;
    };
    /**
     * Sets the mediaContentRatingNewZealand property value. Media content rating settings for New Zealand
     * @param value Value to set for the mediaContentRatingNewZealand property.
     */
    public set mediaContentRatingNewZealand(value: MediaContentRatingNewZealand | undefined) {
        this._mediaContentRatingNewZealand = value;
    };
    /**
     * Gets the mediaContentRatingUnitedKingdom property value. Media content rating settings for United Kingdom
     * @returns a mediaContentRatingUnitedKingdom
     */
    public get mediaContentRatingUnitedKingdom() {
        return this._mediaContentRatingUnitedKingdom;
    };
    /**
     * Sets the mediaContentRatingUnitedKingdom property value. Media content rating settings for United Kingdom
     * @param value Value to set for the mediaContentRatingUnitedKingdom property.
     */
    public set mediaContentRatingUnitedKingdom(value: MediaContentRatingUnitedKingdom | undefined) {
        this._mediaContentRatingUnitedKingdom = value;
    };
    /**
     * Gets the mediaContentRatingUnitedStates property value. Media content rating settings for United States
     * @returns a mediaContentRatingUnitedStates
     */
    public get mediaContentRatingUnitedStates() {
        return this._mediaContentRatingUnitedStates;
    };
    /**
     * Sets the mediaContentRatingUnitedStates property value. Media content rating settings for United States
     * @param value Value to set for the mediaContentRatingUnitedStates property.
     */
    public set mediaContentRatingUnitedStates(value: MediaContentRatingUnitedStates | undefined) {
        this._mediaContentRatingUnitedStates = value;
    };
    /**
     * Gets the messagesBlocked property value. Indicates whether or not to block the user from using the Messages app on the supervised device.
     * @returns a boolean
     */
    public get messagesBlocked() {
        return this._messagesBlocked;
    };
    /**
     * Sets the messagesBlocked property value. Indicates whether or not to block the user from using the Messages app on the supervised device.
     * @param value Value to set for the messagesBlocked property.
     */
    public set messagesBlocked(value: boolean | undefined) {
        this._messagesBlocked = value;
    };
    /**
     * Gets the networkUsageRules property value. List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000 elements.
     * @returns a iosNetworkUsageRule
     */
    public get networkUsageRules() {
        return this._networkUsageRules;
    };
    /**
     * Sets the networkUsageRules property value. List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000 elements.
     * @param value Value to set for the networkUsageRules property.
     */
    public set networkUsageRules(value: IosNetworkUsageRule[] | undefined) {
        this._networkUsageRules = value;
    };
    /**
     * Gets the notificationsBlockSettingsModification property value. Indicates whether or not to allow notifications settings modification (iOS 9.3 and later).
     * @returns a boolean
     */
    public get notificationsBlockSettingsModification() {
        return this._notificationsBlockSettingsModification;
    };
    /**
     * Sets the notificationsBlockSettingsModification property value. Indicates whether or not to allow notifications settings modification (iOS 9.3 and later).
     * @param value Value to set for the notificationsBlockSettingsModification property.
     */
    public set notificationsBlockSettingsModification(value: boolean | undefined) {
        this._notificationsBlockSettingsModification = value;
    };
    /**
     * Gets the passcodeBlockFingerprintModification property value. Block modification of registered Touch ID fingerprints when in supervised mode.
     * @returns a boolean
     */
    public get passcodeBlockFingerprintModification() {
        return this._passcodeBlockFingerprintModification;
    };
    /**
     * Sets the passcodeBlockFingerprintModification property value. Block modification of registered Touch ID fingerprints when in supervised mode.
     * @param value Value to set for the passcodeBlockFingerprintModification property.
     */
    public set passcodeBlockFingerprintModification(value: boolean | undefined) {
        this._passcodeBlockFingerprintModification = value;
    };
    /**
     * Gets the passcodeBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock.
     * @returns a boolean
     */
    public get passcodeBlockFingerprintUnlock() {
        return this._passcodeBlockFingerprintUnlock;
    };
    /**
     * Sets the passcodeBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock.
     * @param value Value to set for the passcodeBlockFingerprintUnlock property.
     */
    public set passcodeBlockFingerprintUnlock(value: boolean | undefined) {
        this._passcodeBlockFingerprintUnlock = value;
    };
    /**
     * Gets the passcodeBlockModification property value. Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later).
     * @returns a boolean
     */
    public get passcodeBlockModification() {
        return this._passcodeBlockModification;
    };
    /**
     * Sets the passcodeBlockModification property value. Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later).
     * @param value Value to set for the passcodeBlockModification property.
     */
    public set passcodeBlockModification(value: boolean | undefined) {
        this._passcodeBlockModification = value;
    };
    /**
     * Gets the passcodeBlockSimple property value. Indicates whether or not to block simple passcodes.
     * @returns a boolean
     */
    public get passcodeBlockSimple() {
        return this._passcodeBlockSimple;
    };
    /**
     * Sets the passcodeBlockSimple property value. Indicates whether or not to block simple passcodes.
     * @param value Value to set for the passcodeBlockSimple property.
     */
    public set passcodeBlockSimple(value: boolean | undefined) {
        this._passcodeBlockSimple = value;
    };
    /**
     * Gets the passcodeExpirationDays property value. Number of days before the passcode expires. Valid values 1 to 65535
     * @returns a integer
     */
    public get passcodeExpirationDays() {
        return this._passcodeExpirationDays;
    };
    /**
     * Sets the passcodeExpirationDays property value. Number of days before the passcode expires. Valid values 1 to 65535
     * @param value Value to set for the passcodeExpirationDays property.
     */
    public set passcodeExpirationDays(value: number | undefined) {
        this._passcodeExpirationDays = value;
    };
    /**
     * Gets the passcodeMinimumCharacterSetCount property value. Number of character sets a passcode must contain. Valid values 0 to 4
     * @returns a integer
     */
    public get passcodeMinimumCharacterSetCount() {
        return this._passcodeMinimumCharacterSetCount;
    };
    /**
     * Sets the passcodeMinimumCharacterSetCount property value. Number of character sets a passcode must contain. Valid values 0 to 4
     * @param value Value to set for the passcodeMinimumCharacterSetCount property.
     */
    public set passcodeMinimumCharacterSetCount(value: number | undefined) {
        this._passcodeMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passcodeMinimumLength property value. Minimum length of passcode. Valid values 4 to 14
     * @returns a integer
     */
    public get passcodeMinimumLength() {
        return this._passcodeMinimumLength;
    };
    /**
     * Sets the passcodeMinimumLength property value. Minimum length of passcode. Valid values 4 to 14
     * @param value Value to set for the passcodeMinimumLength property.
     */
    public set passcodeMinimumLength(value: number | undefined) {
        this._passcodeMinimumLength = value;
    };
    /**
     * Gets the passcodeMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a passcode is required.
     * @returns a integer
     */
    public get passcodeMinutesOfInactivityBeforeLock() {
        return this._passcodeMinutesOfInactivityBeforeLock;
    };
    /**
     * Sets the passcodeMinutesOfInactivityBeforeLock property value. Minutes of inactivity before a passcode is required.
     * @param value Value to set for the passcodeMinutesOfInactivityBeforeLock property.
     */
    public set passcodeMinutesOfInactivityBeforeLock(value: number | undefined) {
        this._passcodeMinutesOfInactivityBeforeLock = value;
    };
    /**
     * Gets the passcodeMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @returns a integer
     */
    public get passcodeMinutesOfInactivityBeforeScreenTimeout() {
        return this._passcodeMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passcodeMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @param value Value to set for the passcodeMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set passcodeMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        this._passcodeMinutesOfInactivityBeforeScreenTimeout = value;
    };
    /**
     * Gets the passcodePreviousPasscodeBlockCount property value. Number of previous passcodes to block. Valid values 1 to 24
     * @returns a integer
     */
    public get passcodePreviousPasscodeBlockCount() {
        return this._passcodePreviousPasscodeBlockCount;
    };
    /**
     * Sets the passcodePreviousPasscodeBlockCount property value. Number of previous passcodes to block. Valid values 1 to 24
     * @param value Value to set for the passcodePreviousPasscodeBlockCount property.
     */
    public set passcodePreviousPasscodeBlockCount(value: number | undefined) {
        this._passcodePreviousPasscodeBlockCount = value;
    };
    /**
     * Gets the passcodeRequired property value. Indicates whether or not to require a passcode.
     * @returns a boolean
     */
    public get passcodeRequired() {
        return this._passcodeRequired;
    };
    /**
     * Sets the passcodeRequired property value. Indicates whether or not to require a passcode.
     * @param value Value to set for the passcodeRequired property.
     */
    public set passcodeRequired(value: boolean | undefined) {
        this._passcodeRequired = value;
    };
    /**
     * Gets the passcodeRequiredType property value. Possible values of required passwords.
     * @returns a requiredPasswordType
     */
    public get passcodeRequiredType() {
        return this._passcodeRequiredType;
    };
    /**
     * Sets the passcodeRequiredType property value. Possible values of required passwords.
     * @param value Value to set for the passcodeRequiredType property.
     */
    public set passcodeRequiredType(value: RequiredPasswordType | undefined) {
        this._passcodeRequiredType = value;
    };
    /**
     * Gets the passcodeSignInFailureCountBeforeWipe property value. Number of sign in failures allowed before wiping the device. Valid values 2 to 11
     * @returns a integer
     */
    public get passcodeSignInFailureCountBeforeWipe() {
        return this._passcodeSignInFailureCountBeforeWipe;
    };
    /**
     * Sets the passcodeSignInFailureCountBeforeWipe property value. Number of sign in failures allowed before wiping the device. Valid values 2 to 11
     * @param value Value to set for the passcodeSignInFailureCountBeforeWipe property.
     */
    public set passcodeSignInFailureCountBeforeWipe(value: number | undefined) {
        this._passcodeSignInFailureCountBeforeWipe = value;
    };
    /**
     * Gets the podcastsBlocked property value. Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later).
     * @returns a boolean
     */
    public get podcastsBlocked() {
        return this._podcastsBlocked;
    };
    /**
     * Sets the podcastsBlocked property value. Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later).
     * @param value Value to set for the podcastsBlocked property.
     */
    public set podcastsBlocked(value: boolean | undefined) {
        this._podcastsBlocked = value;
    };
    /**
     * Gets the safariBlockAutofill property value. Indicates whether or not to block the user from using Auto fill in Safari. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get safariBlockAutofill() {
        return this._safariBlockAutofill;
    };
    /**
     * Sets the safariBlockAutofill property value. Indicates whether or not to block the user from using Auto fill in Safari. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the safariBlockAutofill property.
     */
    public set safariBlockAutofill(value: boolean | undefined) {
        this._safariBlockAutofill = value;
    };
    /**
     * Gets the safariBlocked property value. Indicates whether or not to block the user from using Safari. Requires a supervised device for iOS 13 and later.
     * @returns a boolean
     */
    public get safariBlocked() {
        return this._safariBlocked;
    };
    /**
     * Sets the safariBlocked property value. Indicates whether or not to block the user from using Safari. Requires a supervised device for iOS 13 and later.
     * @param value Value to set for the safariBlocked property.
     */
    public set safariBlocked(value: boolean | undefined) {
        this._safariBlocked = value;
    };
    /**
     * Gets the safariBlockJavaScript property value. Indicates whether or not to block JavaScript in Safari.
     * @returns a boolean
     */
    public get safariBlockJavaScript() {
        return this._safariBlockJavaScript;
    };
    /**
     * Sets the safariBlockJavaScript property value. Indicates whether or not to block JavaScript in Safari.
     * @param value Value to set for the safariBlockJavaScript property.
     */
    public set safariBlockJavaScript(value: boolean | undefined) {
        this._safariBlockJavaScript = value;
    };
    /**
     * Gets the safariBlockPopups property value. Indicates whether or not to block popups in Safari.
     * @returns a boolean
     */
    public get safariBlockPopups() {
        return this._safariBlockPopups;
    };
    /**
     * Sets the safariBlockPopups property value. Indicates whether or not to block popups in Safari.
     * @param value Value to set for the safariBlockPopups property.
     */
    public set safariBlockPopups(value: boolean | undefined) {
        this._safariBlockPopups = value;
    };
    /**
     * Gets the safariCookieSettings property value. Web Browser Cookie Settings.
     * @returns a webBrowserCookieSettings
     */
    public get safariCookieSettings() {
        return this._safariCookieSettings;
    };
    /**
     * Sets the safariCookieSettings property value. Web Browser Cookie Settings.
     * @param value Value to set for the safariCookieSettings property.
     */
    public set safariCookieSettings(value: WebBrowserCookieSettings | undefined) {
        this._safariCookieSettings = value;
    };
    /**
     * Gets the safariManagedDomains property value. URLs matching the patterns listed here will be considered managed.
     * @returns a string
     */
    public get safariManagedDomains() {
        return this._safariManagedDomains;
    };
    /**
     * Sets the safariManagedDomains property value. URLs matching the patterns listed here will be considered managed.
     * @param value Value to set for the safariManagedDomains property.
     */
    public set safariManagedDomains(value: string[] | undefined) {
        this._safariManagedDomains = value;
    };
    /**
     * Gets the safariPasswordAutoFillDomains property value. Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised mode (iOS 9.3 and later).
     * @returns a string
     */
    public get safariPasswordAutoFillDomains() {
        return this._safariPasswordAutoFillDomains;
    };
    /**
     * Sets the safariPasswordAutoFillDomains property value. Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised mode (iOS 9.3 and later).
     * @param value Value to set for the safariPasswordAutoFillDomains property.
     */
    public set safariPasswordAutoFillDomains(value: string[] | undefined) {
        this._safariPasswordAutoFillDomains = value;
    };
    /**
     * Gets the safariRequireFraudWarning property value. Indicates whether or not to require fraud warning in Safari.
     * @returns a boolean
     */
    public get safariRequireFraudWarning() {
        return this._safariRequireFraudWarning;
    };
    /**
     * Sets the safariRequireFraudWarning property value. Indicates whether or not to require fraud warning in Safari.
     * @param value Value to set for the safariRequireFraudWarning property.
     */
    public set safariRequireFraudWarning(value: boolean | undefined) {
        this._safariRequireFraudWarning = value;
    };
    /**
     * Gets the screenCaptureBlocked property value. Indicates whether or not to block the user from taking Screenshots.
     * @returns a boolean
     */
    public get screenCaptureBlocked() {
        return this._screenCaptureBlocked;
    };
    /**
     * Sets the screenCaptureBlocked property value. Indicates whether or not to block the user from taking Screenshots.
     * @param value Value to set for the screenCaptureBlocked property.
     */
    public set screenCaptureBlocked(value: boolean | undefined) {
        this._screenCaptureBlocked = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("accountBlockModification", this.accountBlockModification);
        writer.writeBooleanValue("activationLockAllowWhenSupervised", this.activationLockAllowWhenSupervised);
        writer.writeBooleanValue("airDropBlocked", this.airDropBlocked);
        writer.writeBooleanValue("airDropForceUnmanagedDropTarget", this.airDropForceUnmanagedDropTarget);
        writer.writeBooleanValue("airPlayForcePairingPasswordForOutgoingRequests", this.airPlayForcePairingPasswordForOutgoingRequests);
        writer.writeBooleanValue("appleNewsBlocked", this.appleNewsBlocked);
        writer.writeBooleanValue("appleWatchBlockPairing", this.appleWatchBlockPairing);
        writer.writeBooleanValue("appleWatchForceWristDetection", this.appleWatchForceWristDetection);
        writer.writeCollectionOfObjectValues<AppListItem>("appsSingleAppModeList", this.appsSingleAppModeList);
        writer.writeBooleanValue("appStoreBlockAutomaticDownloads", this.appStoreBlockAutomaticDownloads);
        writer.writeBooleanValue("appStoreBlocked", this.appStoreBlocked);
        writer.writeBooleanValue("appStoreBlockInAppPurchases", this.appStoreBlockInAppPurchases);
        writer.writeBooleanValue("appStoreBlockUIAppInstallation", this.appStoreBlockUIAppInstallation);
        writer.writeBooleanValue("appStoreRequirePassword", this.appStoreRequirePassword);
        writer.writeCollectionOfObjectValues<AppListItem>("appsVisibilityList", this.appsVisibilityList);
        writer.writeEnumValue<AppListType>("appsVisibilityListType", this.appsVisibilityListType);
        writer.writeBooleanValue("bluetoothBlockModification", this.bluetoothBlockModification);
        writer.writeBooleanValue("cameraBlocked", this.cameraBlocked);
        writer.writeBooleanValue("cellularBlockDataRoaming", this.cellularBlockDataRoaming);
        writer.writeBooleanValue("cellularBlockGlobalBackgroundFetchWhileRoaming", this.cellularBlockGlobalBackgroundFetchWhileRoaming);
        writer.writeBooleanValue("cellularBlockPerAppDataModification", this.cellularBlockPerAppDataModification);
        writer.writeBooleanValue("cellularBlockPersonalHotspot", this.cellularBlockPersonalHotspot);
        writer.writeBooleanValue("cellularBlockVoiceRoaming", this.cellularBlockVoiceRoaming);
        writer.writeBooleanValue("certificatesBlockUntrustedTlsCertificates", this.certificatesBlockUntrustedTlsCertificates);
        writer.writeBooleanValue("classroomAppBlockRemoteScreenObservation", this.classroomAppBlockRemoteScreenObservation);
        writer.writeBooleanValue("classroomAppForceUnpromptedScreenObservation", this.classroomAppForceUnpromptedScreenObservation);
        writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", this.compliantAppsList);
        writer.writeBooleanValue("configurationProfileBlockChanges", this.configurationProfileBlockChanges);
        writer.writeBooleanValue("definitionLookupBlocked", this.definitionLookupBlocked);
        writer.writeBooleanValue("deviceBlockEnableRestrictions", this.deviceBlockEnableRestrictions);
        writer.writeBooleanValue("deviceBlockEraseContentAndSettings", this.deviceBlockEraseContentAndSettings);
        writer.writeBooleanValue("deviceBlockNameModification", this.deviceBlockNameModification);
        writer.writeBooleanValue("diagnosticDataBlockSubmission", this.diagnosticDataBlockSubmission);
        writer.writeBooleanValue("diagnosticDataBlockSubmissionModification", this.diagnosticDataBlockSubmissionModification);
        writer.writeBooleanValue("documentsBlockManagedDocumentsInUnmanagedApps", this.documentsBlockManagedDocumentsInUnmanagedApps);
        writer.writeBooleanValue("documentsBlockUnmanagedDocumentsInManagedApps", this.documentsBlockUnmanagedDocumentsInManagedApps);
        writer.writeCollectionOfPrimitiveValues<string>("emailInDomainSuffixes", this.emailInDomainSuffixes);
        writer.writeBooleanValue("enterpriseAppBlockTrust", this.enterpriseAppBlockTrust);
        writer.writeBooleanValue("enterpriseAppBlockTrustModification", this.enterpriseAppBlockTrustModification);
        writer.writeBooleanValue("faceTimeBlocked", this.faceTimeBlocked);
        writer.writeBooleanValue("findMyFriendsBlocked", this.findMyFriendsBlocked);
        writer.writeBooleanValue("gameCenterBlocked", this.gameCenterBlocked);
        writer.writeBooleanValue("gamingBlockGameCenterFriends", this.gamingBlockGameCenterFriends);
        writer.writeBooleanValue("gamingBlockMultiplayer", this.gamingBlockMultiplayer);
        writer.writeBooleanValue("hostPairingBlocked", this.hostPairingBlocked);
        writer.writeBooleanValue("iBooksStoreBlocked", this.iBooksStoreBlocked);
        writer.writeBooleanValue("iBooksStoreBlockErotica", this.iBooksStoreBlockErotica);
        writer.writeBooleanValue("iCloudBlockActivityContinuation", this.iCloudBlockActivityContinuation);
        writer.writeBooleanValue("iCloudBlockBackup", this.iCloudBlockBackup);
        writer.writeBooleanValue("iCloudBlockDocumentSync", this.iCloudBlockDocumentSync);
        writer.writeBooleanValue("iCloudBlockManagedAppsSync", this.iCloudBlockManagedAppsSync);
        writer.writeBooleanValue("iCloudBlockPhotoLibrary", this.iCloudBlockPhotoLibrary);
        writer.writeBooleanValue("iCloudBlockPhotoStreamSync", this.iCloudBlockPhotoStreamSync);
        writer.writeBooleanValue("iCloudBlockSharedPhotoStream", this.iCloudBlockSharedPhotoStream);
        writer.writeBooleanValue("iCloudRequireEncryptedBackup", this.iCloudRequireEncryptedBackup);
        writer.writeBooleanValue("iTunesBlockExplicitContent", this.iTunesBlockExplicitContent);
        writer.writeBooleanValue("iTunesBlockMusicService", this.iTunesBlockMusicService);
        writer.writeBooleanValue("iTunesBlockRadio", this.iTunesBlockRadio);
        writer.writeBooleanValue("keyboardBlockAutoCorrect", this.keyboardBlockAutoCorrect);
        writer.writeBooleanValue("keyboardBlockDictation", this.keyboardBlockDictation);
        writer.writeBooleanValue("keyboardBlockPredictive", this.keyboardBlockPredictive);
        writer.writeBooleanValue("keyboardBlockShortcuts", this.keyboardBlockShortcuts);
        writer.writeBooleanValue("keyboardBlockSpellCheck", this.keyboardBlockSpellCheck);
        writer.writeBooleanValue("kioskModeAllowAssistiveSpeak", this.kioskModeAllowAssistiveSpeak);
        writer.writeBooleanValue("kioskModeAllowAssistiveTouchSettings", this.kioskModeAllowAssistiveTouchSettings);
        writer.writeBooleanValue("kioskModeAllowAutoLock", this.kioskModeAllowAutoLock);
        writer.writeBooleanValue("kioskModeAllowColorInversionSettings", this.kioskModeAllowColorInversionSettings);
        writer.writeBooleanValue("kioskModeAllowRingerSwitch", this.kioskModeAllowRingerSwitch);
        writer.writeBooleanValue("kioskModeAllowScreenRotation", this.kioskModeAllowScreenRotation);
        writer.writeBooleanValue("kioskModeAllowSleepButton", this.kioskModeAllowSleepButton);
        writer.writeBooleanValue("kioskModeAllowTouchscreen", this.kioskModeAllowTouchscreen);
        writer.writeBooleanValue("kioskModeAllowVoiceOverSettings", this.kioskModeAllowVoiceOverSettings);
        writer.writeBooleanValue("kioskModeAllowVolumeButtons", this.kioskModeAllowVolumeButtons);
        writer.writeBooleanValue("kioskModeAllowZoomSettings", this.kioskModeAllowZoomSettings);
        writer.writeStringValue("kioskModeAppStoreUrl", this.kioskModeAppStoreUrl);
        writer.writeStringValue("kioskModeBuiltInAppId", this.kioskModeBuiltInAppId);
        writer.writeStringValue("kioskModeManagedAppId", this.kioskModeManagedAppId);
        writer.writeBooleanValue("kioskModeRequireAssistiveTouch", this.kioskModeRequireAssistiveTouch);
        writer.writeBooleanValue("kioskModeRequireColorInversion", this.kioskModeRequireColorInversion);
        writer.writeBooleanValue("kioskModeRequireMonoAudio", this.kioskModeRequireMonoAudio);
        writer.writeBooleanValue("kioskModeRequireVoiceOver", this.kioskModeRequireVoiceOver);
        writer.writeBooleanValue("kioskModeRequireZoom", this.kioskModeRequireZoom);
        writer.writeBooleanValue("lockScreenBlockControlCenter", this.lockScreenBlockControlCenter);
        writer.writeBooleanValue("lockScreenBlockNotificationView", this.lockScreenBlockNotificationView);
        writer.writeBooleanValue("lockScreenBlockPassbook", this.lockScreenBlockPassbook);
        writer.writeBooleanValue("lockScreenBlockTodayView", this.lockScreenBlockTodayView);
        writer.writeEnumValue<RatingAppsType>("mediaContentRatingApps", this.mediaContentRatingApps);
        writer.writeObjectValue<MediaContentRatingAustralia>("mediaContentRatingAustralia", this.mediaContentRatingAustralia);
        writer.writeObjectValue<MediaContentRatingCanada>("mediaContentRatingCanada", this.mediaContentRatingCanada);
        writer.writeObjectValue<MediaContentRatingFrance>("mediaContentRatingFrance", this.mediaContentRatingFrance);
        writer.writeObjectValue<MediaContentRatingGermany>("mediaContentRatingGermany", this.mediaContentRatingGermany);
        writer.writeObjectValue<MediaContentRatingIreland>("mediaContentRatingIreland", this.mediaContentRatingIreland);
        writer.writeObjectValue<MediaContentRatingJapan>("mediaContentRatingJapan", this.mediaContentRatingJapan);
        writer.writeObjectValue<MediaContentRatingNewZealand>("mediaContentRatingNewZealand", this.mediaContentRatingNewZealand);
        writer.writeObjectValue<MediaContentRatingUnitedKingdom>("mediaContentRatingUnitedKingdom", this.mediaContentRatingUnitedKingdom);
        writer.writeObjectValue<MediaContentRatingUnitedStates>("mediaContentRatingUnitedStates", this.mediaContentRatingUnitedStates);
        writer.writeBooleanValue("messagesBlocked", this.messagesBlocked);
        writer.writeCollectionOfObjectValues<IosNetworkUsageRule>("networkUsageRules", this.networkUsageRules);
        writer.writeBooleanValue("notificationsBlockSettingsModification", this.notificationsBlockSettingsModification);
        writer.writeBooleanValue("passcodeBlockFingerprintModification", this.passcodeBlockFingerprintModification);
        writer.writeBooleanValue("passcodeBlockFingerprintUnlock", this.passcodeBlockFingerprintUnlock);
        writer.writeBooleanValue("passcodeBlockModification", this.passcodeBlockModification);
        writer.writeBooleanValue("passcodeBlockSimple", this.passcodeBlockSimple);
        writer.writeNumberValue("passcodeExpirationDays", this.passcodeExpirationDays);
        writer.writeNumberValue("passcodeMinimumCharacterSetCount", this.passcodeMinimumCharacterSetCount);
        writer.writeNumberValue("passcodeMinimumLength", this.passcodeMinimumLength);
        writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", this.passcodeMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passcodeMinutesOfInactivityBeforeScreenTimeout", this.passcodeMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passcodePreviousPasscodeBlockCount", this.passcodePreviousPasscodeBlockCount);
        writer.writeBooleanValue("passcodeRequired", this.passcodeRequired);
        writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", this.passcodeRequiredType);
        writer.writeNumberValue("passcodeSignInFailureCountBeforeWipe", this.passcodeSignInFailureCountBeforeWipe);
        writer.writeBooleanValue("podcastsBlocked", this.podcastsBlocked);
        writer.writeBooleanValue("safariBlockAutofill", this.safariBlockAutofill);
        writer.writeBooleanValue("safariBlocked", this.safariBlocked);
        writer.writeBooleanValue("safariBlockJavaScript", this.safariBlockJavaScript);
        writer.writeBooleanValue("safariBlockPopups", this.safariBlockPopups);
        writer.writeEnumValue<WebBrowserCookieSettings>("safariCookieSettings", this.safariCookieSettings);
        writer.writeCollectionOfPrimitiveValues<string>("safariManagedDomains", this.safariManagedDomains);
        writer.writeCollectionOfPrimitiveValues<string>("safariPasswordAutoFillDomains", this.safariPasswordAutoFillDomains);
        writer.writeBooleanValue("safariRequireFraudWarning", this.safariRequireFraudWarning);
        writer.writeBooleanValue("screenCaptureBlocked", this.screenCaptureBlocked);
        writer.writeBooleanValue("siriBlocked", this.siriBlocked);
        writer.writeBooleanValue("siriBlockedWhenLocked", this.siriBlockedWhenLocked);
        writer.writeBooleanValue("siriBlockUserGeneratedContent", this.siriBlockUserGeneratedContent);
        writer.writeBooleanValue("siriRequireProfanityFilter", this.siriRequireProfanityFilter);
        writer.writeBooleanValue("spotlightBlockInternetResults", this.spotlightBlockInternetResults);
        writer.writeBooleanValue("voiceDialingBlocked", this.voiceDialingBlocked);
        writer.writeBooleanValue("wallpaperBlockModification", this.wallpaperBlockModification);
        writer.writeBooleanValue("wiFiConnectOnlyToConfiguredNetworks", this.wiFiConnectOnlyToConfiguredNetworks);
    };
    /**
     * Gets the siriBlocked property value. Indicates whether or not to block the user from using Siri.
     * @returns a boolean
     */
    public get siriBlocked() {
        return this._siriBlocked;
    };
    /**
     * Sets the siriBlocked property value. Indicates whether or not to block the user from using Siri.
     * @param value Value to set for the siriBlocked property.
     */
    public set siriBlocked(value: boolean | undefined) {
        this._siriBlocked = value;
    };
    /**
     * Gets the siriBlockedWhenLocked property value. Indicates whether or not to block the user from using Siri when locked.
     * @returns a boolean
     */
    public get siriBlockedWhenLocked() {
        return this._siriBlockedWhenLocked;
    };
    /**
     * Sets the siriBlockedWhenLocked property value. Indicates whether or not to block the user from using Siri when locked.
     * @param value Value to set for the siriBlockedWhenLocked property.
     */
    public set siriBlockedWhenLocked(value: boolean | undefined) {
        this._siriBlockedWhenLocked = value;
    };
    /**
     * Gets the siriBlockUserGeneratedContent property value. Indicates whether or not to block Siri from querying user-generated content when used on a supervised device.
     * @returns a boolean
     */
    public get siriBlockUserGeneratedContent() {
        return this._siriBlockUserGeneratedContent;
    };
    /**
     * Sets the siriBlockUserGeneratedContent property value. Indicates whether or not to block Siri from querying user-generated content when used on a supervised device.
     * @param value Value to set for the siriBlockUserGeneratedContent property.
     */
    public set siriBlockUserGeneratedContent(value: boolean | undefined) {
        this._siriBlockUserGeneratedContent = value;
    };
    /**
     * Gets the siriRequireProfanityFilter property value. Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device.
     * @returns a boolean
     */
    public get siriRequireProfanityFilter() {
        return this._siriRequireProfanityFilter;
    };
    /**
     * Sets the siriRequireProfanityFilter property value. Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device.
     * @param value Value to set for the siriRequireProfanityFilter property.
     */
    public set siriRequireProfanityFilter(value: boolean | undefined) {
        this._siriRequireProfanityFilter = value;
    };
    /**
     * Gets the spotlightBlockInternetResults property value. Indicates whether or not to block Spotlight search from returning internet results on supervised device.
     * @returns a boolean
     */
    public get spotlightBlockInternetResults() {
        return this._spotlightBlockInternetResults;
    };
    /**
     * Sets the spotlightBlockInternetResults property value. Indicates whether or not to block Spotlight search from returning internet results on supervised device.
     * @param value Value to set for the spotlightBlockInternetResults property.
     */
    public set spotlightBlockInternetResults(value: boolean | undefined) {
        this._spotlightBlockInternetResults = value;
    };
    /**
     * Gets the voiceDialingBlocked property value. Indicates whether or not to block voice dialing.
     * @returns a boolean
     */
    public get voiceDialingBlocked() {
        return this._voiceDialingBlocked;
    };
    /**
     * Sets the voiceDialingBlocked property value. Indicates whether or not to block voice dialing.
     * @param value Value to set for the voiceDialingBlocked property.
     */
    public set voiceDialingBlocked(value: boolean | undefined) {
        this._voiceDialingBlocked = value;
    };
    /**
     * Gets the wallpaperBlockModification property value. Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) .
     * @returns a boolean
     */
    public get wallpaperBlockModification() {
        return this._wallpaperBlockModification;
    };
    /**
     * Sets the wallpaperBlockModification property value. Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) .
     * @param value Value to set for the wallpaperBlockModification property.
     */
    public set wallpaperBlockModification(value: boolean | undefined) {
        this._wallpaperBlockModification = value;
    };
    /**
     * Gets the wiFiConnectOnlyToConfiguredNetworks property value. Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is in supervised mode. Available for devices running iOS and iPadOS versions 14.4 and earlier. Devices running 14.5+ should use the setting, 'WiFiConnectToAllowedNetworksOnlyForced.
     * @returns a boolean
     */
    public get wiFiConnectOnlyToConfiguredNetworks() {
        return this._wiFiConnectOnlyToConfiguredNetworks;
    };
    /**
     * Sets the wiFiConnectOnlyToConfiguredNetworks property value. Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is in supervised mode. Available for devices running iOS and iPadOS versions 14.4 and earlier. Devices running 14.5+ should use the setting, 'WiFiConnectToAllowedNetworksOnlyForced.
     * @param value Value to set for the wiFiConnectOnlyToConfiguredNetworks property.
     */
    public set wiFiConnectOnlyToConfiguredNetworks(value: boolean | undefined) {
        this._wiFiConnectOnlyToConfiguredNetworks = value;
    };
}
