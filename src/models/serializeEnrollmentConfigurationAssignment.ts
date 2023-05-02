import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEnrollmentConfigurationAssignment(writer: SerializationWriter, enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {} as EnrollmentConfigurationAssignment) : void {
        serializeEntity(writer, enrollmentConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", enrollmentConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
