import { deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource } from './deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource';
import { type AccessReviewInstanceDecisionItemServicePrincipalResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemServicePrincipalResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource;
}
