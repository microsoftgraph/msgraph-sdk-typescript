import type {DateTimeTimeZone} from '../../../../../../../../../../../models/dateTimeTimeZone';
import {serializeDateTimeTimeZone} from '../../../../../../../../../../../models/serializeDateTimeTimeZone';
import type {SnoozeReminderPostRequestBody} from './snoozeReminderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSnoozeReminderPostRequestBody(writer: SerializationWriter, snoozeReminderPostRequestBody: SnoozeReminderPostRequestBody | undefined = {} as SnoozeReminderPostRequestBody) : void {
        writer.writeObjectValue<DateTimeTimeZone>("newReminderTime", snoozeReminderPostRequestBody.newReminderTime, serializeDateTimeTimeZone);
        writer.writeAdditionalData(snoozeReminderPostRequestBody.additionalData);
}
