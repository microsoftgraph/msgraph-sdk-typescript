import {deserializeIntoReminder} from './deserializeIntoReminder';
import {Reminder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReminderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReminder;
}
