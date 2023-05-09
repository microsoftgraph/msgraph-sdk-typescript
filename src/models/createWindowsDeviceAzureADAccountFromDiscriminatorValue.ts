import {deserializeIntoWindowsDeviceAzureADAccount} from './deserializeIntoWindowsDeviceAzureADAccount';
import {WindowsDeviceAzureADAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAzureADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDeviceAzureADAccount;
}
