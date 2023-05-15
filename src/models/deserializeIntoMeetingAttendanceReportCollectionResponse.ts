import {createMeetingAttendanceReportFromDiscriminatorValue} from './createMeetingAttendanceReportFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {MeetingAttendanceReportCollectionResponse} from './meetingAttendanceReportCollectionResponse';
import {serializeMeetingAttendanceReport} from './serializeMeetingAttendanceReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingAttendanceReportCollectionResponse(meetingAttendanceReportCollectionResponse: MeetingAttendanceReportCollectionResponse | undefined = {} as MeetingAttendanceReportCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(meetingAttendanceReportCollectionResponse),
        "value": n => { meetingAttendanceReportCollectionResponse.value = n.getCollectionOfObjectValues<MeetingAttendanceReport>(createMeetingAttendanceReportFromDiscriminatorValue); },
    }
}
