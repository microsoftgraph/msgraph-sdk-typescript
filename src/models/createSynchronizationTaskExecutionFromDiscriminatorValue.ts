import {deserializeIntoSynchronizationTaskExecution} from './deserializeIntoSynchronizationTaskExecution';
import {SynchronizationTaskExecution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationTaskExecutionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationTaskExecution;
}
