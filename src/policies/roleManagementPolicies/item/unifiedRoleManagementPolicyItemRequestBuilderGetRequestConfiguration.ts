import {UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters} from './unifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters | undefined;
}
