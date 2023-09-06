import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UsedInsight } from './usedInsight';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UsedInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UsedInsight[] | undefined;
}
