import {EnrollmentConfigurationAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnrollmentConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EnrollmentConfigurationAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EnrollmentConfigurationAssignmentCollectionResponseImpl();
}
