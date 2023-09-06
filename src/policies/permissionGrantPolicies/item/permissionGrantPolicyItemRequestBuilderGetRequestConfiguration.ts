import { type PermissionGrantPolicyItemRequestBuilderGetQueryParameters } from './permissionGrantPolicyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PermissionGrantPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PermissionGrantPolicyItemRequestBuilderGetQueryParameters | undefined;
}
