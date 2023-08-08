import {ConditionalAccessPolicyItemRequestBuilderGetQueryParameters} from './conditionalAccessPolicyItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConditionalAccessPolicyItemRequestBuilderGetQueryParameters | undefined;
}
