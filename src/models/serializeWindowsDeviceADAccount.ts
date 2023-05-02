import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import {WindowsDeviceADAccount} from './windowsDeviceADAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDeviceADAccount(writer: SerializationWriter, windowsDeviceADAccount: WindowsDeviceADAccount | undefined = {} as WindowsDeviceADAccount) : void {
        serializeWindowsDeviceAccount(writer, windowsDeviceADAccount)
        writer.writeStringValue("domainName", windowsDeviceADAccount.domainName);
        writer.writeStringValue("userName", windowsDeviceADAccount.userName);
}
