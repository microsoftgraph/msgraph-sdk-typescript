import { deserializeIntoSynchronizationJobRestartCriteria } from './deserializeIntoSynchronizationJobRestartCriteria';
import { type SynchronizationJobRestartCriteria } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationJobRestartCriteriaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobRestartCriteria;
}
