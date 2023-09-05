import { deserializeIntoEnrollmentConfigurationAssignment } from './deserializeIntoEnrollmentConfigurationAssignment';
import { type EnrollmentConfigurationAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEnrollmentConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEnrollmentConfigurationAssignment;
}
