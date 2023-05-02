import {deserializeIntoAccessReviewNotificationRecipientQueryScope} from './deserializeIntoAccessReviewNotificationRecipientQueryScope';
import {AccessReviewNotificationRecipientQueryScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewNotificationRecipientQueryScope;
}
