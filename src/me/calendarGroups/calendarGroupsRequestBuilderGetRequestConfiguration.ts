import {CalendarGroupsRequestBuilderGetQueryParameters} from './calendarGroupsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarGroupsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CalendarGroupsRequestBuilderGetQueryParameters | undefined;
}
