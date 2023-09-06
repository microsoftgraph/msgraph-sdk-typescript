import { createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue } from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type DeviceConfigurationAssignment } from './deviceConfigurationAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationAssignment(deviceConfigurationAssignment: DeviceConfigurationAssignment | undefined = {} as DeviceConfigurationAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationAssignment),
        "target": n => { deviceConfigurationAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
