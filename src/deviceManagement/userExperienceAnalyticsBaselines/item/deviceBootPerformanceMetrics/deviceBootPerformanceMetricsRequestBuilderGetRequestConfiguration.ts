import {DeviceBootPerformanceMetricsRequestBuilderGetQueryParameters} from './deviceBootPerformanceMetricsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceBootPerformanceMetricsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceBootPerformanceMetricsRequestBuilderGetQueryParameters | undefined;
}
