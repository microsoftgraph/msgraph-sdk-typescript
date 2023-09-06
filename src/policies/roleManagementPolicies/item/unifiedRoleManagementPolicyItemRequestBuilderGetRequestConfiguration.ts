import { type UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters } from './unifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters | undefined;
}
