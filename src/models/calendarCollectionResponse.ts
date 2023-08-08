import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Calendar} from './calendar';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Calendar[] | undefined;
}
