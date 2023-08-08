import {TokenLifetimePolicyItemRequestBuilderGetQueryParameters} from './tokenLifetimePolicyItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface TokenLifetimePolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TokenLifetimePolicyItemRequestBuilderGetQueryParameters | undefined;
}
