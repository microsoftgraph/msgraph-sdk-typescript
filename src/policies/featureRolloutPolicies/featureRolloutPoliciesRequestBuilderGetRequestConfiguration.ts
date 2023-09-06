import { type FeatureRolloutPoliciesRequestBuilderGetQueryParameters } from './featureRolloutPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FeatureRolloutPoliciesRequestBuilderGetQueryParameters | undefined;
}
