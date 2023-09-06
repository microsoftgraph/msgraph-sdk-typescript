import { type AccessReviewNotificationRecipientItem } from './accessReviewNotificationRecipientItem';
import { type AccessReviewNotificationRecipientScope } from './accessReviewNotificationRecipientScope';
import { serializeAccessReviewNotificationRecipientScope } from './serializeAccessReviewNotificationRecipientScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientItem(writer: SerializationWriter, accessReviewNotificationRecipientItem: AccessReviewNotificationRecipientItem | undefined = {} as AccessReviewNotificationRecipientItem) : void {
        writer.writeObjectValue<AccessReviewNotificationRecipientScope>("notificationRecipientScope", accessReviewNotificationRecipientItem.notificationRecipientScope, serializeAccessReviewNotificationRecipientScope);
        writer.writeStringValue("notificationTemplateType", accessReviewNotificationRecipientItem.notificationTemplateType);
        writer.writeStringValue("@odata.type", accessReviewNotificationRecipientItem.odataType);
        writer.writeAdditionalData(accessReviewNotificationRecipientItem.additionalData);
}
