import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BookingService} from './bookingService';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingServiceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingService[] | undefined;
}
