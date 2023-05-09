import {deserializeIntoSendActivityNotificationPostRequestBody} from './deserializeIntoSendActivityNotificationPostRequestBody';
import {SendActivityNotificationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSendActivityNotificationPostRequestBody;
}
