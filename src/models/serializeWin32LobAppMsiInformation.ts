import {Win32LobAppMsiInformation} from './win32LobAppMsiInformation';
import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppMsiInformation(writer: SerializationWriter, win32LobAppMsiInformation: Win32LobAppMsiInformation | undefined = {} as Win32LobAppMsiInformation) : void {
        writer.writeStringValue("@odata.type", win32LobAppMsiInformation.odataType);
        writer.writeEnumValue<Win32LobAppMsiPackageType>("packageType", win32LobAppMsiInformation.packageType);
        writer.writeStringValue("productCode", win32LobAppMsiInformation.productCode);
        writer.writeStringValue("productName", win32LobAppMsiInformation.productName);
        writer.writeStringValue("productVersion", win32LobAppMsiInformation.productVersion);
        writer.writeStringValue("publisher", win32LobAppMsiInformation.publisher);
        writer.writeBooleanValue("requiresReboot", win32LobAppMsiInformation.requiresReboot);
        writer.writeStringValue("upgradeCode", win32LobAppMsiInformation.upgradeCode);
        writer.writeAdditionalData(win32LobAppMsiInformation.additionalData);
}
