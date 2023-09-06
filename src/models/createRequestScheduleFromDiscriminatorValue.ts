import { deserializeIntoRequestSchedule } from './deserializeIntoRequestSchedule';
import { type RequestSchedule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRequestScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRequestSchedule;
}
