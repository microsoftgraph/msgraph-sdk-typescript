import {PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters} from './phoneAuthenticationMethodItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}
