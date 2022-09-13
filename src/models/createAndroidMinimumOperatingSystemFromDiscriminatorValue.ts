import {AndroidMinimumOperatingSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidMinimumOperatingSystem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidMinimumOperatingSystem();
}
