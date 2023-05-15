import {deserializeIntoAadUserNotificationRecipient} from './deserializeIntoAadUserNotificationRecipient';
import {AadUserNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAadUserNotificationRecipient;
}
