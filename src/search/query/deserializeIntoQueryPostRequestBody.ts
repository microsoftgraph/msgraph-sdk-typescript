import {createSearchRequestFromDiscriminatorValue} from '../../models/createSearchRequestFromDiscriminatorValue';
import type {SearchRequest} from '../../models/searchRequest';
import {serializeSearchRequest} from '../../models/serializeSearchRequest';
import type {QueryPostRequestBody} from './queryPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQueryPostRequestBody(queryPostRequestBody: QueryPostRequestBody | undefined = {} as QueryPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "requests": n => { queryPostRequestBody.requests = n.getCollectionOfObjectValues<SearchRequest>(createSearchRequestFromDiscriminatorValue); },
    }
}
