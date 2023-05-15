import {BookingWorkHours} from './bookingWorkHours';
import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {createBookingWorkTimeSlotFromDiscriminatorValue} from './createBookingWorkTimeSlotFromDiscriminatorValue';
import {DayOfWeek} from './dayOfWeek';
import {serializeBookingWorkTimeSlot} from './serializeBookingWorkTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkHours(bookingWorkHours: BookingWorkHours | undefined = {} as BookingWorkHours) : Record<string, (node: ParseNode) => void> {
    return {
        "day": n => { bookingWorkHours.day = n.getEnumValue<DayOfWeek>(DayOfWeek); },
        "@odata.type": n => { bookingWorkHours.odataType = n.getStringValue(); },
        "timeSlots": n => { bookingWorkHours.timeSlots = n.getCollectionOfObjectValues<BookingWorkTimeSlot>(createBookingWorkTimeSlotFromDiscriminatorValue); },
    }
}
