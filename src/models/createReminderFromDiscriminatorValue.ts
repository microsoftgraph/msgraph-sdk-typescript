import {ReminderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReminderFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReminderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReminderImpl();
}
