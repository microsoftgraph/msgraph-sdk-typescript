import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {DayOfWeek} from './dayOfWeek';

export interface BookingWorkHours{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. */
    day?:DayOfWeek | undefined;
    /** A list of start/end times during a day. */
    timeSlots?:BookingWorkTimeSlot[] | undefined;
}
