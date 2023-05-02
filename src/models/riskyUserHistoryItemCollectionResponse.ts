import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RiskyUserHistoryItem[] | undefined;
}
