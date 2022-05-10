import {EnrollmentConfigurationAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnrollmentConfigurationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : EnrollmentConfigurationAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EnrollmentConfigurationAssignmentImpl();
}
