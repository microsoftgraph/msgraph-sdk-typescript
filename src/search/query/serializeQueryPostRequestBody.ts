import { type SearchRequest } from '../../models/searchRequest';
import { serializeSearchRequest } from '../../models/serializeSearchRequest';
import { type QueryPostRequestBody } from './queryPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeQueryPostRequestBody(writer: SerializationWriter, queryPostRequestBody: QueryPostRequestBody | undefined = {} as QueryPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<SearchRequest>("requests", queryPostRequestBody.requests, serializeSearchRequest);
        writer.writeAdditionalData(queryPostRequestBody.additionalData);
}
