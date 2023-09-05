import { type EnrollmentConfigurationAssignment } from './enrollmentConfigurationAssignment';
import { type EnrollmentConfigurationAssignmentCollectionResponse } from './enrollmentConfigurationAssignmentCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEnrollmentConfigurationAssignment } from './serializeEnrollmentConfigurationAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEnrollmentConfigurationAssignmentCollectionResponse(writer: SerializationWriter, enrollmentConfigurationAssignmentCollectionResponse: EnrollmentConfigurationAssignmentCollectionResponse | undefined = {} as EnrollmentConfigurationAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, enrollmentConfigurationAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("value", enrollmentConfigurationAssignmentCollectionResponse.value, serializeEnrollmentConfigurationAssignment);
}
