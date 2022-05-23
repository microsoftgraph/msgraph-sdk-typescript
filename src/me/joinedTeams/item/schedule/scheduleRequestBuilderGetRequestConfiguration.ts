import {ScheduleRequestBuilderGetQueryParameters} from './scheduleRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScheduleRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ScheduleRequestBuilderGetQueryParameters | undefined;
}
