import { deserializeIntoSynchronizationJob } from './deserializeIntoSynchronizationJob';
import { type SynchronizationJob } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationJobFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJob;
}
