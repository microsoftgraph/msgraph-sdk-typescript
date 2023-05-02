import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {MeetingAttendanceReportCollectionResponse} from './meetingAttendanceReportCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMeetingAttendanceReport} from './serializeMeetingAttendanceReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingAttendanceReportCollectionResponse(writer: SerializationWriter, meetingAttendanceReportCollectionResponse: MeetingAttendanceReportCollectionResponse | undefined = {} as MeetingAttendanceReportCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, meetingAttendanceReportCollectionResponse)
        writer.writeCollectionOfObjectValues<MeetingAttendanceReport>("value", meetingAttendanceReportCollectionResponse.value, serializeMeetingAttendanceReport);
}
