import { deserializeIntoSearchResponse } from './deserializeIntoSearchResponse';
import { type SearchResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchResponse;
}
