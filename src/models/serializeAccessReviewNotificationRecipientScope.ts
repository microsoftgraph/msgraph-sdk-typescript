import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientScope(accessReviewNotificationRecipientScope: AccessReviewNotificationRecipientScope | undefined = {} as AccessReviewNotificationRecipientScope, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", accessReviewNotificationRecipientScope.odataType);
        writer.writeAdditionalData(accessReviewNotificationRecipientScope.additionalData);
}
