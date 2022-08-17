import {AccessReviewInstanceDecisionItemServicePrincipalResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemServicePrincipalResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemServicePrincipalResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemServicePrincipalResource();
}
