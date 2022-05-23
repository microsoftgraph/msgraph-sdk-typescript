import {MeetingAttendanceReportImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingAttendanceReportImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingAttendanceReportImpl();
}
