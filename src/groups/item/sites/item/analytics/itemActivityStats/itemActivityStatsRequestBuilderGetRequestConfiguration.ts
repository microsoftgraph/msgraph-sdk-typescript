import { type ItemActivityStatsRequestBuilderGetQueryParameters } from './itemActivityStatsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ItemActivityStatsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ItemActivityStatsRequestBuilderGetQueryParameters | undefined;
}
