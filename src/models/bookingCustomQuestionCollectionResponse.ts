import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BookingCustomQuestion} from './bookingCustomQuestion';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomQuestionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BookingCustomQuestion[] | undefined;
}
