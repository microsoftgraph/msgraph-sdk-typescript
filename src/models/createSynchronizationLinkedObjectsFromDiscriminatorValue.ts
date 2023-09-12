import { deserializeIntoSynchronizationLinkedObjects } from './deserializeIntoSynchronizationLinkedObjects';
import { type SynchronizationLinkedObjects } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationLinkedObjectsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationLinkedObjects;
}
