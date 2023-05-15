import {AppManagementPolicyItemRequestBuilderGetQueryParameters} from './appManagementPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppManagementPolicyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppManagementPolicyItemRequestBuilderGetQueryParameters | undefined;
}
