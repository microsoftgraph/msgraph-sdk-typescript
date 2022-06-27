import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceImpl();
}
