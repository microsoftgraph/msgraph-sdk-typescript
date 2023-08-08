import {ClaimsMappingPoliciesRequestBuilderGetQueryParameters} from './claimsMappingPoliciesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ClaimsMappingPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ClaimsMappingPoliciesRequestBuilderGetQueryParameters | undefined;
}
