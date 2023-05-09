import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingService} from './bookingService';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingServiceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: BookingService[] | undefined;
}
