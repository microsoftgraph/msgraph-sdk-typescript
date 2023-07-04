import {ResourcePerformanceMetricsRequestBuilderGetQueryParameters} from './resourcePerformanceMetricsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourcePerformanceMetricsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ResourcePerformanceMetricsRequestBuilderGetQueryParameters | undefined;
}
