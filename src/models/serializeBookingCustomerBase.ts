import {BookingCustomerBase} from './bookingCustomerBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBase(bookingCustomerBase: BookingCustomerBase | undefined = {} as BookingCustomerBase, writer: SerializationWriter) : void {
        serializeEntity(writer, bookingCustomerBase)
}
