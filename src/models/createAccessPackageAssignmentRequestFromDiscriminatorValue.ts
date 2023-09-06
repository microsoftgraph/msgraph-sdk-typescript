import { deserializeIntoAccessPackageAssignmentRequest } from './deserializeIntoAccessPackageAssignmentRequest';
import { type AccessPackageAssignmentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequest;
}
