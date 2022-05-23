import {SearchRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchRequestImpl();
}
