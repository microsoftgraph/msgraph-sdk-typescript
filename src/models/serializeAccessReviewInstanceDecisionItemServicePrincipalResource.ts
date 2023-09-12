import { type AccessReviewInstanceDecisionItemServicePrincipalResource } from './accessReviewInstanceDecisionItemServicePrincipalResource';
import { serializeAccessReviewInstanceDecisionItemResource } from './serializeAccessReviewInstanceDecisionItemResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemServicePrincipalResource(writer: SerializationWriter, accessReviewInstanceDecisionItemServicePrincipalResource: AccessReviewInstanceDecisionItemServicePrincipalResource | undefined = {} as AccessReviewInstanceDecisionItemServicePrincipalResource) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemServicePrincipalResource)
        writer.writeStringValue("appId", accessReviewInstanceDecisionItemServicePrincipalResource.appId);
}
