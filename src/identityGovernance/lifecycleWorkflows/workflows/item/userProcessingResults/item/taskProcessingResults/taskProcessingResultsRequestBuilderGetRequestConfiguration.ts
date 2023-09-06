import { type TaskProcessingResultsRequestBuilderGetQueryParameters } from './taskProcessingResultsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TaskProcessingResultsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TaskProcessingResultsRequestBuilderGetQueryParameters | undefined;
}
