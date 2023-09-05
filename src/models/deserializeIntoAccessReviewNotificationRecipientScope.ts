import { type AccessReviewNotificationRecipientScope } from './accessReviewNotificationRecipientScope';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientScope(accessReviewNotificationRecipientScope: AccessReviewNotificationRecipientScope | undefined = {} as AccessReviewNotificationRecipientScope) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewNotificationRecipientScope.odataType = n.getStringValue(); },
    }
}
