import { type AccessReviewApplyAction } from './accessReviewApplyAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewApplyAction(accessReviewApplyAction: AccessReviewApplyAction | undefined = {} as AccessReviewApplyAction) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewApplyAction.odataType = n.getStringValue(); },
    }
}
