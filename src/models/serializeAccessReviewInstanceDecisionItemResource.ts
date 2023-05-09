import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemResource(writer: SerializationWriter, accessReviewInstanceDecisionItemResource: AccessReviewInstanceDecisionItemResource | undefined = {} as AccessReviewInstanceDecisionItemResource) : void {
        writer.writeStringValue("displayName", accessReviewInstanceDecisionItemResource.displayName);
        writer.writeStringValue("id", accessReviewInstanceDecisionItemResource.id);
        writer.writeStringValue("@odata.type", accessReviewInstanceDecisionItemResource.odataType);
        writer.writeStringValue("type", accessReviewInstanceDecisionItemResource.type);
        writer.writeAdditionalData(accessReviewInstanceDecisionItemResource.additionalData);
}
