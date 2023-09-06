import { deserializeIntoSynchronizationStatus } from './deserializeIntoSynchronizationStatus';
import { type SynchronizationStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationStatus;
}
