import {DeviceComplianceDeviceStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceDeviceStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceDeviceStatusImpl();
}
