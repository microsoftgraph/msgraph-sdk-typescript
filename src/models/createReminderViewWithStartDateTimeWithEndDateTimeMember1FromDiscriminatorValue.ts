import {ReminderViewWithStartDateTimeWithEndDateTimeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReminderViewWithStartDateTimeWithEndDateTimeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ReminderViewWithStartDateTimeWithEndDateTimeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReminderViewWithStartDateTimeWithEndDateTimeMember1();
}
