import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Trending } from './trending';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TrendingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Trending[] | undefined;
}
