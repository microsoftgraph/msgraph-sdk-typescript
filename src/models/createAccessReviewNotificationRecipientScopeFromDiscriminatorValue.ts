import {AccessReviewNotificationRecipientScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewNotificationRecipientScopeImpl();
}
