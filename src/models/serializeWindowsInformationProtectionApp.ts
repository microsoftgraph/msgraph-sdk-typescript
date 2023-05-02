import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionApp(writer: SerializationWriter, windowsInformationProtectionApp: WindowsInformationProtectionApp | undefined = {} as WindowsInformationProtectionApp) : void {
        writer.writeBooleanValue("denied", windowsInformationProtectionApp.denied);
        writer.writeStringValue("description", windowsInformationProtectionApp.description);
        writer.writeStringValue("displayName", windowsInformationProtectionApp.displayName);
        writer.writeStringValue("@odata.type", windowsInformationProtectionApp.odataType);
        writer.writeStringValue("productName", windowsInformationProtectionApp.productName);
        writer.writeStringValue("publisherName", windowsInformationProtectionApp.publisherName);
        writer.writeAdditionalData(windowsInformationProtectionApp.additionalData);
}
