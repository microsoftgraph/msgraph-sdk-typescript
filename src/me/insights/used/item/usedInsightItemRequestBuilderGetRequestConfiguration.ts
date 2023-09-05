import { type UsedInsightItemRequestBuilderGetQueryParameters } from './usedInsightItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UsedInsightItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UsedInsightItemRequestBuilderGetQueryParameters | undefined;
}
