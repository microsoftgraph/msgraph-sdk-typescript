import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../../../../../../models/dateTimeTimeZone';
import {serializeDateTimeTimeZone} from '../../../../../../../../models/serializeDateTimeTimeZone';
import {SnoozeReminderPostRequestBody} from './snoozeReminderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSnoozeReminderPostRequestBody(snoozeReminderPostRequestBody: SnoozeReminderPostRequestBody | undefined = {} as SnoozeReminderPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "newReminderTime": n => { snoozeReminderPostRequestBody.newReminderTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
