import {SharedInsightItemRequestBuilderGetQueryParameters} from './sharedInsightItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedInsightItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SharedInsightItemRequestBuilderGetQueryParameters | undefined;
}
