import {FeatureRolloutPolicyItemRequestBuilderGetQueryParameters} from './featureRolloutPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FeatureRolloutPolicyItemRequestBuilderGetQueryParameters | undefined;
}
