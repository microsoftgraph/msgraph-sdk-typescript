import {MeetingAttendanceReportCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingAttendanceReportCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingAttendanceReportCollectionResponseImpl();
}
