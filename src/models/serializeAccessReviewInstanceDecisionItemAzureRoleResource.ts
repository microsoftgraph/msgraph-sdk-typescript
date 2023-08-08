import type {AccessReviewInstanceDecisionItemAzureRoleResource} from './accessReviewInstanceDecisionItemAzureRoleResource';
import type {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemAzureRoleResource(writer: SerializationWriter, accessReviewInstanceDecisionItemAzureRoleResource: AccessReviewInstanceDecisionItemAzureRoleResource | undefined = {} as AccessReviewInstanceDecisionItemAzureRoleResource) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemAzureRoleResource)
        writer.writeObjectValue<AccessReviewInstanceDecisionItemResource>("scope", accessReviewInstanceDecisionItemAzureRoleResource.scope, serializeAccessReviewInstanceDecisionItemResource);
}
