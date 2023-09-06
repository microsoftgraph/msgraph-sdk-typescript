import { type PermissionGrantPoliciesRequestBuilderGetQueryParameters } from './permissionGrantPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PermissionGrantPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PermissionGrantPoliciesRequestBuilderGetQueryParameters | undefined;
}
