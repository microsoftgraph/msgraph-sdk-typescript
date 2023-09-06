import { type RoleManagementPoliciesRequestBuilderGetQueryParameters } from './roleManagementPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RoleManagementPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RoleManagementPoliciesRequestBuilderGetQueryParameters | undefined;
}
