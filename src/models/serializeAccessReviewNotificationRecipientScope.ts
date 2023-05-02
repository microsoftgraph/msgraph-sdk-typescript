import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientScope(writer: SerializationWriter, accessReviewNotificationRecipientScope: AccessReviewNotificationRecipientScope | undefined = {} as AccessReviewNotificationRecipientScope) : void {
        writer.writeStringValue("@odata.type", accessReviewNotificationRecipientScope.odataType);
        writer.writeAdditionalData(accessReviewNotificationRecipientScope.additionalData);
}
