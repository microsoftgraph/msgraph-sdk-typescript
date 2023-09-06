import { deserializeIntoNotificationMessageTemplate } from './deserializeIntoNotificationMessageTemplate';
import { type NotificationMessageTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNotificationMessageTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotificationMessageTemplate;
}
