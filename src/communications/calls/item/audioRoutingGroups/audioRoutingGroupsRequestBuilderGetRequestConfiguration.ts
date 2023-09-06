import { type AudioRoutingGroupsRequestBuilderGetQueryParameters } from './audioRoutingGroupsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroupsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AudioRoutingGroupsRequestBuilderGetQueryParameters | undefined;
}
