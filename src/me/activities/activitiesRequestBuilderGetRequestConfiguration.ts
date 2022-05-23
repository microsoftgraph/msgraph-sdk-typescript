import {ActivitiesRequestBuilderGetQueryParameters} from './activitiesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivitiesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ActivitiesRequestBuilderGetQueryParameters | undefined;
}
