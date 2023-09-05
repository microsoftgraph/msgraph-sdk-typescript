import { deserializeIntoDeviceComplianceUserOverview } from './deserializeIntoDeviceComplianceUserOverview';
import { type DeviceComplianceUserOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceUserOverview;
}
