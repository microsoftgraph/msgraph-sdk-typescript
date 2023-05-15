import {BookingCustomerBase} from './bookingCustomerBase';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBase(writer: SerializationWriter, bookingCustomerBase: BookingCustomerBase | undefined = {} as BookingCustomerBase) : void {
        serializeEntity(writer, bookingCustomerBase)
}
