import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeAppListItem} from './serializeAppListItem';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {WindowsPhone81GeneralConfiguration} from './windowsPhone81GeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81GeneralConfiguration(writer: SerializationWriter, windowsPhone81GeneralConfiguration: WindowsPhone81GeneralConfiguration | undefined = {} as WindowsPhone81GeneralConfiguration) : void {
        serializeDeviceConfiguration(writer, windowsPhone81GeneralConfiguration)
        writer.writeBooleanValue("appsBlockCopyPaste", windowsPhone81GeneralConfiguration.appsBlockCopyPaste);
        writer.writeBooleanValue("bluetoothBlocked", windowsPhone81GeneralConfiguration.bluetoothBlocked);
        writer.writeBooleanValue("cameraBlocked", windowsPhone81GeneralConfiguration.cameraBlocked);
        writer.writeBooleanValue("cellularBlockWifiTethering", windowsPhone81GeneralConfiguration.cellularBlockWifiTethering);
        writer.writeEnumValue<AppListType>("compliantAppListType", windowsPhone81GeneralConfiguration.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", windowsPhone81GeneralConfiguration.compliantAppsList, serializeAppListItem);
        writer.writeBooleanValue("diagnosticDataBlockSubmission", windowsPhone81GeneralConfiguration.diagnosticDataBlockSubmission);
        writer.writeBooleanValue("emailBlockAddingAccounts", windowsPhone81GeneralConfiguration.emailBlockAddingAccounts);
        writer.writeBooleanValue("locationServicesBlocked", windowsPhone81GeneralConfiguration.locationServicesBlocked);
        writer.writeBooleanValue("microsoftAccountBlocked", windowsPhone81GeneralConfiguration.microsoftAccountBlocked);
        writer.writeBooleanValue("nfcBlocked", windowsPhone81GeneralConfiguration.nfcBlocked);
        writer.writeBooleanValue("passwordBlockSimple", windowsPhone81GeneralConfiguration.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", windowsPhone81GeneralConfiguration.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", windowsPhone81GeneralConfiguration.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", windowsPhone81GeneralConfiguration.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", windowsPhone81GeneralConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", windowsPhone81GeneralConfiguration.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", windowsPhone81GeneralConfiguration.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", windowsPhone81GeneralConfiguration.passwordRequiredType);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", windowsPhone81GeneralConfiguration.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("screenCaptureBlocked", windowsPhone81GeneralConfiguration.screenCaptureBlocked);
        writer.writeBooleanValue("storageBlockRemovableStorage", windowsPhone81GeneralConfiguration.storageBlockRemovableStorage);
        writer.writeBooleanValue("storageRequireEncryption", windowsPhone81GeneralConfiguration.storageRequireEncryption);
        writer.writeBooleanValue("webBrowserBlocked", windowsPhone81GeneralConfiguration.webBrowserBlocked);
        writer.writeBooleanValue("wifiBlockAutomaticConnectHotspots", windowsPhone81GeneralConfiguration.wifiBlockAutomaticConnectHotspots);
        writer.writeBooleanValue("wifiBlocked", windowsPhone81GeneralConfiguration.wifiBlocked);
        writer.writeBooleanValue("wifiBlockHotspotReporting", windowsPhone81GeneralConfiguration.wifiBlockHotspotReporting);
        writer.writeBooleanValue("windowsStoreBlocked", windowsPhone81GeneralConfiguration.windowsStoreBlocked);
}
