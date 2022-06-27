import {AccessReviewNotificationRecipientQueryScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientQueryScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewNotificationRecipientQueryScopeImpl();
}
