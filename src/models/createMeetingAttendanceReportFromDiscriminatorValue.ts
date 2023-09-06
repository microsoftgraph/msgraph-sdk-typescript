import { deserializeIntoMeetingAttendanceReport } from './deserializeIntoMeetingAttendanceReport';
import { type MeetingAttendanceReport } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingAttendanceReport;
}
