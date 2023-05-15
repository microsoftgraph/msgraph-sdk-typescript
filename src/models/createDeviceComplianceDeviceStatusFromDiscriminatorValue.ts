import {deserializeIntoDeviceComplianceDeviceStatus} from './deserializeIntoDeviceComplianceDeviceStatus';
import {DeviceComplianceDeviceStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceDeviceStatus;
}
