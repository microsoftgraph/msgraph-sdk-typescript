import {DeviceComplianceDeviceOverviewImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceDeviceOverviewImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceDeviceOverviewImpl();
}
