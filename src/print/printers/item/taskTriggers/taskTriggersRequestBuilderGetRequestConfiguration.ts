import { type TaskTriggersRequestBuilderGetQueryParameters } from './taskTriggersRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TaskTriggersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TaskTriggersRequestBuilderGetQueryParameters | undefined;
}
