import { type DeviceEnrollmentConfiguration } from './deviceEnrollmentConfiguration';
import { type EnrollmentConfigurationAssignment } from './enrollmentConfigurationAssignment';
import { serializeEnrollmentConfigurationAssignment } from './serializeEnrollmentConfigurationAssignment';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentConfiguration(writer: SerializationWriter, deviceEnrollmentConfiguration: DeviceEnrollmentConfiguration | undefined = {} as DeviceEnrollmentConfiguration) : void {
        serializeEntity(writer, deviceEnrollmentConfiguration)
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("assignments", deviceEnrollmentConfiguration.assignments, serializeEnrollmentConfigurationAssignment);
        writer.writeDateValue("createdDateTime", deviceEnrollmentConfiguration.createdDateTime);
        writer.writeStringValue("description", deviceEnrollmentConfiguration.description);
        writer.writeStringValue("displayName", deviceEnrollmentConfiguration.displayName);
        writer.writeDateValue("lastModifiedDateTime", deviceEnrollmentConfiguration.lastModifiedDateTime);
        writer.writeNumberValue("priority", deviceEnrollmentConfiguration.priority);
        writer.writeNumberValue("version", deviceEnrollmentConfiguration.version);
}
