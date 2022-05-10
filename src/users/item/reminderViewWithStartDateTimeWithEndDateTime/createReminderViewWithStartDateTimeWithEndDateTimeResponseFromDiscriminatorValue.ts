import {ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl();
}
