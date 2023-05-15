import {deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource';
import {deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource} from './deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource';
import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource} from './deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource';
import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource, AccessReviewInstanceDecisionItemAzureRoleResource, AccessReviewInstanceDecisionItemResource, AccessReviewInstanceDecisionItemServicePrincipalResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource":
                    return deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource;
                case "#microsoft.graph.accessReviewInstanceDecisionItemAzureRoleResource":
                    return deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource;
                case "#microsoft.graph.accessReviewInstanceDecisionItemServicePrincipalResource":
                    return deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource;
            }
        }
    }
    return deserializeIntoAccessReviewInstanceDecisionItemResource;
}
