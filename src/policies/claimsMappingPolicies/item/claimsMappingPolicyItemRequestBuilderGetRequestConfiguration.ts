import {ClaimsMappingPolicyItemRequestBuilderGetQueryParameters} from './claimsMappingPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ClaimsMappingPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ClaimsMappingPolicyItemRequestBuilderGetQueryParameters | undefined;
}
