import {MicrosoftAuthenticatorMethodsRequestBuilderGetQueryParameters} from './microsoftAuthenticatorMethodsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

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
