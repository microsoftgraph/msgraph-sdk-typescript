import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {DayOfWeek} from './dayOfWeek';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingWorkHours extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The day property
     */
    day?: DayOfWeek | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A list of start/end times during a day.
     */
    timeSlots?: BookingWorkTimeSlot[] | undefined;
}
