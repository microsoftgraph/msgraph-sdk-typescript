import {PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters} from './phoneAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}
