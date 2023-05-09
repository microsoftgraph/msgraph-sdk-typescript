import {AuthenticationFlowsPolicyRequestBuilderGetQueryParameters} from './authenticationFlowsPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AuthenticationFlowsPolicyRequestBuilderGetQueryParameters | undefined;
}
