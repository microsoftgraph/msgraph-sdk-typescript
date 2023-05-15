import {deserializeIntoAndroidMinimumOperatingSystem} from './deserializeIntoAndroidMinimumOperatingSystem';
import {AndroidMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidMinimumOperatingSystem;
}
