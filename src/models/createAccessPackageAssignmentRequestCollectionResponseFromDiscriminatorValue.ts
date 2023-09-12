import { deserializeIntoAccessPackageAssignmentRequestCollectionResponse } from './deserializeIntoAccessPackageAssignmentRequestCollectionResponse';
import { type AccessPackageAssignmentRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestCollectionResponse;
}
