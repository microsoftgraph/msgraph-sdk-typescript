import {BookingCustomerBase} from './bookingCustomerBase';
import {Phone} from './phone';
import {PhysicalAddress} from './physicalAddress';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomer extends BookingCustomerBase, Parsable {
    /**
     * Addresses associated with the customer. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others.
     */
    addresses?: PhysicalAddress[] | undefined;
    /**
     * The name of the customer.
     */
    displayName?: string | undefined;
    /**
     * The SMTP address of the customer.
     */
    emailAddress?: string | undefined;
    /**
     * Phone numbers associated with the customer, including home, business and mobile numbers.
     */
    phones?: Phone[] | undefined;
}
