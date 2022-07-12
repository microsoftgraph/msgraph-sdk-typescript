import {WindowsMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMinimumOperatingSystem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMinimumOperatingSystem();
}
