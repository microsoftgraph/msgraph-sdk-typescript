import {createSearchResponseFromDiscriminatorValue} from '../../models/createSearchResponseFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {SearchResponse} from '../../models/searchResponse';
import {serializeSearchResponse} from '../../models/serializeSearchResponse';
import {QueryResponse} from './queryResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQueryResponse(queryResponse: QueryResponse | undefined = {} as QueryResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(queryResponse),
        "value": n => { queryResponse.value = n.getCollectionOfObjectValues<SearchResponse>(createSearchResponseFromDiscriminatorValue); },
    }
}
