import {SendActivityNotificationToRecipientsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationToRecipientsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendActivityNotificationToRecipientsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendActivityNotificationToRecipientsPostRequestBody();
}
