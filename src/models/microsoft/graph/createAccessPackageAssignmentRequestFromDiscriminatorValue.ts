import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequest();
}
