import {NotificationMessageTemplateCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotificationMessageTemplateCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotificationMessageTemplateCollectionResponseImpl();
}
