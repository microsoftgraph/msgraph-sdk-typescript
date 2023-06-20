import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewApplyAction(accessReviewApplyAction: AccessReviewApplyAction | undefined = {} as AccessReviewApplyAction, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", accessReviewApplyAction.odataType);
        writer.writeAdditionalData(accessReviewApplyAction.additionalData);
}
