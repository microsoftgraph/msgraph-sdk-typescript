import { deserializeIntoSynchronizationSchedule } from './deserializeIntoSynchronizationSchedule';
import { type SynchronizationSchedule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationSchedule;
}
