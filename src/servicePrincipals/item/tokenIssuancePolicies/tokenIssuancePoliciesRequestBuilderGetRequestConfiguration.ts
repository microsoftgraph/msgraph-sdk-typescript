import {TokenIssuancePoliciesRequestBuilderGetQueryParameters} from './tokenIssuancePoliciesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TokenIssuancePoliciesRequestBuilderGetQueryParameters | undefined;
}
