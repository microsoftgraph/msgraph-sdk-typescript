import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ItemActivityStat} from './itemActivityStat';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityStatCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ItemActivityStat[] | undefined;
}
