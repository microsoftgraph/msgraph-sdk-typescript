import {UnifiedRoleAssignmentItemRequestBuilderGetQueryParameters} from './unifiedRoleAssignmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedRoleAssignmentItemRequestBuilderGetQueryParameters | undefined;
}
