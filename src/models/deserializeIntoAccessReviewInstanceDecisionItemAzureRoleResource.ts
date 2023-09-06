import { type AccessReviewInstanceDecisionItemAzureRoleResource } from './accessReviewInstanceDecisionItemAzureRoleResource';
import { type AccessReviewInstanceDecisionItemResource } from './accessReviewInstanceDecisionItemResource';
import { createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue } from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import { deserializeIntoAccessReviewInstanceDecisionItemResource } from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import { serializeAccessReviewInstanceDecisionItemResource } from './serializeAccessReviewInstanceDecisionItemResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource(accessReviewInstanceDecisionItemAzureRoleResource: AccessReviewInstanceDecisionItemAzureRoleResource | undefined = {} as AccessReviewInstanceDecisionItemAzureRoleResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemAzureRoleResource),
        "scope": n => { accessReviewInstanceDecisionItemAzureRoleResource.scope = n.getObjectValue<AccessReviewInstanceDecisionItemResource>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
    }
}
