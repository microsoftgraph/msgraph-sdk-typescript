import {AccessReviewNotificationRecipientQueryScope} from './accessReviewNotificationRecipientQueryScope';
import {deserializeIntoAccessReviewNotificationRecipientScope} from './deserializeIntoAccessReviewNotificationRecipientScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientQueryScope(accessReviewNotificationRecipientQueryScope: AccessReviewNotificationRecipientQueryScope | undefined = {} as AccessReviewNotificationRecipientQueryScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewNotificationRecipientScope(accessReviewNotificationRecipientQueryScope),
        "query": n => { accessReviewNotificationRecipientQueryScope.query = n.getStringValue(); },
        "queryRoot": n => { accessReviewNotificationRecipientQueryScope.queryRoot = n.getStringValue(); },
        "queryType": n => { accessReviewNotificationRecipientQueryScope.queryType = n.getStringValue(); },
    }
}
