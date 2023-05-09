import {deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource} from './deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource';
import {AccessReviewInstanceDecisionItemServicePrincipalResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemServicePrincipalResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource;
}
