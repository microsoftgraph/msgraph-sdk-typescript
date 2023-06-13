import {deserializeIntoSynchronizationError} from './deserializeIntoSynchronizationError';
import {SynchronizationError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationError;
}
