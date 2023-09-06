import { deserializeIntoSearchQuery } from './deserializeIntoSearchQuery';
import { type SearchQuery } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchQuery;
}
