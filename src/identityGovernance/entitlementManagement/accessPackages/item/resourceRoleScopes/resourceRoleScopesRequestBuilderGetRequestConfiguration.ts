import { type ResourceRoleScopesRequestBuilderGetQueryParameters } from './resourceRoleScopesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ResourceRoleScopesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourceRoleScopesRequestBuilderGetQueryParameters | undefined;
}
