import {deserializeIntoMeetingAttendanceReport} from './deserializeIntoMeetingAttendanceReport';
import {MeetingAttendanceReport} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingAttendanceReport;
}
