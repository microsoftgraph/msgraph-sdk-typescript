import { type SubmittedResourcesRequestBuilderGetQueryParameters } from './submittedResourcesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SubmittedResourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SubmittedResourcesRequestBuilderGetQueryParameters | undefined;
}
