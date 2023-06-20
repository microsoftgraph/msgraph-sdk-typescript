import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {serializeAccessReviewNotificationRecipientScope} from './serializeAccessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientItem(accessReviewNotificationRecipientItem: AccessReviewNotificationRecipientItem | undefined = {} as AccessReviewNotificationRecipientItem, writer: SerializationWriter) : void {
        writer.writeObjectValue<AccessReviewNotificationRecipientScope>("notificationRecipientScope", accessReviewNotificationRecipientItem.notificationRecipientScope, serializeAccessReviewNotificationRecipientScope);
        writer.writeStringValue("notificationTemplateType", accessReviewNotificationRecipientItem.notificationTemplateType);
        writer.writeStringValue("@odata.type", accessReviewNotificationRecipientItem.odataType);
        writer.writeAdditionalData(accessReviewNotificationRecipientItem.additionalData);
}
