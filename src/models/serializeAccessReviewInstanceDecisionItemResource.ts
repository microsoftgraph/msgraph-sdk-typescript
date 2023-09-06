import { type AccessReviewInstanceDecisionItemResource } from './accessReviewInstanceDecisionItemResource';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemResource(writer: SerializationWriter, accessReviewInstanceDecisionItemResource: AccessReviewInstanceDecisionItemResource | undefined = {} as AccessReviewInstanceDecisionItemResource) : void {
        writer.writeStringValue("displayName", accessReviewInstanceDecisionItemResource.displayName);
        writer.writeStringValue("id", accessReviewInstanceDecisionItemResource.id);
        writer.writeStringValue("@odata.type", accessReviewInstanceDecisionItemResource.odataType);
        writer.writeStringValue("type", accessReviewInstanceDecisionItemResource.type);
        writer.writeAdditionalData(accessReviewInstanceDecisionItemResource.additionalData);
}
