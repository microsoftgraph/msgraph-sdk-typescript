import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type BookingCustomerBase } from './bookingCustomerBase';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingCustomerBase[] | undefined;
}
