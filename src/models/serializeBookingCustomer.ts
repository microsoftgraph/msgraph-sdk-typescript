import {BookingCustomer} from './bookingCustomer';
import {Phone} from './phone';
import {PhysicalAddress} from './physicalAddress';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {serializePhone} from './serializePhone';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomer(writer: SerializationWriter, bookingCustomer: BookingCustomer | undefined = {} as BookingCustomer) : void {
        serializeBookingCustomerBase(writer, bookingCustomer)
        writer.writeCollectionOfObjectValues<PhysicalAddress>("addresses", bookingCustomer.addresses, serializePhysicalAddress);
        writer.writeStringValue("displayName", bookingCustomer.displayName);
        writer.writeStringValue("emailAddress", bookingCustomer.emailAddress);
        writer.writeCollectionOfObjectValues<Phone>("phones", bookingCustomer.phones, serializePhone);
}
