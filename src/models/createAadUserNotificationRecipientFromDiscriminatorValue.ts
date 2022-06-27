import {AadUserNotificationRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : AadUserNotificationRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AadUserNotificationRecipientImpl();
}
