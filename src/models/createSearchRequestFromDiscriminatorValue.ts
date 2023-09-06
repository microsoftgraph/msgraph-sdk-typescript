import { deserializeIntoSearchRequest } from './deserializeIntoSearchRequest';
import { type SearchRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSearchRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchRequest;
}
