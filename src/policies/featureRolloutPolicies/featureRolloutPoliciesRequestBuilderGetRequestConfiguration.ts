import {FeatureRolloutPoliciesRequestBuilderGetQueryParameters} from './featureRolloutPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:FeatureRolloutPoliciesRequestBuilderGetQueryParameters | undefined;
}
