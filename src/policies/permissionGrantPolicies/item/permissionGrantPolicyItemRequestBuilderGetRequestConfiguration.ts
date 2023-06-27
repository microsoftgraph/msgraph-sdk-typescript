import {PermissionGrantPolicyItemRequestBuilderGetQueryParameters} from './permissionGrantPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
