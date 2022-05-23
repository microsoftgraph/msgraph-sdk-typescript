import {SearchResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchResultImpl();
}
