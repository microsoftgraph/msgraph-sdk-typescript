import { deserializeIntoSharedInsightCollectionResponse } from './deserializeIntoSharedInsightCollectionResponse';
import { type SharedInsightCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedInsightCollectionResponse;
}
