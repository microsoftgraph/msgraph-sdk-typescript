import { type AccessReviewNotificationRecipientScope } from './accessReviewNotificationRecipientScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientScope(writer: SerializationWriter, accessReviewNotificationRecipientScope: AccessReviewNotificationRecipientScope | undefined = {} as AccessReviewNotificationRecipientScope) : void {
        writer.writeStringValue("@odata.type", accessReviewNotificationRecipientScope.odataType);
        writer.writeAdditionalData(accessReviewNotificationRecipientScope.additionalData);
}
