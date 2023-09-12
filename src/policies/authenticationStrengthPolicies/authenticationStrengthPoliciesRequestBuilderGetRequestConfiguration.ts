import { type AuthenticationStrengthPoliciesRequestBuilderGetQueryParameters } from './authenticationStrengthPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationStrengthPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationStrengthPoliciesRequestBuilderGetQueryParameters | undefined;
}
