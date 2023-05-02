import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientScope(accessReviewNotificationRecipientScope: AccessReviewNotificationRecipientScope | undefined = {} as AccessReviewNotificationRecipientScope) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewNotificationRecipientScope.odataType = n.getStringValue(); },
    }
}
