import {SearchRequest} from '../../models/searchRequest';
import {serializeSearchRequest} from '../../models/serializeSearchRequest';
import {QueryPostRequestBody} from './queryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQueryPostRequestBody(writer: SerializationWriter, queryPostRequestBody: QueryPostRequestBody | undefined = {} as QueryPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<SearchRequest>("requests", queryPostRequestBody.requests, serializeSearchRequest);
        writer.writeAdditionalData(queryPostRequestBody.additionalData);
}
