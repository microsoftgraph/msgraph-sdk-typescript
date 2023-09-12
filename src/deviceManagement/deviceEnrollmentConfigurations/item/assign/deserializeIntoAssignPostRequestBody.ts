import { createEnrollmentConfigurationAssignmentFromDiscriminatorValue } from '../../../../models/createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import { type EnrollmentConfigurationAssignment } from '../../../../models/enrollmentConfigurationAssignment';
import { serializeEnrollmentConfigurationAssignment } from '../../../../models/serializeEnrollmentConfigurationAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "enrollmentConfigurationAssignments": n => { assignPostRequestBody.enrollmentConfigurationAssignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignment>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
    }
}
