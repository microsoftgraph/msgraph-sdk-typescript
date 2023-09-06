import { deserializeIntoDeviceProtectionOverview } from './deserializeIntoDeviceProtectionOverview';
import { type DeviceProtectionOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceProtectionOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceProtectionOverview;
}
