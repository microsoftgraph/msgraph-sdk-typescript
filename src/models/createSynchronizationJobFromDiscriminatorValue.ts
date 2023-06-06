import {deserializeIntoSynchronizationJob} from './deserializeIntoSynchronizationJob';
import {SynchronizationJob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationJobFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJob;
}
