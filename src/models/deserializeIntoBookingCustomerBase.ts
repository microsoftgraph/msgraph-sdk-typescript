import {BookingCustomerBase} from './bookingCustomerBase';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerBase(bookingCustomerBase: BookingCustomerBase | undefined = {} as BookingCustomerBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCustomerBase),
    }
}
