import {CalendarPermissionsRequestBuilderGetQueryParameters} from './calendarPermissionsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarPermissionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CalendarPermissionsRequestBuilderGetQueryParameters | undefined;
}
