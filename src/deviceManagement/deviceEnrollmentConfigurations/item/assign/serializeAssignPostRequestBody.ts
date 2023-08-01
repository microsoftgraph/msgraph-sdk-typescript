import type {EnrollmentConfigurationAssignment} from '../../../../models/enrollmentConfigurationAssignment';
import {serializeEnrollmentConfigurationAssignment} from '../../../../models/serializeEnrollmentConfigurationAssignment';
import type {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("enrollmentConfigurationAssignments", assignPostRequestBody.enrollmentConfigurationAssignments, serializeEnrollmentConfigurationAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
