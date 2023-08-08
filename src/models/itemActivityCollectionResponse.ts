import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ItemActivity} from './itemActivity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ItemActivity[] | undefined;
}
