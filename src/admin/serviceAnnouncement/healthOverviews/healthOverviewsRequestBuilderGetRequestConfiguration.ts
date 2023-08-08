import {HealthOverviewsRequestBuilderGetQueryParameters} from './healthOverviewsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface HealthOverviewsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HealthOverviewsRequestBuilderGetQueryParameters | undefined;
}
