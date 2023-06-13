import {deserializeIntoSynchronizationLinkedObjects} from './deserializeIntoSynchronizationLinkedObjects';
import {SynchronizationLinkedObjects} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationLinkedObjectsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationLinkedObjects;
}
