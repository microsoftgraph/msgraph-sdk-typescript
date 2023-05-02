import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppPolicyAssignment(writer: SerializationWriter, targetedManagedAppPolicyAssignment: TargetedManagedAppPolicyAssignment | undefined = {} as TargetedManagedAppPolicyAssignment) : void {
        serializeEntity(writer, targetedManagedAppPolicyAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", targetedManagedAppPolicyAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
