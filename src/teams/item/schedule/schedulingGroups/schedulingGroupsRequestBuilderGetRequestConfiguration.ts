import { type SchedulingGroupsRequestBuilderGetQueryParameters } from './schedulingGroupsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SchedulingGroupsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SchedulingGroupsRequestBuilderGetQueryParameters | undefined;
}
