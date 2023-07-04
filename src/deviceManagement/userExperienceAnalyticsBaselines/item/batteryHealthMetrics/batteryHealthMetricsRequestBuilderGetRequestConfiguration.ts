import {BatteryHealthMetricsRequestBuilderGetQueryParameters} from './batteryHealthMetricsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
