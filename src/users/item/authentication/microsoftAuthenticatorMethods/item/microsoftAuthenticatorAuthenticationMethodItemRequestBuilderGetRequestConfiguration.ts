import {MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParameters} from './microsoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}
