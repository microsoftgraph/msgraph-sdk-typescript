import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource, AccessReviewInstanceDecisionItemAzureRoleResource, AccessReviewInstanceDecisionItemResource, AccessReviewInstanceDecisionItemServicePrincipalResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource":
                    return new AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource();
                case "#microsoft.graph.accessReviewInstanceDecisionItemAzureRoleResource":
                    return new AccessReviewInstanceDecisionItemAzureRoleResource();
                case "#microsoft.graph.accessReviewInstanceDecisionItemServicePrincipalResource":
                    return new AccessReviewInstanceDecisionItemServicePrincipalResource();
            }
        }
    }
    return new AccessReviewInstanceDecisionItemResource();
}
