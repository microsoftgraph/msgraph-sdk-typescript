import {ResourceNamespacesRequestBuilderGetQueryParameters} from './resourceNamespacesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceNamespacesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourceNamespacesRequestBuilderGetQueryParameters | undefined;
}
