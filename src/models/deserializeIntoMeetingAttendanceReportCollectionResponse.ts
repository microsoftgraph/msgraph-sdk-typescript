import { createMeetingAttendanceReportFromDiscriminatorValue } from './createMeetingAttendanceReportFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MeetingAttendanceReport } from './meetingAttendanceReport';
import { type MeetingAttendanceReportCollectionResponse } from './meetingAttendanceReportCollectionResponse';
import { serializeMeetingAttendanceReport } from './serializeMeetingAttendanceReport';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingAttendanceReportCollectionResponse(meetingAttendanceReportCollectionResponse: MeetingAttendanceReportCollectionResponse | undefined = {} as MeetingAttendanceReportCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(meetingAttendanceReportCollectionResponse),
        "value": n => { meetingAttendanceReportCollectionResponse.value = n.getCollectionOfObjectValues<MeetingAttendanceReport>(createMeetingAttendanceReportFromDiscriminatorValue); },
    }
}
