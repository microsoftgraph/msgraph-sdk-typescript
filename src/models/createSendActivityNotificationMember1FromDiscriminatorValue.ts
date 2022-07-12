import {SendActivityNotificationMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSendActivityNotificationMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SendActivityNotificationMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SendActivityNotificationMember1();
}
