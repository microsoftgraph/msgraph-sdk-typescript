import { deserializeIntoDeviceComplianceUserStatus } from './deserializeIntoDeviceComplianceUserStatus';
import { type DeviceComplianceUserStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceUserStatus;
}
