import { deserializeIntoRetentionEventTypeCollectionResponse } from './deserializeIntoRetentionEventTypeCollectionResponse';
import { type RetentionEventTypeCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRetentionEventTypeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventTypeCollectionResponse;
}
