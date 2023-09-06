import { type MetricDevicesRequestBuilderGetQueryParameters } from './metricDevicesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MetricDevicesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MetricDevicesRequestBuilderGetQueryParameters | undefined;
}
