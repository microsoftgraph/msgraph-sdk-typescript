import {AccessPackageAssignmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentRequestImpl();
}
