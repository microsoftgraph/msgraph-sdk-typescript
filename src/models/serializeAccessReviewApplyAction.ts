import { type AccessReviewApplyAction } from './accessReviewApplyAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewApplyAction(writer: SerializationWriter, accessReviewApplyAction: AccessReviewApplyAction | undefined = {} as AccessReviewApplyAction) : void {
        writer.writeStringValue("@odata.type", accessReviewApplyAction.odataType);
        writer.writeAdditionalData(accessReviewApplyAction.additionalData);
}
