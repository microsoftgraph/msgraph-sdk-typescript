import {WindowsMinimumOperatingSystemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMinimumOperatingSystemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMinimumOperatingSystemImpl();
}
