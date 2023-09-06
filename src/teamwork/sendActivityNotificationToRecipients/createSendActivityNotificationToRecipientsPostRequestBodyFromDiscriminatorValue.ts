import { deserializeIntoSendActivityNotificationToRecipientsPostRequestBody } from './deserializeIntoSendActivityNotificationToRecipientsPostRequestBody';
import { type SendActivityNotificationToRecipientsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationToRecipientsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSendActivityNotificationToRecipientsPostRequestBody;
}
