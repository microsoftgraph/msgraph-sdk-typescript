import {RoleManagementPoliciesRequestBuilderGetQueryParameters} from './roleManagementPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleManagementPoliciesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:RoleManagementPoliciesRequestBuilderGetQueryParameters | undefined;
}
