import { type PrintTaskTriggerItemRequestBuilderGetQueryParameters } from './printTaskTriggerItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PrintTaskTriggerItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PrintTaskTriggerItemRequestBuilderGetQueryParameters | undefined;
}
