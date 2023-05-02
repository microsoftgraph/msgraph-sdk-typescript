import {AccessReviewInstanceDecisionItemServicePrincipalResource} from './accessReviewInstanceDecisionItemServicePrincipalResource';
import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource(accessReviewInstanceDecisionItemServicePrincipalResource: AccessReviewInstanceDecisionItemServicePrincipalResource | undefined = {} as AccessReviewInstanceDecisionItemServicePrincipalResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemServicePrincipalResource),
        "appId": n => { accessReviewInstanceDecisionItemServicePrincipalResource.appId = n.getStringValue(); },
    }
}
