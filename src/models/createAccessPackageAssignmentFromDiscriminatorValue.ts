import {deserializeIntoAccessPackageAssignment} from './deserializeIntoAccessPackageAssignment';
import {AccessPackageAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageAssignment;
}
