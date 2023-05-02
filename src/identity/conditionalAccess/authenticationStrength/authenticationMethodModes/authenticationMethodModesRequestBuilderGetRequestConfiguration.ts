import {AuthenticationMethodModesRequestBuilderGetQueryParameters} from './authenticationMethodModesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodModesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AuthenticationMethodModesRequestBuilderGetQueryParameters | undefined;
}
