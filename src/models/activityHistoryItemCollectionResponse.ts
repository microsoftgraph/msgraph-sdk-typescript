import {ActivityHistoryItem} from './activityHistoryItem';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ActivityHistoryItem[] | undefined;
}
