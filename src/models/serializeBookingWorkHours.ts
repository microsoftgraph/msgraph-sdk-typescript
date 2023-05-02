import {BookingWorkHours} from './bookingWorkHours';
import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {DayOfWeek} from './dayOfWeek';
import {serializeBookingWorkTimeSlot} from './serializeBookingWorkTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingWorkHours(writer: SerializationWriter, bookingWorkHours: BookingWorkHours | undefined = {} as BookingWorkHours) : void {
        writer.writeEnumValue<DayOfWeek>("day", bookingWorkHours.day);
        writer.writeStringValue("@odata.type", bookingWorkHours.odataType);
        writer.writeCollectionOfObjectValues<BookingWorkTimeSlot>("timeSlots", bookingWorkHours.timeSlots, serializeBookingWorkTimeSlot);
        writer.writeAdditionalData(bookingWorkHours.additionalData);
}
