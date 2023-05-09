import {AuthenticationStrengthPolicyItemRequestBuilderGetQueryParameters} from './authenticationStrengthPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AuthenticationStrengthPolicyItemRequestBuilderGetQueryParameters | undefined;
}
