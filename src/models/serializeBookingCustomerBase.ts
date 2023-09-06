import { type BookingCustomerBase } from './bookingCustomerBase';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBase(writer: SerializationWriter, bookingCustomerBase: BookingCustomerBase | undefined = {} as BookingCustomerBase) : void {
        serializeEntity(writer, bookingCustomerBase)
}
