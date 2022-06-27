import {WindowsDeviceADAccountImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceADAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceADAccountImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDeviceADAccountImpl();
}
