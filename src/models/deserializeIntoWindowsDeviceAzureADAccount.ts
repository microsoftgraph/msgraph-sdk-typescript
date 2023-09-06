import { deserializeIntoWindowsDeviceAccount } from './deserializeIntoWindowsDeviceAccount';
import { type WindowsDeviceAzureADAccount } from './windowsDeviceAzureADAccount';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDeviceAzureADAccount(windowsDeviceAzureADAccount: WindowsDeviceAzureADAccount | undefined = {} as WindowsDeviceAzureADAccount) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsDeviceAccount(windowsDeviceAzureADAccount),
        "userPrincipalName": n => { windowsDeviceAzureADAccount.userPrincipalName = n.getStringValue(); },
    }
}
