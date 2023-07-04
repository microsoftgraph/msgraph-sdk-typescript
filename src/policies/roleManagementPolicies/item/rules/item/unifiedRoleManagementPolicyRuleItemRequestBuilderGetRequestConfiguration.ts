import {UnifiedRoleManagementPolicyRuleItemRequestBuilderGetQueryParameters} from './unifiedRoleManagementPolicyRuleItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyRuleItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedRoleManagementPolicyRuleItemRequestBuilderGetQueryParameters | undefined;
}
