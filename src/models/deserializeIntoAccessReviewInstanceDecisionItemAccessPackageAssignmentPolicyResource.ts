import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource';
import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource: AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource | undefined = {} as AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource),
        "accessPackageDisplayName": n => { accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageDisplayName = n.getStringValue(); },
        "accessPackageId": n => { accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageId = n.getStringValue(); },
    }
}
