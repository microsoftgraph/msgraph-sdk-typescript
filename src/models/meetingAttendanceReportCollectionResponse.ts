import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {MeetingAttendanceReport} from './meetingAttendanceReport';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReportCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MeetingAttendanceReport[] | undefined;
}
