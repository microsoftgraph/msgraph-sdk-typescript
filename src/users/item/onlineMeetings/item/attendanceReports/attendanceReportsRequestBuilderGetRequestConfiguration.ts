import { type AttendanceReportsRequestBuilderGetQueryParameters } from './attendanceReportsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
