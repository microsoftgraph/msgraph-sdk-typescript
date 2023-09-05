import { deserializeIntoUsedInsightCollectionResponse } from './deserializeIntoUsedInsightCollectionResponse';
import { type UsedInsightCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUsedInsightCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUsedInsightCollectionResponse;
}
