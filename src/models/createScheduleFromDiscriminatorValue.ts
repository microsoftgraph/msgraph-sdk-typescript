import { deserializeIntoSchedule } from './deserializeIntoSchedule';
import { type Schedule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchedule;
}
