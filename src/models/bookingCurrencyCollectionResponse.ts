import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingCurrency} from './bookingCurrency';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCurrencyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingCurrency[] | undefined;
}
