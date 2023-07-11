import {CalendarViewRequestBuilderGetQueryParameters} from './calendarViewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarViewRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CalendarViewRequestBuilderGetQueryParameters | undefined;
}
