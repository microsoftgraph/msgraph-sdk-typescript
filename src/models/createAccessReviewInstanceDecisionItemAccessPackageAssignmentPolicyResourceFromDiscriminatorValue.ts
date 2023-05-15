import {deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource';
import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource;
}
