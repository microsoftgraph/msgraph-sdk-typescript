import {AccessReviewNotificationRecipientItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewNotificationRecipientItemCollectionResponse();
}
