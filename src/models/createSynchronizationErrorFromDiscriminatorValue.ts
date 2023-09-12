import { deserializeIntoSynchronizationError } from './deserializeIntoSynchronizationError';
import { type SynchronizationError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationError;
}
