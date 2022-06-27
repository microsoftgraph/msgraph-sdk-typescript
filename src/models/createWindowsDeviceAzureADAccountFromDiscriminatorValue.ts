import {WindowsDeviceAzureADAccountImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAzureADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceAzureADAccountImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDeviceAzureADAccountImpl();
}
