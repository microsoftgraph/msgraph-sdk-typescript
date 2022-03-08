import {BookingBusiness} from './bookingBusiness';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingBusinessFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingBusiness {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingBusiness();
}
