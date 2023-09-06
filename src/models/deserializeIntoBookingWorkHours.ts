import { type BookingWorkHours } from './bookingWorkHours';
import { type BookingWorkTimeSlot } from './bookingWorkTimeSlot';
import { createBookingWorkTimeSlotFromDiscriminatorValue } from './createBookingWorkTimeSlotFromDiscriminatorValue';
import { DayOfWeek } from './dayOfWeek';
import { serializeBookingWorkTimeSlot } from './serializeBookingWorkTimeSlot';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkHours(bookingWorkHours: BookingWorkHours | undefined = {} as BookingWorkHours) : Record<string, (node: ParseNode) => void> {
    return {
        "day": n => { bookingWorkHours.day = n.getEnumValue<DayOfWeek>(DayOfWeek); },
        "@odata.type": n => { bookingWorkHours.odataType = n.getStringValue(); },
        "timeSlots": n => { bookingWorkHours.timeSlots = n.getCollectionOfObjectValues<BookingWorkTimeSlot>(createBookingWorkTimeSlotFromDiscriminatorValue); },
    }
}
