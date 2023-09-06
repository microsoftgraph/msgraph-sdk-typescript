import { type BookingCustomerBase } from './bookingCustomerBase';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerBase(bookingCustomerBase: BookingCustomerBase | undefined = {} as BookingCustomerBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCustomerBase),
    }
}
