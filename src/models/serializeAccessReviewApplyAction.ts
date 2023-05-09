import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewApplyAction(writer: SerializationWriter, accessReviewApplyAction: AccessReviewApplyAction | undefined = {} as AccessReviewApplyAction) : void {
        writer.writeStringValue("@odata.type", accessReviewApplyAction.odataType);
        writer.writeAdditionalData(accessReviewApplyAction.additionalData);
}
