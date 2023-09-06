import { createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue } from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type DeviceCompliancePolicyAssignment } from './deviceCompliancePolicyAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyAssignment(deviceCompliancePolicyAssignment: DeviceCompliancePolicyAssignment | undefined = {} as DeviceCompliancePolicyAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicyAssignment),
        "target": n => { deviceCompliancePolicyAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
