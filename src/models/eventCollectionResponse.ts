import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Event} from './event';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Event[] | undefined;
}
