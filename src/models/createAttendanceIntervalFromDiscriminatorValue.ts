import { deserializeIntoAttendanceInterval } from './deserializeIntoAttendanceInterval';
import { type AttendanceInterval } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttendanceIntervalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttendanceInterval;
}
