import {deserializeIntoNotificationMessageTemplateCollectionResponse} from './deserializeIntoNotificationMessageTemplateCollectionResponse';
import {NotificationMessageTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotificationMessageTemplateCollectionResponse;
}
