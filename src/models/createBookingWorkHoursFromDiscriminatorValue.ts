import {BookingWorkHoursImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingWorkHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingWorkHoursImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingWorkHoursImpl();
}
