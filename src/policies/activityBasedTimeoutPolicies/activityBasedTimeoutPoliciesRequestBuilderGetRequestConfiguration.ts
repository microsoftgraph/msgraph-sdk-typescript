import {ActivityBasedTimeoutPoliciesRequestBuilderGetQueryParameters} from './activityBasedTimeoutPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivityBasedTimeoutPoliciesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ActivityBasedTimeoutPoliciesRequestBuilderGetQueryParameters | undefined;
}
