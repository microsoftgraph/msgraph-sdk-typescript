import type {Reminder} from '../../models/reminder';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeReminder} from '../../models/serializeReminder';
import type {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './reminderViewWithStartDateTimeWithEndDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReminderViewWithStartDateTimeWithEndDateTimeResponse(writer: SerializationWriter, reminderViewWithStartDateTimeWithEndDateTimeResponse: ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined = {} as ReminderViewWithStartDateTimeWithEndDateTimeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, reminderViewWithStartDateTimeWithEndDateTimeResponse)
        writer.writeCollectionOfObjectValues<Reminder>("value", reminderViewWithStartDateTimeWithEndDateTimeResponse.value, serializeReminder);
}
