import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Trending} from './trending';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TrendingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Trending[] | undefined;
}
