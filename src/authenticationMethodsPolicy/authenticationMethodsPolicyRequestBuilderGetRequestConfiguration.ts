import {AuthenticationMethodsPolicyRequestBuilderGetQueryParameters} from './authenticationMethodsPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AuthenticationMethodsPolicyRequestBuilderGetQueryParameters | undefined;
}
