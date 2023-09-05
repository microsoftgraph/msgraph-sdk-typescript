import { createEnrollmentConfigurationAssignmentFromDiscriminatorValue } from './createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceEnrollmentConfiguration } from './deviceEnrollmentConfiguration';
import { type EnrollmentConfigurationAssignment } from './enrollmentConfigurationAssignment';
import { serializeEnrollmentConfigurationAssignment } from './serializeEnrollmentConfigurationAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentConfiguration: DeviceEnrollmentConfiguration | undefined = {} as DeviceEnrollmentConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceEnrollmentConfiguration),
        "assignments": n => { deviceEnrollmentConfiguration.assignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignment>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
        "createdDateTime": n => { deviceEnrollmentConfiguration.createdDateTime = n.getDateValue(); },
        "description": n => { deviceEnrollmentConfiguration.description = n.getStringValue(); },
        "displayName": n => { deviceEnrollmentConfiguration.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { deviceEnrollmentConfiguration.lastModifiedDateTime = n.getDateValue(); },
        "priority": n => { deviceEnrollmentConfiguration.priority = n.getNumberValue(); },
        "version": n => { deviceEnrollmentConfiguration.version = n.getNumberValue(); },
    }
}
