import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type TargetedManagedAppPolicyAssignment } from './targetedManagedAppPolicyAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppPolicyAssignment(writer: SerializationWriter, targetedManagedAppPolicyAssignment: TargetedManagedAppPolicyAssignment | undefined = {} as TargetedManagedAppPolicyAssignment) : void {
        serializeEntity(writer, targetedManagedAppPolicyAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", targetedManagedAppPolicyAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
