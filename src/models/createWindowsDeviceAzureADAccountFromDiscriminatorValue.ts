import { deserializeIntoWindowsDeviceAzureADAccount } from './deserializeIntoWindowsDeviceAzureADAccount';
import { type WindowsDeviceAzureADAccount } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAzureADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDeviceAzureADAccount;
}
