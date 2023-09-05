import { deserializeIntoAccessPackageAssignmentPolicy } from './deserializeIntoAccessPackageAssignmentPolicy';
import { type AccessPackageAssignmentPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentPolicy;
}
