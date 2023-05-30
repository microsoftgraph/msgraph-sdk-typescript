import {deserializeIntoSynchronizationStatus} from './deserializeIntoSynchronizationStatus';
import {SynchronizationStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationStatus;
}
