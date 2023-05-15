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
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
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
import {serializeAppListItem} from './serializeAppListItem';
import {serializeIosNetworkUsageRule} from './serializeIosNetworkUsageRule';
import {serializeMediaContentRatingAustralia} from './serializeMediaContentRatingAustralia';
import {serializeMediaContentRatingCanada} from './serializeMediaContentRatingCanada';
import {serializeMediaContentRatingFrance} from './serializeMediaContentRatingFrance';
import {serializeMediaContentRatingGermany} from './serializeMediaContentRatingGermany';
import {serializeMediaContentRatingIreland} from './serializeMediaContentRatingIreland';
import {serializeMediaContentRatingJapan} from './serializeMediaContentRatingJapan';
import {serializeMediaContentRatingNewZealand} from './serializeMediaContentRatingNewZealand';
import {serializeMediaContentRatingUnitedKingdom} from './serializeMediaContentRatingUnitedKingdom';
import {serializeMediaContentRatingUnitedStates} from './serializeMediaContentRatingUnitedStates';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosGeneralDeviceConfiguration(iosGeneralDeviceConfiguration: IosGeneralDeviceConfiguration | undefined = {} as IosGeneralDeviceConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(iosGeneralDeviceConfiguration),
        "accountBlockModification": n => { iosGeneralDeviceConfiguration.accountBlockModification = n.getBooleanValue(); },
        "activationLockAllowWhenSupervised": n => { iosGeneralDeviceConfiguration.activationLockAllowWhenSupervised = n.getBooleanValue(); },
        "airDropBlocked": n => { iosGeneralDeviceConfiguration.airDropBlocked = n.getBooleanValue(); },
        "airDropForceUnmanagedDropTarget": n => { iosGeneralDeviceConfiguration.airDropForceUnmanagedDropTarget = n.getBooleanValue(); },
        "airPlayForcePairingPasswordForOutgoingRequests": n => { iosGeneralDeviceConfiguration.airPlayForcePairingPasswordForOutgoingRequests = n.getBooleanValue(); },
        "appleNewsBlocked": n => { iosGeneralDeviceConfiguration.appleNewsBlocked = n.getBooleanValue(); },
        "appleWatchBlockPairing": n => { iosGeneralDeviceConfiguration.appleWatchBlockPairing = n.getBooleanValue(); },
        "appleWatchForceWristDetection": n => { iosGeneralDeviceConfiguration.appleWatchForceWristDetection = n.getBooleanValue(); },
        "appsSingleAppModeList": n => { iosGeneralDeviceConfiguration.appsSingleAppModeList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "appStoreBlockAutomaticDownloads": n => { iosGeneralDeviceConfiguration.appStoreBlockAutomaticDownloads = n.getBooleanValue(); },
        "appStoreBlocked": n => { iosGeneralDeviceConfiguration.appStoreBlocked = n.getBooleanValue(); },
        "appStoreBlockInAppPurchases": n => { iosGeneralDeviceConfiguration.appStoreBlockInAppPurchases = n.getBooleanValue(); },
        "appStoreBlockUIAppInstallation": n => { iosGeneralDeviceConfiguration.appStoreBlockUIAppInstallation = n.getBooleanValue(); },
        "appStoreRequirePassword": n => { iosGeneralDeviceConfiguration.appStoreRequirePassword = n.getBooleanValue(); },
        "appsVisibilityList": n => { iosGeneralDeviceConfiguration.appsVisibilityList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "appsVisibilityListType": n => { iosGeneralDeviceConfiguration.appsVisibilityListType = n.getEnumValue<AppListType>(AppListType); },
        "bluetoothBlockModification": n => { iosGeneralDeviceConfiguration.bluetoothBlockModification = n.getBooleanValue(); },
        "cameraBlocked": n => { iosGeneralDeviceConfiguration.cameraBlocked = n.getBooleanValue(); },
        "cellularBlockDataRoaming": n => { iosGeneralDeviceConfiguration.cellularBlockDataRoaming = n.getBooleanValue(); },
        "cellularBlockGlobalBackgroundFetchWhileRoaming": n => { iosGeneralDeviceConfiguration.cellularBlockGlobalBackgroundFetchWhileRoaming = n.getBooleanValue(); },
        "cellularBlockPerAppDataModification": n => { iosGeneralDeviceConfiguration.cellularBlockPerAppDataModification = n.getBooleanValue(); },
        "cellularBlockPersonalHotspot": n => { iosGeneralDeviceConfiguration.cellularBlockPersonalHotspot = n.getBooleanValue(); },
        "cellularBlockVoiceRoaming": n => { iosGeneralDeviceConfiguration.cellularBlockVoiceRoaming = n.getBooleanValue(); },
        "certificatesBlockUntrustedTlsCertificates": n => { iosGeneralDeviceConfiguration.certificatesBlockUntrustedTlsCertificates = n.getBooleanValue(); },
        "classroomAppBlockRemoteScreenObservation": n => { iosGeneralDeviceConfiguration.classroomAppBlockRemoteScreenObservation = n.getBooleanValue(); },
        "classroomAppForceUnpromptedScreenObservation": n => { iosGeneralDeviceConfiguration.classroomAppForceUnpromptedScreenObservation = n.getBooleanValue(); },
        "compliantAppListType": n => { iosGeneralDeviceConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
        "compliantAppsList": n => { iosGeneralDeviceConfiguration.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "configurationProfileBlockChanges": n => { iosGeneralDeviceConfiguration.configurationProfileBlockChanges = n.getBooleanValue(); },
        "definitionLookupBlocked": n => { iosGeneralDeviceConfiguration.definitionLookupBlocked = n.getBooleanValue(); },
        "deviceBlockEnableRestrictions": n => { iosGeneralDeviceConfiguration.deviceBlockEnableRestrictions = n.getBooleanValue(); },
        "deviceBlockEraseContentAndSettings": n => { iosGeneralDeviceConfiguration.deviceBlockEraseContentAndSettings = n.getBooleanValue(); },
        "deviceBlockNameModification": n => { iosGeneralDeviceConfiguration.deviceBlockNameModification = n.getBooleanValue(); },
        "diagnosticDataBlockSubmission": n => { iosGeneralDeviceConfiguration.diagnosticDataBlockSubmission = n.getBooleanValue(); },
        "diagnosticDataBlockSubmissionModification": n => { iosGeneralDeviceConfiguration.diagnosticDataBlockSubmissionModification = n.getBooleanValue(); },
        "documentsBlockManagedDocumentsInUnmanagedApps": n => { iosGeneralDeviceConfiguration.documentsBlockManagedDocumentsInUnmanagedApps = n.getBooleanValue(); },
        "documentsBlockUnmanagedDocumentsInManagedApps": n => { iosGeneralDeviceConfiguration.documentsBlockUnmanagedDocumentsInManagedApps = n.getBooleanValue(); },
        "emailInDomainSuffixes": n => { iosGeneralDeviceConfiguration.emailInDomainSuffixes = n.getCollectionOfPrimitiveValues<string>(); },
        "enterpriseAppBlockTrust": n => { iosGeneralDeviceConfiguration.enterpriseAppBlockTrust = n.getBooleanValue(); },
        "enterpriseAppBlockTrustModification": n => { iosGeneralDeviceConfiguration.enterpriseAppBlockTrustModification = n.getBooleanValue(); },
        "faceTimeBlocked": n => { iosGeneralDeviceConfiguration.faceTimeBlocked = n.getBooleanValue(); },
        "findMyFriendsBlocked": n => { iosGeneralDeviceConfiguration.findMyFriendsBlocked = n.getBooleanValue(); },
        "gameCenterBlocked": n => { iosGeneralDeviceConfiguration.gameCenterBlocked = n.getBooleanValue(); },
        "gamingBlockGameCenterFriends": n => { iosGeneralDeviceConfiguration.gamingBlockGameCenterFriends = n.getBooleanValue(); },
        "gamingBlockMultiplayer": n => { iosGeneralDeviceConfiguration.gamingBlockMultiplayer = n.getBooleanValue(); },
        "hostPairingBlocked": n => { iosGeneralDeviceConfiguration.hostPairingBlocked = n.getBooleanValue(); },
        "iBooksStoreBlocked": n => { iosGeneralDeviceConfiguration.iBooksStoreBlocked = n.getBooleanValue(); },
        "iBooksStoreBlockErotica": n => { iosGeneralDeviceConfiguration.iBooksStoreBlockErotica = n.getBooleanValue(); },
        "iCloudBlockActivityContinuation": n => { iosGeneralDeviceConfiguration.iCloudBlockActivityContinuation = n.getBooleanValue(); },
        "iCloudBlockBackup": n => { iosGeneralDeviceConfiguration.iCloudBlockBackup = n.getBooleanValue(); },
        "iCloudBlockDocumentSync": n => { iosGeneralDeviceConfiguration.iCloudBlockDocumentSync = n.getBooleanValue(); },
        "iCloudBlockManagedAppsSync": n => { iosGeneralDeviceConfiguration.iCloudBlockManagedAppsSync = n.getBooleanValue(); },
        "iCloudBlockPhotoLibrary": n => { iosGeneralDeviceConfiguration.iCloudBlockPhotoLibrary = n.getBooleanValue(); },
        "iCloudBlockPhotoStreamSync": n => { iosGeneralDeviceConfiguration.iCloudBlockPhotoStreamSync = n.getBooleanValue(); },
        "iCloudBlockSharedPhotoStream": n => { iosGeneralDeviceConfiguration.iCloudBlockSharedPhotoStream = n.getBooleanValue(); },
        "iCloudRequireEncryptedBackup": n => { iosGeneralDeviceConfiguration.iCloudRequireEncryptedBackup = n.getBooleanValue(); },
        "iTunesBlockExplicitContent": n => { iosGeneralDeviceConfiguration.iTunesBlockExplicitContent = n.getBooleanValue(); },
        "iTunesBlockMusicService": n => { iosGeneralDeviceConfiguration.iTunesBlockMusicService = n.getBooleanValue(); },
        "iTunesBlockRadio": n => { iosGeneralDeviceConfiguration.iTunesBlockRadio = n.getBooleanValue(); },
        "keyboardBlockAutoCorrect": n => { iosGeneralDeviceConfiguration.keyboardBlockAutoCorrect = n.getBooleanValue(); },
        "keyboardBlockDictation": n => { iosGeneralDeviceConfiguration.keyboardBlockDictation = n.getBooleanValue(); },
        "keyboardBlockPredictive": n => { iosGeneralDeviceConfiguration.keyboardBlockPredictive = n.getBooleanValue(); },
        "keyboardBlockShortcuts": n => { iosGeneralDeviceConfiguration.keyboardBlockShortcuts = n.getBooleanValue(); },
        "keyboardBlockSpellCheck": n => { iosGeneralDeviceConfiguration.keyboardBlockSpellCheck = n.getBooleanValue(); },
        "kioskModeAllowAssistiveSpeak": n => { iosGeneralDeviceConfiguration.kioskModeAllowAssistiveSpeak = n.getBooleanValue(); },
        "kioskModeAllowAssistiveTouchSettings": n => { iosGeneralDeviceConfiguration.kioskModeAllowAssistiveTouchSettings = n.getBooleanValue(); },
        "kioskModeAllowAutoLock": n => { iosGeneralDeviceConfiguration.kioskModeAllowAutoLock = n.getBooleanValue(); },
        "kioskModeAllowColorInversionSettings": n => { iosGeneralDeviceConfiguration.kioskModeAllowColorInversionSettings = n.getBooleanValue(); },
        "kioskModeAllowRingerSwitch": n => { iosGeneralDeviceConfiguration.kioskModeAllowRingerSwitch = n.getBooleanValue(); },
        "kioskModeAllowScreenRotation": n => { iosGeneralDeviceConfiguration.kioskModeAllowScreenRotation = n.getBooleanValue(); },
        "kioskModeAllowSleepButton": n => { iosGeneralDeviceConfiguration.kioskModeAllowSleepButton = n.getBooleanValue(); },
        "kioskModeAllowTouchscreen": n => { iosGeneralDeviceConfiguration.kioskModeAllowTouchscreen = n.getBooleanValue(); },
        "kioskModeAllowVoiceOverSettings": n => { iosGeneralDeviceConfiguration.kioskModeAllowVoiceOverSettings = n.getBooleanValue(); },
        "kioskModeAllowVolumeButtons": n => { iosGeneralDeviceConfiguration.kioskModeAllowVolumeButtons = n.getBooleanValue(); },
        "kioskModeAllowZoomSettings": n => { iosGeneralDeviceConfiguration.kioskModeAllowZoomSettings = n.getBooleanValue(); },
        "kioskModeAppStoreUrl": n => { iosGeneralDeviceConfiguration.kioskModeAppStoreUrl = n.getStringValue(); },
        "kioskModeBuiltInAppId": n => { iosGeneralDeviceConfiguration.kioskModeBuiltInAppId = n.getStringValue(); },
        "kioskModeManagedAppId": n => { iosGeneralDeviceConfiguration.kioskModeManagedAppId = n.getStringValue(); },
        "kioskModeRequireAssistiveTouch": n => { iosGeneralDeviceConfiguration.kioskModeRequireAssistiveTouch = n.getBooleanValue(); },
        "kioskModeRequireColorInversion": n => { iosGeneralDeviceConfiguration.kioskModeRequireColorInversion = n.getBooleanValue(); },
        "kioskModeRequireMonoAudio": n => { iosGeneralDeviceConfiguration.kioskModeRequireMonoAudio = n.getBooleanValue(); },
        "kioskModeRequireVoiceOver": n => { iosGeneralDeviceConfiguration.kioskModeRequireVoiceOver = n.getBooleanValue(); },
        "kioskModeRequireZoom": n => { iosGeneralDeviceConfiguration.kioskModeRequireZoom = n.getBooleanValue(); },
        "lockScreenBlockControlCenter": n => { iosGeneralDeviceConfiguration.lockScreenBlockControlCenter = n.getBooleanValue(); },
        "lockScreenBlockNotificationView": n => { iosGeneralDeviceConfiguration.lockScreenBlockNotificationView = n.getBooleanValue(); },
        "lockScreenBlockPassbook": n => { iosGeneralDeviceConfiguration.lockScreenBlockPassbook = n.getBooleanValue(); },
        "lockScreenBlockTodayView": n => { iosGeneralDeviceConfiguration.lockScreenBlockTodayView = n.getBooleanValue(); },
        "mediaContentRatingApps": n => { iosGeneralDeviceConfiguration.mediaContentRatingApps = n.getEnumValue<RatingAppsType>(RatingAppsType); },
        "mediaContentRatingAustralia": n => { iosGeneralDeviceConfiguration.mediaContentRatingAustralia = n.getObjectValue<MediaContentRatingAustralia>(createMediaContentRatingAustraliaFromDiscriminatorValue); },
        "mediaContentRatingCanada": n => { iosGeneralDeviceConfiguration.mediaContentRatingCanada = n.getObjectValue<MediaContentRatingCanada>(createMediaContentRatingCanadaFromDiscriminatorValue); },
        "mediaContentRatingFrance": n => { iosGeneralDeviceConfiguration.mediaContentRatingFrance = n.getObjectValue<MediaContentRatingFrance>(createMediaContentRatingFranceFromDiscriminatorValue); },
        "mediaContentRatingGermany": n => { iosGeneralDeviceConfiguration.mediaContentRatingGermany = n.getObjectValue<MediaContentRatingGermany>(createMediaContentRatingGermanyFromDiscriminatorValue); },
        "mediaContentRatingIreland": n => { iosGeneralDeviceConfiguration.mediaContentRatingIreland = n.getObjectValue<MediaContentRatingIreland>(createMediaContentRatingIrelandFromDiscriminatorValue); },
        "mediaContentRatingJapan": n => { iosGeneralDeviceConfiguration.mediaContentRatingJapan = n.getObjectValue<MediaContentRatingJapan>(createMediaContentRatingJapanFromDiscriminatorValue); },
        "mediaContentRatingNewZealand": n => { iosGeneralDeviceConfiguration.mediaContentRatingNewZealand = n.getObjectValue<MediaContentRatingNewZealand>(createMediaContentRatingNewZealandFromDiscriminatorValue); },
        "mediaContentRatingUnitedKingdom": n => { iosGeneralDeviceConfiguration.mediaContentRatingUnitedKingdom = n.getObjectValue<MediaContentRatingUnitedKingdom>(createMediaContentRatingUnitedKingdomFromDiscriminatorValue); },
        "mediaContentRatingUnitedStates": n => { iosGeneralDeviceConfiguration.mediaContentRatingUnitedStates = n.getObjectValue<MediaContentRatingUnitedStates>(createMediaContentRatingUnitedStatesFromDiscriminatorValue); },
        "messagesBlocked": n => { iosGeneralDeviceConfiguration.messagesBlocked = n.getBooleanValue(); },
        "networkUsageRules": n => { iosGeneralDeviceConfiguration.networkUsageRules = n.getCollectionOfObjectValues<IosNetworkUsageRule>(createIosNetworkUsageRuleFromDiscriminatorValue); },
        "notificationsBlockSettingsModification": n => { iosGeneralDeviceConfiguration.notificationsBlockSettingsModification = n.getBooleanValue(); },
        "passcodeBlockFingerprintModification": n => { iosGeneralDeviceConfiguration.passcodeBlockFingerprintModification = n.getBooleanValue(); },
        "passcodeBlockFingerprintUnlock": n => { iosGeneralDeviceConfiguration.passcodeBlockFingerprintUnlock = n.getBooleanValue(); },
        "passcodeBlockModification": n => { iosGeneralDeviceConfiguration.passcodeBlockModification = n.getBooleanValue(); },
        "passcodeBlockSimple": n => { iosGeneralDeviceConfiguration.passcodeBlockSimple = n.getBooleanValue(); },
        "passcodeExpirationDays": n => { iosGeneralDeviceConfiguration.passcodeExpirationDays = n.getNumberValue(); },
        "passcodeMinimumCharacterSetCount": n => { iosGeneralDeviceConfiguration.passcodeMinimumCharacterSetCount = n.getNumberValue(); },
        "passcodeMinimumLength": n => { iosGeneralDeviceConfiguration.passcodeMinimumLength = n.getNumberValue(); },
        "passcodeMinutesOfInactivityBeforeLock": n => { iosGeneralDeviceConfiguration.passcodeMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passcodeMinutesOfInactivityBeforeScreenTimeout": n => { iosGeneralDeviceConfiguration.passcodeMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "passcodePreviousPasscodeBlockCount": n => { iosGeneralDeviceConfiguration.passcodePreviousPasscodeBlockCount = n.getNumberValue(); },
        "passcodeRequired": n => { iosGeneralDeviceConfiguration.passcodeRequired = n.getBooleanValue(); },
        "passcodeRequiredType": n => { iosGeneralDeviceConfiguration.passcodeRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "passcodeSignInFailureCountBeforeWipe": n => { iosGeneralDeviceConfiguration.passcodeSignInFailureCountBeforeWipe = n.getNumberValue(); },
        "podcastsBlocked": n => { iosGeneralDeviceConfiguration.podcastsBlocked = n.getBooleanValue(); },
        "safariBlockAutofill": n => { iosGeneralDeviceConfiguration.safariBlockAutofill = n.getBooleanValue(); },
        "safariBlocked": n => { iosGeneralDeviceConfiguration.safariBlocked = n.getBooleanValue(); },
        "safariBlockJavaScript": n => { iosGeneralDeviceConfiguration.safariBlockJavaScript = n.getBooleanValue(); },
        "safariBlockPopups": n => { iosGeneralDeviceConfiguration.safariBlockPopups = n.getBooleanValue(); },
        "safariCookieSettings": n => { iosGeneralDeviceConfiguration.safariCookieSettings = n.getEnumValue<WebBrowserCookieSettings>(WebBrowserCookieSettings); },
        "safariManagedDomains": n => { iosGeneralDeviceConfiguration.safariManagedDomains = n.getCollectionOfPrimitiveValues<string>(); },
        "safariPasswordAutoFillDomains": n => { iosGeneralDeviceConfiguration.safariPasswordAutoFillDomains = n.getCollectionOfPrimitiveValues<string>(); },
        "safariRequireFraudWarning": n => { iosGeneralDeviceConfiguration.safariRequireFraudWarning = n.getBooleanValue(); },
        "screenCaptureBlocked": n => { iosGeneralDeviceConfiguration.screenCaptureBlocked = n.getBooleanValue(); },
        "siriBlocked": n => { iosGeneralDeviceConfiguration.siriBlocked = n.getBooleanValue(); },
        "siriBlockedWhenLocked": n => { iosGeneralDeviceConfiguration.siriBlockedWhenLocked = n.getBooleanValue(); },
        "siriBlockUserGeneratedContent": n => { iosGeneralDeviceConfiguration.siriBlockUserGeneratedContent = n.getBooleanValue(); },
        "siriRequireProfanityFilter": n => { iosGeneralDeviceConfiguration.siriRequireProfanityFilter = n.getBooleanValue(); },
        "spotlightBlockInternetResults": n => { iosGeneralDeviceConfiguration.spotlightBlockInternetResults = n.getBooleanValue(); },
        "voiceDialingBlocked": n => { iosGeneralDeviceConfiguration.voiceDialingBlocked = n.getBooleanValue(); },
        "wallpaperBlockModification": n => { iosGeneralDeviceConfiguration.wallpaperBlockModification = n.getBooleanValue(); },
        "wiFiConnectOnlyToConfiguredNetworks": n => { iosGeneralDeviceConfiguration.wiFiConnectOnlyToConfiguredNetworks = n.getBooleanValue(); },
    }
}
