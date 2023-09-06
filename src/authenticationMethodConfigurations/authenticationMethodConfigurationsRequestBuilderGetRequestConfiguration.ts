import { type AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters } from './authenticationMethodConfigurationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters | undefined;
}
