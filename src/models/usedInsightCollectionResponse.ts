import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UsedInsight} from './usedInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UsedInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UsedInsight[] | undefined;
}
