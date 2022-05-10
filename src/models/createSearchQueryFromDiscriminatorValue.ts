import {SearchQueryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchQueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchQueryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchQueryImpl();
}
