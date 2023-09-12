import { deserializeIntoDeviceCompliancePolicyAssignment } from './deserializeIntoDeviceCompliancePolicyAssignment';
import { type DeviceCompliancePolicyAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyAssignment;
}
