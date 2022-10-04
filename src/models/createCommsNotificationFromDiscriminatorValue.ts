import {CommsNotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsNotification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommsNotification();
}
