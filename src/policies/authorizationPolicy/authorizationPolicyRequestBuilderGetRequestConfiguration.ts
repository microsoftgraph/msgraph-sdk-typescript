import {AuthorizationPolicyRequestBuilderGetQueryParameters} from './authorizationPolicyRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthorizationPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthorizationPolicyRequestBuilderGetQueryParameters | undefined;
}
