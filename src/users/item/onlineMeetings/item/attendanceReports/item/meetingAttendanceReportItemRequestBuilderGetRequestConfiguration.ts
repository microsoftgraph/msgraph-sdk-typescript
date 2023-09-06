import { type MeetingAttendanceReportItemRequestBuilderGetQueryParameters } from './meetingAttendanceReportItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReportItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: MeetingAttendanceReportItemRequestBuilderGetQueryParameters | undefined;
}
