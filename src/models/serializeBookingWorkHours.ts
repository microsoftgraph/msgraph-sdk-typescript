import { type BookingWorkHours } from './bookingWorkHours';
import { type BookingWorkTimeSlot } from './bookingWorkTimeSlot';
import { DayOfWeek } from './dayOfWeek';
import { serializeBookingWorkTimeSlot } from './serializeBookingWorkTimeSlot';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingWorkHours(writer: SerializationWriter, bookingWorkHours: BookingWorkHours | undefined = {} as BookingWorkHours) : void {
        writer.writeEnumValue<DayOfWeek>("day", bookingWorkHours.day);
        writer.writeStringValue("@odata.type", bookingWorkHours.odataType);
        writer.writeCollectionOfObjectValues<BookingWorkTimeSlot>("timeSlots", bookingWorkHours.timeSlots, serializeBookingWorkTimeSlot);
        writer.writeAdditionalData(bookingWorkHours.additionalData);
}
