import {SendActivityNotificationPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendActivityNotificationPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendActivityNotificationPostRequestBodyImpl();
}
