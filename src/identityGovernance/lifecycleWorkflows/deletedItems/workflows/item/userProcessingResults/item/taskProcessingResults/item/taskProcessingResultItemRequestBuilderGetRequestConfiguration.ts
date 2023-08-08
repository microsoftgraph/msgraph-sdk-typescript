import {TaskProcessingResultItemRequestBuilderGetQueryParameters} from './taskProcessingResultItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface TaskProcessingResultItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TaskProcessingResultItemRequestBuilderGetQueryParameters | undefined;
}
