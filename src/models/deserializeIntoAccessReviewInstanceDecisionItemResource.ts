import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemResource: AccessReviewInstanceDecisionItemResource | undefined = {} as AccessReviewInstanceDecisionItemResource) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { accessReviewInstanceDecisionItemResource.displayName = n.getStringValue(); },
        "id": n => { accessReviewInstanceDecisionItemResource.id = n.getStringValue(); },
        "@odata.type": n => { accessReviewInstanceDecisionItemResource.odataType = n.getStringValue(); },
        "type": n => { accessReviewInstanceDecisionItemResource.type = n.getStringValue(); },
    }
}
