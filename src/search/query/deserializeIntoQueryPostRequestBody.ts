import {createSearchRequestFromDiscriminatorValue} from '../../models/createSearchRequestFromDiscriminatorValue';
import {SearchRequest} from '../../models/searchRequest';
import {serializeSearchRequest} from '../../models/serializeSearchRequest';
import {QueryPostRequestBody} from './queryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQueryPostRequestBody(queryPostRequestBody: QueryPostRequestBody | undefined = {} as QueryPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "requests": n => { queryPostRequestBody.requests = n.getCollectionOfObjectValues<SearchRequest>(createSearchRequestFromDiscriminatorValue); },
    }
}
