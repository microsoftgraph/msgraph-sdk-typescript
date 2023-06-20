import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationAssignment(deviceConfigurationAssignment: DeviceConfigurationAssignment | undefined = {} as DeviceConfigurationAssignment, writer: SerializationWriter) : void {
        serializeEntity(writer, deviceConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", deviceConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
