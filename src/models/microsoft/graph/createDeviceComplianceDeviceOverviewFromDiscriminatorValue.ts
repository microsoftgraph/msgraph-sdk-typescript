import {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceDeviceOverview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceDeviceOverview();
}
