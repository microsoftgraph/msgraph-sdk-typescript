import { type UserProcessingResultsRequestBuilderGetQueryParameters } from './userProcessingResultsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserProcessingResultsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserProcessingResultsRequestBuilderGetQueryParameters | undefined;
}
