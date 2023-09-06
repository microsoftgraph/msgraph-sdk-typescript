import { type AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource } from './accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource';
import { deserializeIntoAccessReviewInstanceDecisionItemResource } from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource: AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource | undefined = {} as AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource),
        "accessPackageDisplayName": n => { accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageDisplayName = n.getStringValue(); },
        "accessPackageId": n => { accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageId = n.getStringValue(); },
    }
}
