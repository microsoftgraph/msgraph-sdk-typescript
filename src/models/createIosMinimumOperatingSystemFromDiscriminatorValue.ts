import {deserializeIntoIosMinimumOperatingSystem} from './deserializeIntoIosMinimumOperatingSystem';
import {IosMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosMinimumOperatingSystem;
}
