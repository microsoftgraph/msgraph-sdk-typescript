import {EnrollmentConfigurationAssignment} from '../../../../models/enrollmentConfigurationAssignment';
import {serializeEnrollmentConfigurationAssignment} from '../../../../models/serializeEnrollmentConfigurationAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("enrollmentConfigurationAssignments", assignPostRequestBody.enrollmentConfigurationAssignments, serializeEnrollmentConfigurationAssignment);
        writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
