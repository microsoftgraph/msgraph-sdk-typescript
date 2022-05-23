import {TargetScheduleRequestBuilderGetQueryParameters} from './targetScheduleRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TargetScheduleRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TargetScheduleRequestBuilderGetQueryParameters | undefined;
}
