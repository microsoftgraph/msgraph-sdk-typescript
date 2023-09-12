import { deserializeIntoSearchResult } from './deserializeIntoSearchResult';
import { type SearchResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchResult;
}
