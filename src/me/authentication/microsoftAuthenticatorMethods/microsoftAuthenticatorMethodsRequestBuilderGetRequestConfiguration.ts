import {MicrosoftAuthenticatorMethodsRequestBuilderGetQueryParameters} from './microsoftAuthenticatorMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MicrosoftAuthenticatorMethodsRequestBuilderGetQueryParameters | undefined;
}
