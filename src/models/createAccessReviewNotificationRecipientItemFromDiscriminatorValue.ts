import {deserializeIntoAccessReviewNotificationRecipientItem} from './deserializeIntoAccessReviewNotificationRecipientItem';
import {AccessReviewNotificationRecipientItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewNotificationRecipientItem;
}
