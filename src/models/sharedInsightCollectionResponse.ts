import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SharedInsight} from './sharedInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedInsightCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SharedInsight[] | undefined;
}
