import { deserializeIntoSynchronizationJobApplicationParameters } from './deserializeIntoSynchronizationJobApplicationParameters';
import { type SynchronizationJobApplicationParameters } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationJobApplicationParametersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobApplicationParameters;
}
