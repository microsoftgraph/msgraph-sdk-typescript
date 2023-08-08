import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from './createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import type {EnrollmentConfigurationAssignmentCollectionResponse} from './enrollmentConfigurationAssignmentCollectionResponse';
import {serializeEnrollmentConfigurationAssignment} from './serializeEnrollmentConfigurationAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentConfigurationAssignmentCollectionResponse(enrollmentConfigurationAssignmentCollectionResponse: EnrollmentConfigurationAssignmentCollectionResponse | undefined = {} as EnrollmentConfigurationAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(enrollmentConfigurationAssignmentCollectionResponse),
        "value": n => { enrollmentConfigurationAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignment>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
    }
}
