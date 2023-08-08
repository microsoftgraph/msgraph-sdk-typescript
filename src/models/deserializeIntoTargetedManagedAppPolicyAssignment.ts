import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import type {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppPolicyAssignment(targetedManagedAppPolicyAssignment: TargetedManagedAppPolicyAssignment | undefined = {} as TargetedManagedAppPolicyAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(targetedManagedAppPolicyAssignment),
        "target": n => { targetedManagedAppPolicyAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
