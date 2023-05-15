import {BookingCustomer} from './bookingCustomer';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {deserializeIntoBookingCustomerBase} from './deserializeIntoBookingCustomerBase';
import {Phone} from './phone';
import {PhysicalAddress} from './physicalAddress';
import {serializePhone} from './serializePhone';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomer(bookingCustomer: BookingCustomer | undefined = {} as BookingCustomer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBookingCustomerBase(bookingCustomer),
        "addresses": n => { bookingCustomer.addresses = n.getCollectionOfObjectValues<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "displayName": n => { bookingCustomer.displayName = n.getStringValue(); },
        "emailAddress": n => { bookingCustomer.emailAddress = n.getStringValue(); },
        "phones": n => { bookingCustomer.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
    }
}
