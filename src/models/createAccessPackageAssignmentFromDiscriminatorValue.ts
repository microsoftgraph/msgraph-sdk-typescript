import {AccessPackageAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentImpl();
}
