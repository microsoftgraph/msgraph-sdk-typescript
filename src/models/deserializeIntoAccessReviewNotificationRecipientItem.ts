import { type AccessReviewNotificationRecipientItem } from './accessReviewNotificationRecipientItem';
import { type AccessReviewNotificationRecipientScope } from './accessReviewNotificationRecipientScope';
import { createAccessReviewNotificationRecipientScopeFromDiscriminatorValue } from './createAccessReviewNotificationRecipientScopeFromDiscriminatorValue';
import { serializeAccessReviewNotificationRecipientScope } from './serializeAccessReviewNotificationRecipientScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientItem(accessReviewNotificationRecipientItem: AccessReviewNotificationRecipientItem | undefined = {} as AccessReviewNotificationRecipientItem) : Record<string, (node: ParseNode) => void> {
    return {
        "notificationRecipientScope": n => { accessReviewNotificationRecipientItem.notificationRecipientScope = n.getObjectValue<AccessReviewNotificationRecipientScope>(createAccessReviewNotificationRecipientScopeFromDiscriminatorValue); },
        "notificationTemplateType": n => { accessReviewNotificationRecipientItem.notificationTemplateType = n.getStringValue(); },
        "@odata.type": n => { accessReviewNotificationRecipientItem.odataType = n.getStringValue(); },
    }
}
