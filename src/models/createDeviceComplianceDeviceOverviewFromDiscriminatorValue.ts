import { deserializeIntoDeviceComplianceDeviceOverview } from './deserializeIntoDeviceComplianceDeviceOverview';
import { type DeviceComplianceDeviceOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceDeviceOverview;
}
