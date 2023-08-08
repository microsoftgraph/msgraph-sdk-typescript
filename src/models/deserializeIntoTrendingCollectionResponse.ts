import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTrending} from './serializeTrending';
import type {Trending} from './trending';
import type {TrendingCollectionResponse} from './trendingCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrendingCollectionResponse(trendingCollectionResponse: TrendingCollectionResponse | undefined = {} as TrendingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(trendingCollectionResponse),
        "value": n => { trendingCollectionResponse.value = n.getCollectionOfObjectValues<Trending>(createTrendingFromDiscriminatorValue); },
    }
}
