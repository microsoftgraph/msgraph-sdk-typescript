import { type AuthenticationMethodConfigurationItemRequestBuilderGetQueryParameters } from './authenticationMethodConfigurationItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationMethodConfigurationItemRequestBuilderGetQueryParameters | undefined;
}
