import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SharedInsight} from './sharedInsight';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SharedInsight[] | undefined;
}
