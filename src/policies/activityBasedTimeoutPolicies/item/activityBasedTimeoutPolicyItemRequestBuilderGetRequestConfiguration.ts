import {ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParameters} from './activityBasedTimeoutPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivityBasedTimeoutPolicyItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParameters | undefined;
}
