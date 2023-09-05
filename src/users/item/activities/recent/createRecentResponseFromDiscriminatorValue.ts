import { deserializeIntoRecentResponse } from './deserializeIntoRecentResponse';
import { type RecentResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecentResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecentResponse;
}
