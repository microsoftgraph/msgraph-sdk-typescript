import type {DateTimeTimeZone} from './dateTimeTimeZone';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import type {TimeSlot} from './timeSlot';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeSlot(writer: SerializationWriter, timeSlot: TimeSlot | undefined = {} as TimeSlot) : void {
        writer.writeObjectValue<DateTimeTimeZone>("end", timeSlot.end, serializeDateTimeTimeZone);
        writer.writeStringValue("@odata.type", timeSlot.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("start", timeSlot.start, serializeDateTimeTimeZone);
        writer.writeAdditionalData(timeSlot.additionalData);
}
