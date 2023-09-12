import { type SchedulingGroupItemRequestBuilderGetQueryParameters } from './schedulingGroupItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SchedulingGroupItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SchedulingGroupItemRequestBuilderGetQueryParameters | undefined;
}
