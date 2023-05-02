import {AndroidGeneralDeviceConfiguration} from './androidGeneralDeviceConfiguration';
import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {serializeAppListItem} from './serializeAppListItem';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidGeneralDeviceConfiguration(androidGeneralDeviceConfiguration: AndroidGeneralDeviceConfiguration | undefined = {} as AndroidGeneralDeviceConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidGeneralDeviceConfiguration),
        "appsBlockClipboardSharing": n => { androidGeneralDeviceConfiguration.appsBlockClipboardSharing = n.getBooleanValue(); },
        "appsBlockCopyPaste": n => { androidGeneralDeviceConfiguration.appsBlockCopyPaste = n.getBooleanValue(); },
        "appsBlockYouTube": n => { androidGeneralDeviceConfiguration.appsBlockYouTube = n.getBooleanValue(); },
        "appsHideList": n => { androidGeneralDeviceConfiguration.appsHideList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "appsInstallAllowList": n => { androidGeneralDeviceConfiguration.appsInstallAllowList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "appsLaunchBlockList": n => { androidGeneralDeviceConfiguration.appsLaunchBlockList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "bluetoothBlocked": n => { androidGeneralDeviceConfiguration.bluetoothBlocked = n.getBooleanValue(); },
        "cameraBlocked": n => { androidGeneralDeviceConfiguration.cameraBlocked = n.getBooleanValue(); },
        "cellularBlockDataRoaming": n => { androidGeneralDeviceConfiguration.cellularBlockDataRoaming = n.getBooleanValue(); },
        "cellularBlockMessaging": n => { androidGeneralDeviceConfiguration.cellularBlockMessaging = n.getBooleanValue(); },
        "cellularBlockVoiceRoaming": n => { androidGeneralDeviceConfiguration.cellularBlockVoiceRoaming = n.getBooleanValue(); },
        "cellularBlockWiFiTethering": n => { androidGeneralDeviceConfiguration.cellularBlockWiFiTethering = n.getBooleanValue(); },
        "compliantAppListType": n => { androidGeneralDeviceConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
        "compliantAppsList": n => { androidGeneralDeviceConfiguration.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "deviceSharingAllowed": n => { androidGeneralDeviceConfiguration.deviceSharingAllowed = n.getBooleanValue(); },
        "diagnosticDataBlockSubmission": n => { androidGeneralDeviceConfiguration.diagnosticDataBlockSubmission = n.getBooleanValue(); },
        "factoryResetBlocked": n => { androidGeneralDeviceConfiguration.factoryResetBlocked = n.getBooleanValue(); },
        "googleAccountBlockAutoSync": n => { androidGeneralDeviceConfiguration.googleAccountBlockAutoSync = n.getBooleanValue(); },
        "googlePlayStoreBlocked": n => { androidGeneralDeviceConfiguration.googlePlayStoreBlocked = n.getBooleanValue(); },
        "kioskModeApps": n => { androidGeneralDeviceConfiguration.kioskModeApps = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "kioskModeBlockSleepButton": n => { androidGeneralDeviceConfiguration.kioskModeBlockSleepButton = n.getBooleanValue(); },
        "kioskModeBlockVolumeButtons": n => { androidGeneralDeviceConfiguration.kioskModeBlockVolumeButtons = n.getBooleanValue(); },
        "locationServicesBlocked": n => { androidGeneralDeviceConfiguration.locationServicesBlocked = n.getBooleanValue(); },
        "nfcBlocked": n => { androidGeneralDeviceConfiguration.nfcBlocked = n.getBooleanValue(); },
        "passwordBlockFingerprintUnlock": n => { androidGeneralDeviceConfiguration.passwordBlockFingerprintUnlock = n.getBooleanValue(); },
        "passwordBlockTrustAgents": n => { androidGeneralDeviceConfiguration.passwordBlockTrustAgents = n.getBooleanValue(); },
        "passwordExpirationDays": n => { androidGeneralDeviceConfiguration.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumLength": n => { androidGeneralDeviceConfiguration.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { androidGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { androidGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { androidGeneralDeviceConfiguration.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { androidGeneralDeviceConfiguration.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType); },
        "passwordSignInFailureCountBeforeFactoryReset": n => { androidGeneralDeviceConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
        "powerOffBlocked": n => { androidGeneralDeviceConfiguration.powerOffBlocked = n.getBooleanValue(); },
        "screenCaptureBlocked": n => { androidGeneralDeviceConfiguration.screenCaptureBlocked = n.getBooleanValue(); },
        "securityRequireVerifyApps": n => { androidGeneralDeviceConfiguration.securityRequireVerifyApps = n.getBooleanValue(); },
        "storageBlockGoogleBackup": n => { androidGeneralDeviceConfiguration.storageBlockGoogleBackup = n.getBooleanValue(); },
        "storageBlockRemovableStorage": n => { androidGeneralDeviceConfiguration.storageBlockRemovableStorage = n.getBooleanValue(); },
        "storageRequireDeviceEncryption": n => { androidGeneralDeviceConfiguration.storageRequireDeviceEncryption = n.getBooleanValue(); },
        "storageRequireRemovableStorageEncryption": n => { androidGeneralDeviceConfiguration.storageRequireRemovableStorageEncryption = n.getBooleanValue(); },
        "voiceAssistantBlocked": n => { androidGeneralDeviceConfiguration.voiceAssistantBlocked = n.getBooleanValue(); },
        "voiceDialingBlocked": n => { androidGeneralDeviceConfiguration.voiceDialingBlocked = n.getBooleanValue(); },
        "webBrowserBlockAutofill": n => { androidGeneralDeviceConfiguration.webBrowserBlockAutofill = n.getBooleanValue(); },
        "webBrowserBlocked": n => { androidGeneralDeviceConfiguration.webBrowserBlocked = n.getBooleanValue(); },
        "webBrowserBlockJavaScript": n => { androidGeneralDeviceConfiguration.webBrowserBlockJavaScript = n.getBooleanValue(); },
        "webBrowserBlockPopups": n => { androidGeneralDeviceConfiguration.webBrowserBlockPopups = n.getBooleanValue(); },
        "webBrowserCookieSettings": n => { androidGeneralDeviceConfiguration.webBrowserCookieSettings = n.getEnumValue<WebBrowserCookieSettings>(WebBrowserCookieSettings); },
        "wiFiBlocked": n => { androidGeneralDeviceConfiguration.wiFiBlocked = n.getBooleanValue(); },
    }
}
