import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTrending} from './serializeTrending';
import {Trending} from './trending';
import {TrendingCollectionResponse} from './trendingCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrendingCollectionResponse(writer: SerializationWriter, trendingCollectionResponse: TrendingCollectionResponse | undefined = {} as TrendingCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, trendingCollectionResponse)
        writer.writeCollectionOfObjectValues<Trending>("value", trendingCollectionResponse.value, serializeTrending);
}
