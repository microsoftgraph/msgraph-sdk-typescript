import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import type {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentConfigurationAssignment(enrollmentConfigurationAssignment: EnrollmentConfigurationAssignment | undefined = {} as EnrollmentConfigurationAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(enrollmentConfigurationAssignment),
        "target": n => { enrollmentConfigurationAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
