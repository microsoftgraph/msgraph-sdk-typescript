import { type LifecycleWorkflowsRequestBuilderGetQueryParameters } from './lifecycleWorkflowsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface LifecycleWorkflowsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LifecycleWorkflowsRequestBuilderGetQueryParameters | undefined;
}
