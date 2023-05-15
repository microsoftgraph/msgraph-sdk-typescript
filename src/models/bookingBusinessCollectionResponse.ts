import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingBusiness} from './bookingBusiness';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingBusinessCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: BookingBusiness[] | undefined;
}
