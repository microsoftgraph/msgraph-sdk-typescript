import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationAssignment(writer: SerializationWriter, deviceConfigurationAssignment: DeviceConfigurationAssignment | undefined = {} as DeviceConfigurationAssignment) : void {
        serializeEntity(writer, deviceConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
