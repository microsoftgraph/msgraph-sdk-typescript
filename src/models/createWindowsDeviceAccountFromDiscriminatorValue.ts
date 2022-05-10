import {WindowsDeviceAccountImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceAccountImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDeviceAccountImpl();
}
