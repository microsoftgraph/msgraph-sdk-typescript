import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionApp: WindowsInformationProtectionApp | undefined = {} as WindowsInformationProtectionApp) : Record<string, (node: ParseNode) => void> {
    return {
        "denied": n => { windowsInformationProtectionApp.denied = n.getBooleanValue(); },
        "description": n => { windowsInformationProtectionApp.description = n.getStringValue(); },
        "displayName": n => { windowsInformationProtectionApp.displayName = n.getStringValue(); },
        "@odata.type": n => { windowsInformationProtectionApp.odataType = n.getStringValue(); },
        "productName": n => { windowsInformationProtectionApp.productName = n.getStringValue(); },
        "publisherName": n => { windowsInformationProtectionApp.publisherName = n.getStringValue(); },
    }
}
