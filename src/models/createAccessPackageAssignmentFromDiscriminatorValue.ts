import { deserializeIntoAccessPackageAssignment } from './deserializeIntoAccessPackageAssignment';
import { type AccessPackageAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignment;
}
