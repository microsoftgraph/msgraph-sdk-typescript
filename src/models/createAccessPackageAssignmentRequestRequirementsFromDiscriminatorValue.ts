import { deserializeIntoAccessPackageAssignmentRequestRequirements } from './deserializeIntoAccessPackageAssignmentRequestRequirements';
import { type AccessPackageAssignmentRequestRequirements } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestRequirements;
}
