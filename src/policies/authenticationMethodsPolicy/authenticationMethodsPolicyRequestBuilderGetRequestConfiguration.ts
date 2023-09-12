import { type AuthenticationMethodsPolicyRequestBuilderGetQueryParameters } from './authenticationMethodsPolicyRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationMethodsPolicyRequestBuilderGetQueryParameters | undefined;
}
