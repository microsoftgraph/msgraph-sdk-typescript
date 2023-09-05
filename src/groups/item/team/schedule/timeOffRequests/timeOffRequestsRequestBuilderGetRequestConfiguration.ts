import { type TimeOffRequestsRequestBuilderGetQueryParameters } from './timeOffRequestsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TimeOffRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TimeOffRequestsRequestBuilderGetQueryParameters | undefined;
}
