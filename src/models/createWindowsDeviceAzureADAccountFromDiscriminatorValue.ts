import {WindowsDeviceAzureADAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAzureADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceAzureADAccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDeviceAzureADAccount();
}
