import { deserializeIntoWindowsDeviceADAccount } from './deserializeIntoWindowsDeviceADAccount';
import { type WindowsDeviceADAccount } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsDeviceADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDeviceADAccount;
}
