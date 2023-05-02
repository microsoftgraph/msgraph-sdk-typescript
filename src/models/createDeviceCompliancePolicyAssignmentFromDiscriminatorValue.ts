import {deserializeIntoDeviceCompliancePolicyAssignment} from './deserializeIntoDeviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyAssignment;
}
