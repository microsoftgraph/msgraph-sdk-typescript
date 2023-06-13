import {deserializeIntoSynchronizationProgress} from './deserializeIntoSynchronizationProgress';
import {SynchronizationProgress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationProgressFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationProgress;
}
