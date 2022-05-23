import {FilterByCurrentUserWithOnResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterByCurrentUserWithOnResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilterByCurrentUserWithOnResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilterByCurrentUserWithOnResponseImpl();
}
