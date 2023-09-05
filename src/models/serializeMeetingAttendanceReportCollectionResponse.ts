import { type MeetingAttendanceReport } from './meetingAttendanceReport';
import { type MeetingAttendanceReportCollectionResponse } from './meetingAttendanceReportCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeMeetingAttendanceReport } from './serializeMeetingAttendanceReport';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMeetingAttendanceReportCollectionResponse(writer: SerializationWriter, meetingAttendanceReportCollectionResponse: MeetingAttendanceReportCollectionResponse | undefined = {} as MeetingAttendanceReportCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, meetingAttendanceReportCollectionResponse)
        writer.writeCollectionOfObjectValues<MeetingAttendanceReport>("value", meetingAttendanceReportCollectionResponse.value, serializeMeetingAttendanceReport);
}
