import {AttendanceRecordsRequestBuilderGetQueryParameters} from './attendanceRecordsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttendanceRecordsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AttendanceRecordsRequestBuilderGetQueryParameters | undefined;
}
