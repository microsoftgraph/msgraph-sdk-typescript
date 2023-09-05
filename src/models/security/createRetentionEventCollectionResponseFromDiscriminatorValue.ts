import { deserializeIntoRetentionEventCollectionResponse } from './deserializeIntoRetentionEventCollectionResponse';
import { type RetentionEventCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRetentionEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventCollectionResponse;
}
