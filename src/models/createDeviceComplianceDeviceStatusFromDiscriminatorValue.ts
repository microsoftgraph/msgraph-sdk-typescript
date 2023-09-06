import { deserializeIntoDeviceComplianceDeviceStatus } from './deserializeIntoDeviceComplianceDeviceStatus';
import { type DeviceComplianceDeviceStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceDeviceStatus;
}
