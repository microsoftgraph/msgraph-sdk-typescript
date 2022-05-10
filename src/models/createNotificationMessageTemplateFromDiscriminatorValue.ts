import {NotificationMessageTemplateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotificationMessageTemplateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotificationMessageTemplateImpl();
}
