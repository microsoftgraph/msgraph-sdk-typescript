import { type BatteryHealthMetricsRequestBuilderGetQueryParameters } from './batteryHealthMetricsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface BatteryHealthMetricsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BatteryHealthMetricsRequestBuilderGetQueryParameters | undefined;
}
