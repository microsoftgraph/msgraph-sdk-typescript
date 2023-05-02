import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReportCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MeetingAttendanceReport[] | undefined;
}
