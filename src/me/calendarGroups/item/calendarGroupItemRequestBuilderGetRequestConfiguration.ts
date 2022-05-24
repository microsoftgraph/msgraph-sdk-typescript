import {CalendarGroupItemRequestBuilderGetQueryParameters} from './calendarGroupItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarGroupItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:CalendarGroupItemRequestBuilderGetQueryParameters | undefined;
}
