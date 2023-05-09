import {SearchResponse} from '../../models/searchResponse';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSearchResponse} from '../../models/serializeSearchResponse';
import {QueryResponse} from './queryResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQueryResponse(writer: SerializationWriter, queryResponse: QueryResponse | undefined = {} as QueryResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, queryResponse)
        writer.writeCollectionOfObjectValues<SearchResponse>("value", queryResponse.value, serializeSearchResponse);
}
