import {deserializeIntoSynchronizationJobApplicationParameters} from './deserializeIntoSynchronizationJobApplicationParameters';
import {SynchronizationJobApplicationParameters} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationJobApplicationParametersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobApplicationParameters;
}
