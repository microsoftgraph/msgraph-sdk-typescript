import { deserializeIntoBookingBusiness } from './deserializeIntoBookingBusiness';
import { type BookingBusiness } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingBusinessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingBusiness;
}
