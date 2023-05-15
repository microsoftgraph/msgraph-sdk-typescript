import {AccessReviewInstanceDecisionItemAzureRoleResource} from './accessReviewInstanceDecisionItemAzureRoleResource';
import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource(accessReviewInstanceDecisionItemAzureRoleResource: AccessReviewInstanceDecisionItemAzureRoleResource | undefined = {} as AccessReviewInstanceDecisionItemAzureRoleResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemAzureRoleResource),
        "scope": n => { accessReviewInstanceDecisionItemAzureRoleResource.scope = n.getObjectValue<AccessReviewInstanceDecisionItemResource>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
    }
}
