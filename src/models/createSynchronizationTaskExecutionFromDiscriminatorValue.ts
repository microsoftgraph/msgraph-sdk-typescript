import { deserializeIntoSynchronizationTaskExecution } from './deserializeIntoSynchronizationTaskExecution';
import { type SynchronizationTaskExecution } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationTaskExecutionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationTaskExecution;
}
