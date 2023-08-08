import {AppHealthMetricsRequestBuilderGetQueryParameters} from './appHealthMetricsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppHealthMetricsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AppHealthMetricsRequestBuilderGetQueryParameters | undefined;
}
