import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BookingBusiness} from './bookingBusiness';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingBusinessCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingBusiness[] | undefined;
}
