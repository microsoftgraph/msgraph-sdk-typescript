import {deserializeIntoDeviceProtectionOverview} from './deserializeIntoDeviceProtectionOverview';
import {DeviceProtectionOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceProtectionOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceProtectionOverview;
}
