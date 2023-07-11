import {ResourceRoleScopesRequestBuilderGetQueryParameters} from './resourceRoleScopesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
