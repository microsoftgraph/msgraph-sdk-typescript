import { deserializeIntoIosMinimumOperatingSystem } from './deserializeIntoIosMinimumOperatingSystem';
import { type IosMinimumOperatingSystem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosMinimumOperatingSystem;
}
