import {SearchResult} from './searchResult';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchResult();
}
