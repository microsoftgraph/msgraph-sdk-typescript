import {SendActivityNotificationRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SendActivityNotificationRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendActivityNotificationRequestBodyImpl();
}
