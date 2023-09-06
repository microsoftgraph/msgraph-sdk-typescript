import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type RiskyUserHistoryItem } from './riskyUserHistoryItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RiskyUserHistoryItem[] | undefined;
}
