import {deserializeIntoDeviceOperatingSystemSummary} from './deserializeIntoDeviceOperatingSystemSummary';
import {DeviceOperatingSystemSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceOperatingSystemSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceOperatingSystemSummary;
}
