import { deserializeIntoMeetingAttendanceReportCollectionResponse } from './deserializeIntoMeetingAttendanceReportCollectionResponse';
import { type MeetingAttendanceReportCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMeetingAttendanceReportCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingAttendanceReportCollectionResponse;
}
