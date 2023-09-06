import { type IntendedPoliciesRequestBuilderGetQueryParameters } from './intendedPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface IntendedPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IntendedPoliciesRequestBuilderGetQueryParameters | undefined;
}
