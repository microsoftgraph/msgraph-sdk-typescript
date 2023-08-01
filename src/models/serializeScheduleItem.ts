import type {DateTimeTimeZone} from './dateTimeTimeZone';
import {FreeBusyStatus} from './freeBusyStatus';
import type {ScheduleItem} from './scheduleItem';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScheduleItem(writer: SerializationWriter, scheduleItem: ScheduleItem | undefined = {} as ScheduleItem) : void {
        writer.writeObjectValue<DateTimeTimeZone>("end", scheduleItem.end, serializeDateTimeTimeZone);
        writer.writeBooleanValue("isPrivate", scheduleItem.isPrivate);
        writer.writeStringValue("location", scheduleItem.location);
        writer.writeStringValue("@odata.type", scheduleItem.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("start", scheduleItem.start, serializeDateTimeTimeZone);
        writer.writeEnumValue<FreeBusyStatus>("status", scheduleItem.status);
        writer.writeStringValue("subject", scheduleItem.subject);
        writer.writeAdditionalData(scheduleItem.additionalData);
}
