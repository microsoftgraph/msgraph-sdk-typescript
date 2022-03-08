import {NotificationMessageTemplateCollectionResponse} from './notificationMessageTemplateCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotificationMessageTemplateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotificationMessageTemplateCollectionResponse();
}
