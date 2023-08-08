import type {AccessReviewScope} from './accessReviewScope';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScope(accessReviewScope: AccessReviewScope | undefined = {} as AccessReviewScope) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewScope.odataType = n.getStringValue(); },
    }
}
