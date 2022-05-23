import {AccessPackageAssignmentPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentPolicyCollectionResponseImpl();
}
