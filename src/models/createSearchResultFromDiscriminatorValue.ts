import {deserializeIntoSearchResult} from './deserializeIntoSearchResult';
import {SearchResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchResult;
}
