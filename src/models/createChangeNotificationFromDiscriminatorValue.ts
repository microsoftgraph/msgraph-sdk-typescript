import {ChangeNotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeNotification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeNotification();
}
