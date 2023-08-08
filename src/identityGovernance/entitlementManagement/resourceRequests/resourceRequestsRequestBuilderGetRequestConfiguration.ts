import {ResourceRequestsRequestBuilderGetQueryParameters} from './resourceRequestsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourceRequestsRequestBuilderGetQueryParameters | undefined;
}
