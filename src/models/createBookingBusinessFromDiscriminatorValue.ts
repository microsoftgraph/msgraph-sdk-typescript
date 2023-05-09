import {deserializeIntoBookingBusiness} from './deserializeIntoBookingBusiness';
import {BookingBusiness} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingBusinessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingBusiness;
}
