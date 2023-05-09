import {deserializeIntoWindowsMinimumOperatingSystem} from './deserializeIntoWindowsMinimumOperatingSystem';
import {WindowsMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMinimumOperatingSystem;
}
