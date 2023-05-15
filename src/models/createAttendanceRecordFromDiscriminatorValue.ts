import {deserializeIntoAttendanceRecord} from './deserializeIntoAttendanceRecord';
import {AttendanceRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttendanceRecord;
}
