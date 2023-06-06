import {deserializeIntoSynchronizationSchedule} from './deserializeIntoSynchronizationSchedule';
import {SynchronizationSchedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationSchedule;
}
