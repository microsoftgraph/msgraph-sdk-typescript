import {AccessReviewNotificationRecipientQueryScope} from './accessReviewNotificationRecipientQueryScope';
import {serializeAccessReviewNotificationRecipientScope} from './serializeAccessReviewNotificationRecipientScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientQueryScope(accessReviewNotificationRecipientQueryScope: AccessReviewNotificationRecipientQueryScope | undefined = {} as AccessReviewNotificationRecipientQueryScope, writer: SerializationWriter) : void {
        serializeAccessReviewNotificationRecipientScope(writer, accessReviewNotificationRecipientQueryScope)
        writer.writeStringValue("query", accessReviewNotificationRecipientQueryScope.query);
        writer.writeStringValue("queryRoot", accessReviewNotificationRecipientQueryScope.queryRoot);
        writer.writeStringValue("queryType", accessReviewNotificationRecipientQueryScope.queryType);
}
