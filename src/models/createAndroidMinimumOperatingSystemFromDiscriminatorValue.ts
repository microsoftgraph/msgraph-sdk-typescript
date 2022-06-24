import {AndroidMinimumOperatingSystemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidMinimumOperatingSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidMinimumOperatingSystemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidMinimumOperatingSystemImpl();
}
