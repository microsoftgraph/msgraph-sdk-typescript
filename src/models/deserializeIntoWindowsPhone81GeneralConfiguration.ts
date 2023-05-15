import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeAppListItem} from './serializeAppListItem';
import {WindowsPhone81GeneralConfiguration} from './windowsPhone81GeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81GeneralConfiguration(windowsPhone81GeneralConfiguration: WindowsPhone81GeneralConfiguration | undefined = {} as WindowsPhone81GeneralConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsPhone81GeneralConfiguration),
        "applyOnlyToWindowsPhone81": n => { windowsPhone81GeneralConfiguration.applyOnlyToWindowsPhone81 = n.getBooleanValue(); },
        "appsBlockCopyPaste": n => { windowsPhone81GeneralConfiguration.appsBlockCopyPaste = n.getBooleanValue(); },
        "bluetoothBlocked": n => { windowsPhone81GeneralConfiguration.bluetoothBlocked = n.getBooleanValue(); },
        "cameraBlocked": n => { windowsPhone81GeneralConfiguration.cameraBlocked = n.getBooleanValue(); },
        "cellularBlockWifiTethering": n => { windowsPhone81GeneralConfiguration.cellularBlockWifiTethering = n.getBooleanValue(); },
        "compliantAppListType": n => { windowsPhone81GeneralConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
        "compliantAppsList": n => { windowsPhone81GeneralConfiguration.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "diagnosticDataBlockSubmission": n => { windowsPhone81GeneralConfiguration.diagnosticDataBlockSubmission = n.getBooleanValue(); },
        "emailBlockAddingAccounts": n => { windowsPhone81GeneralConfiguration.emailBlockAddingAccounts = n.getBooleanValue(); },
        "locationServicesBlocked": n => { windowsPhone81GeneralConfiguration.locationServicesBlocked = n.getBooleanValue(); },
        "microsoftAccountBlocked": n => { windowsPhone81GeneralConfiguration.microsoftAccountBlocked = n.getBooleanValue(); },
        "nfcBlocked": n => { windowsPhone81GeneralConfiguration.nfcBlocked = n.getBooleanValue(); },
        "passwordBlockSimple": n => { windowsPhone81GeneralConfiguration.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { windowsPhone81GeneralConfiguration.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { windowsPhone81GeneralConfiguration.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { windowsPhone81GeneralConfiguration.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { windowsPhone81GeneralConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { windowsPhone81GeneralConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { windowsPhone81GeneralConfiguration.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { windowsPhone81GeneralConfiguration.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "passwordSignInFailureCountBeforeFactoryReset": n => { windowsPhone81GeneralConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
        "screenCaptureBlocked": n => { windowsPhone81GeneralConfiguration.screenCaptureBlocked = n.getBooleanValue(); },
        "storageBlockRemovableStorage": n => { windowsPhone81GeneralConfiguration.storageBlockRemovableStorage = n.getBooleanValue(); },
        "storageRequireEncryption": n => { windowsPhone81GeneralConfiguration.storageRequireEncryption = n.getBooleanValue(); },
        "webBrowserBlocked": n => { windowsPhone81GeneralConfiguration.webBrowserBlocked = n.getBooleanValue(); },
        "wifiBlockAutomaticConnectHotspots": n => { windowsPhone81GeneralConfiguration.wifiBlockAutomaticConnectHotspots = n.getBooleanValue(); },
        "wifiBlocked": n => { windowsPhone81GeneralConfiguration.wifiBlocked = n.getBooleanValue(); },
        "wifiBlockHotspotReporting": n => { windowsPhone81GeneralConfiguration.wifiBlockHotspotReporting = n.getBooleanValue(); },
        "windowsStoreBlocked": n => { windowsPhone81GeneralConfiguration.windowsStoreBlocked = n.getBooleanValue(); },
    }
}
