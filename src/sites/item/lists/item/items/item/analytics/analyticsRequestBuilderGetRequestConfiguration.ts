import {AnalyticsRequestBuilderGetQueryParameters} from './analyticsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AnalyticsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AnalyticsRequestBuilderGetQueryParameters | undefined;
}
