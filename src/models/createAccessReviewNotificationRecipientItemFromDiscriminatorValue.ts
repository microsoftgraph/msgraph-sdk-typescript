import { deserializeIntoAccessReviewNotificationRecipientItem } from './deserializeIntoAccessReviewNotificationRecipientItem';
import { type AccessReviewNotificationRecipientItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewNotificationRecipientItem;
}
