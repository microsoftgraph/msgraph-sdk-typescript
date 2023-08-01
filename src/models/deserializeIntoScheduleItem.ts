import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import type {DateTimeTimeZone} from './dateTimeTimeZone';
import {FreeBusyStatus} from './freeBusyStatus';
import type {ScheduleItem} from './scheduleItem';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScheduleItem(scheduleItem: ScheduleItem | undefined = {} as ScheduleItem) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { scheduleItem.end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "isPrivate": n => { scheduleItem.isPrivate = n.getBooleanValue(); },
        "location": n => { scheduleItem.location = n.getStringValue(); },
        "@odata.type": n => { scheduleItem.odataType = n.getStringValue(); },
        "start": n => { scheduleItem.start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "status": n => { scheduleItem.status = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
        "subject": n => { scheduleItem.subject = n.getStringValue(); },
    }
}
