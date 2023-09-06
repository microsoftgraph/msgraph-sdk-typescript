import { deserializeIntoAccessPackageAssignmentCollectionResponse } from './deserializeIntoAccessPackageAssignmentCollectionResponse';
import { type AccessPackageAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentCollectionResponse;
}
