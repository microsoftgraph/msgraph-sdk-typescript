import {FeatureRolloutPolicyItemRequestBuilderGetQueryParameters} from './featureRolloutPolicyItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

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
