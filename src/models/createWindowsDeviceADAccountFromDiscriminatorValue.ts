import {deserializeIntoWindowsDeviceADAccount} from './deserializeIntoWindowsDeviceADAccount';
import {WindowsDeviceADAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDeviceADAccount;
}
