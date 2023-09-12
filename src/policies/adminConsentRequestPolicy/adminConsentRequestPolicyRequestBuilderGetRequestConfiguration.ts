import { type AdminConsentRequestPolicyRequestBuilderGetQueryParameters } from './adminConsentRequestPolicyRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AdminConsentRequestPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AdminConsentRequestPolicyRequestBuilderGetQueryParameters | undefined;
}
