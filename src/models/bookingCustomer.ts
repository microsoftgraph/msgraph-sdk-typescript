import {BookingCustomerBase} from './bookingCustomerBase';
import {Phone} from './phone';
import {PhysicalAddress} from './physicalAddress';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomer extends BookingCustomerBase, Partial<Parsable> {
    /** Addresses associated with the customer, including home, business and other addresses. */
    addresses?: PhysicalAddress[] | undefined;
    /** The name of the customer. */
    displayName?: string | undefined;
    /** The SMTP address of the customer. */
    emailAddress?: string | undefined;
    /** Phone numbers associated with the customer, including home, business and mobile numbers. */
    phones?: Phone[] | undefined;
}
