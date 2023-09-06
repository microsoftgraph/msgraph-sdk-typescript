import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { type EnrollmentConfigurationAssignment } from './enrollmentConfigurationAssignment';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEnrollmentConfigurationAssignment(writer: SerializationWriter, enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {} as EnrollmentConfigurationAssignment) : void {
        serializeEntity(writer, enrollmentConfigurationAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", enrollmentConfigurationAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
