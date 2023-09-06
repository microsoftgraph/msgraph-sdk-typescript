import { deserializeIntoWindowsMinimumOperatingSystem } from './deserializeIntoWindowsMinimumOperatingSystem';
import { type WindowsMinimumOperatingSystem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMinimumOperatingSystem;
}
