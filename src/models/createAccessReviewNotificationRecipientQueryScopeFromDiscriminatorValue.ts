import {AccessReviewNotificationRecipientQueryScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientQueryScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewNotificationRecipientQueryScope();
}
