import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewApplyAction(accessReviewApplyAction: AccessReviewApplyAction | undefined = {} as AccessReviewApplyAction) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewApplyAction.odataType = n.getStringValue(); },
    }
}
