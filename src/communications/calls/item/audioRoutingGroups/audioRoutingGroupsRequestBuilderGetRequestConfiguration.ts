import {AudioRoutingGroupsRequestBuilderGetQueryParameters} from './audioRoutingGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
