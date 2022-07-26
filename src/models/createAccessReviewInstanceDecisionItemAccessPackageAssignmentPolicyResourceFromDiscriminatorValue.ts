import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource();
}
