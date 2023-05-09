import {deserializeIntoNotificationMessageTemplate} from './deserializeIntoNotificationMessageTemplate';
import {NotificationMessageTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotificationMessageTemplate;
}
