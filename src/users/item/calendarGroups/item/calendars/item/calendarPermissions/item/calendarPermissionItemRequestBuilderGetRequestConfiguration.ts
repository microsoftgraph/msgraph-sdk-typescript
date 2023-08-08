import {CalendarPermissionItemRequestBuilderGetQueryParameters} from './calendarPermissionItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarPermissionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CalendarPermissionItemRequestBuilderGetQueryParameters | undefined;
}
