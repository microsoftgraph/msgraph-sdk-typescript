import {AccessReviewInstanceDecisionItemAzureRoleResource} from './accessReviewInstanceDecisionItemAzureRoleResource';
import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemAzureRoleResource(accessReviewInstanceDecisionItemAzureRoleResource: AccessReviewInstanceDecisionItemAzureRoleResource | undefined = {} as AccessReviewInstanceDecisionItemAzureRoleResource, writer: SerializationWriter) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemAzureRoleResource)
        writer.writeObjectValue<AccessReviewInstanceDecisionItemResource>("scope", accessReviewInstanceDecisionItemAzureRoleResource.scope, serializeAccessReviewInstanceDecisionItemResource);
}
