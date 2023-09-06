import { deserializeIntoDeviceOperatingSystemSummary } from './deserializeIntoDeviceOperatingSystemSummary';
import { type DeviceOperatingSystemSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceOperatingSystemSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceOperatingSystemSummary;
}
