import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceImpl, AccessReviewInstanceDecisionItemAzureRoleResourceImpl, AccessReviewInstanceDecisionItemResourceImpl, AccessReviewInstanceDecisionItemServicePrincipalResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource":
                    return new AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceImpl();
                case "#microsoft.graph.accessReviewInstanceDecisionItemAzureRoleResource":
                    return new AccessReviewInstanceDecisionItemAzureRoleResourceImpl();
                case "#microsoft.graph.accessReviewInstanceDecisionItemServicePrincipalResource":
                    return new AccessReviewInstanceDecisionItemServicePrincipalResourceImpl();
            }
        }
    }
    return new AccessReviewInstanceDecisionItemResourceImpl();
}
