import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingCustomerBase} from './bookingCustomerBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: BookingCustomerBase[] | undefined;
}
