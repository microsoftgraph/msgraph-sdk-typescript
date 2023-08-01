import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import type {WindowsDeviceAzureADAccount} from './windowsDeviceAzureADAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDeviceAzureADAccount(writer: SerializationWriter, windowsDeviceAzureADAccount: WindowsDeviceAzureADAccount | undefined = {} as WindowsDeviceAzureADAccount) : void {
        serializeWindowsDeviceAccount(writer, windowsDeviceAzureADAccount)
        writer.writeStringValue("userPrincipalName", windowsDeviceAzureADAccount.userPrincipalName);
}
