import { deserializeIntoFilterByCurrentUserWithOnResponse } from './deserializeIntoFilterByCurrentUserWithOnResponse';
import { type FilterByCurrentUserWithOnResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFilterByCurrentUserWithOnResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilterByCurrentUserWithOnResponse;
}
