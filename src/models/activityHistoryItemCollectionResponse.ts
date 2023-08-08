import type {ActivityHistoryItem} from './activityHistoryItem';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ActivityHistoryItem[] | undefined;
}
