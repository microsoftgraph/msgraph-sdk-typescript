import { deserializeIntoSynchronizationQuarantine } from './deserializeIntoSynchronizationQuarantine';
import { type SynchronizationQuarantine } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationQuarantineFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationQuarantine;
}
