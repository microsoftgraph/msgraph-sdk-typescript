import {AttendanceReportsRequestBuilderGetQueryParameters} from './attendanceReportsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttendanceReportsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AttendanceReportsRequestBuilderGetQueryParameters | undefined;
}
