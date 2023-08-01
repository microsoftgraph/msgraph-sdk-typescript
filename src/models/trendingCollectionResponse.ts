import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Trending} from './trending';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TrendingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Trending[] | undefined;
}
