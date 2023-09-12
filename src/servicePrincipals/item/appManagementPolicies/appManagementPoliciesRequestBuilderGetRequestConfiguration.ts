import { type AppManagementPoliciesRequestBuilderGetQueryParameters } from './appManagementPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AppManagementPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AppManagementPoliciesRequestBuilderGetQueryParameters | undefined;
}
