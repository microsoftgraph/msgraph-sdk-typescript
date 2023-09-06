import { deserializeIntoAccessReviewNotificationRecipientQueryScope } from './deserializeIntoAccessReviewNotificationRecipientQueryScope';
import { type AccessReviewNotificationRecipientQueryScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewNotificationRecipientQueryScope;
}
