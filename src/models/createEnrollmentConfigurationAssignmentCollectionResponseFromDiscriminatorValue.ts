import {deserializeIntoEnrollmentConfigurationAssignmentCollectionResponse} from './deserializeIntoEnrollmentConfigurationAssignmentCollectionResponse';
import {EnrollmentConfigurationAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnrollmentConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEnrollmentConfigurationAssignmentCollectionResponse;
}
