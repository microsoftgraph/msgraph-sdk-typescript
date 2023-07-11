import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomQuestionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingCustomQuestion[] | undefined;
}
