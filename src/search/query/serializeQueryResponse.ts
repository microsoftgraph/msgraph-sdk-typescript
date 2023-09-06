import { type SearchResponse } from '../../models/searchResponse';
import { serializeBaseCollectionPaginationCountResponse } from '../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeSearchResponse } from '../../models/serializeSearchResponse';
import { type QueryResponse } from './queryResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeQueryResponse(writer: SerializationWriter, queryResponse: QueryResponse | undefined = {} as QueryResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, queryResponse)
        writer.writeCollectionOfObjectValues<SearchResponse>("value", queryResponse.value, serializeSearchResponse);
}
