import {deserializeIntoSynchronization} from './deserializeIntoSynchronization';
import {Synchronization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronization;
}
