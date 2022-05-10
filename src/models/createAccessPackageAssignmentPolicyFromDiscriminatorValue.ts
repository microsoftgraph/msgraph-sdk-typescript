import {AccessPackageAssignmentPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAssignmentPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAssignmentPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAssignmentPolicyImpl();
}
