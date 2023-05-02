import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkTimeSlot(bookingWorkTimeSlot: BookingWorkTimeSlot | undefined = {} as BookingWorkTimeSlot) : Record<string, (node: ParseNode) => void> {
    return {
        "endTime": n => { bookingWorkTimeSlot.endTime = n.getTimeOnlyValue(); },
        "@odata.type": n => { bookingWorkTimeSlot.odataType = n.getStringValue(); },
        "startTime": n => { bookingWorkTimeSlot.startTime = n.getTimeOnlyValue(); },
    }
}
