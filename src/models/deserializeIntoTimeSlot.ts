import { createDateTimeTimeZoneFromDiscriminatorValue } from './createDateTimeTimeZoneFromDiscriminatorValue';
import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { serializeDateTimeTimeZone } from './serializeDateTimeTimeZone';
import { type TimeSlot } from './timeSlot';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeSlot(timeSlot: TimeSlot | undefined = {} as TimeSlot) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { timeSlot.end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "@odata.type": n => { timeSlot.odataType = n.getStringValue(); },
        "start": n => { timeSlot.start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
