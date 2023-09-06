import { deserializeIntoAccessPackageAssignmentPolicyCollectionResponse } from './deserializeIntoAccessPackageAssignmentPolicyCollectionResponse';
import { type AccessPackageAssignmentPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentPolicyCollectionResponse;
}
