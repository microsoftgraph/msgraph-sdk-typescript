import { type AttendanceRecordItemRequestBuilderGetQueryParameters } from './attendanceRecordItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AttendanceRecordItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AttendanceRecordItemRequestBuilderGetQueryParameters | undefined;
}
