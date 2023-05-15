import {CrossTenantAccessPolicyRequestBuilderGetQueryParameters} from './crossTenantAccessPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: CrossTenantAccessPolicyRequestBuilderGetQueryParameters | undefined;
}
