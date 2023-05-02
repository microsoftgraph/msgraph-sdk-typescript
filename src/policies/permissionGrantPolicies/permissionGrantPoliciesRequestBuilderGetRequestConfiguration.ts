import {PermissionGrantPoliciesRequestBuilderGetQueryParameters} from './permissionGrantPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PermissionGrantPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PermissionGrantPoliciesRequestBuilderGetQueryParameters | undefined;
}
