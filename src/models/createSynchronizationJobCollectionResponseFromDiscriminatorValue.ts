import { deserializeIntoSynchronizationJobCollectionResponse } from './deserializeIntoSynchronizationJobCollectionResponse';
import { type SynchronizationJobCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobCollectionResponse;
}
