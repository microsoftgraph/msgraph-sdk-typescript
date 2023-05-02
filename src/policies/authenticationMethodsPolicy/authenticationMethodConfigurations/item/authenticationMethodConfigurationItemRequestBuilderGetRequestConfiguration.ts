import {AuthenticationMethodConfigurationItemRequestBuilderGetQueryParameters} from './authenticationMethodConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AuthenticationMethodConfigurationItemRequestBuilderGetQueryParameters | undefined;
}
