import { type CrossTenantAccessPolicyRequestBuilderGetQueryParameters } from './crossTenantAccessPolicyRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CrossTenantAccessPolicyRequestBuilderGetQueryParameters | undefined;
}
