import {AuthenticationMethodItemRequestBuilderGetQueryParameters} from './authenticationMethodItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}
