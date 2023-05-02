import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingSchedulingPolicy(bookingSchedulingPolicy: BookingSchedulingPolicy | undefined = {} as BookingSchedulingPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        "allowStaffSelection": n => { bookingSchedulingPolicy.allowStaffSelection = n.getBooleanValue(); },
        "maximumAdvance": n => { bookingSchedulingPolicy.maximumAdvance = n.getDurationValue(); },
        "minimumLeadTime": n => { bookingSchedulingPolicy.minimumLeadTime = n.getDurationValue(); },
        "@odata.type": n => { bookingSchedulingPolicy.odataType = n.getStringValue(); },
        "sendConfirmationsToOwner": n => { bookingSchedulingPolicy.sendConfirmationsToOwner = n.getBooleanValue(); },
        "timeSlotInterval": n => { bookingSchedulingPolicy.timeSlotInterval = n.getDurationValue(); },
    }
}
