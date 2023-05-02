import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTrending} from './serializeTrending';
import {Trending} from './trending';
import {TrendingCollectionResponse} from './trendingCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrendingCollectionResponse(trendingCollectionResponse: TrendingCollectionResponse | undefined = {} as TrendingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(trendingCollectionResponse),
        "value": n => { trendingCollectionResponse.value = n.getCollectionOfObjectValues<Trending>(createTrendingFromDiscriminatorValue); },
    }
}
