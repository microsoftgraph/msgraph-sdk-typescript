import {Win32LobAppMsiInformation} from './win32LobAppMsiInformation';
import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppMsiInformation(win32LobAppMsiInformation: Win32LobAppMsiInformation | undefined = {} as Win32LobAppMsiInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { win32LobAppMsiInformation.odataType = n.getStringValue(); },
        "packageType": n => { win32LobAppMsiInformation.packageType = n.getEnumValue<Win32LobAppMsiPackageType>(Win32LobAppMsiPackageType); },
        "productCode": n => { win32LobAppMsiInformation.productCode = n.getStringValue(); },
        "productName": n => { win32LobAppMsiInformation.productName = n.getStringValue(); },
        "productVersion": n => { win32LobAppMsiInformation.productVersion = n.getStringValue(); },
        "publisher": n => { win32LobAppMsiInformation.publisher = n.getStringValue(); },
        "requiresReboot": n => { win32LobAppMsiInformation.requiresReboot = n.getBooleanValue(); },
        "upgradeCode": n => { win32LobAppMsiInformation.upgradeCode = n.getStringValue(); },
    }
}
