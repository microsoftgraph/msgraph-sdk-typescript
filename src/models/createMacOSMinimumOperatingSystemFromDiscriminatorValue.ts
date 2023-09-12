import { deserializeIntoMacOSMinimumOperatingSystem } from './deserializeIntoMacOSMinimumOperatingSystem';
import { type MacOSMinimumOperatingSystem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSMinimumOperatingSystem;
}
