import {deserializeIntoBookingWorkHours} from './deserializeIntoBookingWorkHours';
import {BookingWorkHours} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingWorkHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingWorkHours;
}
