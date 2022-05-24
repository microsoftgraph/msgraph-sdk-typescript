import {MeetingAttendanceReportItemRequestBuilderGetQueryParameters} from './meetingAttendanceReportItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReportItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:MeetingAttendanceReportItemRequestBuilderGetQueryParameters | undefined;
}
