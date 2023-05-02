import {deserializeIntoSearchQuery} from './deserializeIntoSearchQuery';
import {SearchQuery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchQuery;
}
