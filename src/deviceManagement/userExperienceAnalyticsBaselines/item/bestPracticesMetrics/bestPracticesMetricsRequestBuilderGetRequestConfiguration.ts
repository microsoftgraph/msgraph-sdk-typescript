import {BestPracticesMetricsRequestBuilderGetQueryParameters} from './bestPracticesMetricsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BestPracticesMetricsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BestPracticesMetricsRequestBuilderGetQueryParameters | undefined;
}
