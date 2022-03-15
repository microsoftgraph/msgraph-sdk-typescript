import {AccessPackageAssignmentRequestCollectionResponse} from './accessPackageAssignmentRequestCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequestCollectionResponse();
}
