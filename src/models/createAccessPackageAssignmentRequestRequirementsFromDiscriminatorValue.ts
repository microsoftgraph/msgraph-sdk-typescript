import {deserializeIntoAccessPackageAssignmentRequestRequirements} from './deserializeIntoAccessPackageAssignmentRequestRequirements';
import {AccessPackageAssignmentRequestRequirements} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignmentRequestRequirements;
}
