import { type WindowsDeviceAccount } from './windowsDeviceAccount';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsDeviceAccount(writer: SerializationWriter, windowsDeviceAccount: WindowsDeviceAccount | undefined = {} as WindowsDeviceAccount) : void {
        writer.writeStringValue("@odata.type", windowsDeviceAccount.odataType);
        writer.writeStringValue("password", windowsDeviceAccount.password);
        writer.writeAdditionalData(windowsDeviceAccount.additionalData);
}
