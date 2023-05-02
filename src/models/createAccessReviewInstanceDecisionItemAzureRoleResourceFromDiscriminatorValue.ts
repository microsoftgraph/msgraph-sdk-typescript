import {deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource} from './deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource';
import {AccessReviewInstanceDecisionItemAzureRoleResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemAzureRoleResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource;
}
