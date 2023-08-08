import {createReminderFromDiscriminatorValue} from '../../models/createReminderFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {Reminder} from '../../models/reminder';
import {serializeReminder} from '../../models/serializeReminder';
import type {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './reminderViewWithStartDateTimeWithEndDateTimeResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReminderViewWithStartDateTimeWithEndDateTimeResponse(reminderViewWithStartDateTimeWithEndDateTimeResponse: ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined = {} as ReminderViewWithStartDateTimeWithEndDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(reminderViewWithStartDateTimeWithEndDateTimeResponse),
        "value": n => { reminderViewWithStartDateTimeWithEndDateTimeResponse.value = n.getCollectionOfObjectValues<Reminder>(createReminderFromDiscriminatorValue); },
    }
}
