import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type DeviceConfigurationAssignment } from './deviceConfigurationAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationAssignment(writer: SerializationWriter, deviceConfigurationAssignment: DeviceConfigurationAssignment | undefined = {} as DeviceConfigurationAssignment) : void {
        serializeEntity(writer, deviceConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
