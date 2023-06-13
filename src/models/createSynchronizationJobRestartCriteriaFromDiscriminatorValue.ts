import {deserializeIntoSynchronizationJobRestartCriteria} from './deserializeIntoSynchronizationJobRestartCriteria';
import {SynchronizationJobRestartCriteria} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationJobRestartCriteriaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationJobRestartCriteria;
}
