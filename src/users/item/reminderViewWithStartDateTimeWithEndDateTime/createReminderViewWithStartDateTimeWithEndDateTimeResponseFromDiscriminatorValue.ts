import { deserializeIntoReminderViewWithStartDateTimeWithEndDateTimeResponse } from './deserializeIntoReminderViewWithStartDateTimeWithEndDateTimeResponse';
import { type ReminderViewWithStartDateTimeWithEndDateTimeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReminderViewWithStartDateTimeWithEndDateTimeResponse;
}
