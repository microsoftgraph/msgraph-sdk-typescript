import {SearchHitImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchHitImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchHitImpl();
}
