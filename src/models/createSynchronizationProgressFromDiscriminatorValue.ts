import { deserializeIntoSynchronizationProgress } from './deserializeIntoSynchronizationProgress';
import { type SynchronizationProgress } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationProgressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationProgress;
}
