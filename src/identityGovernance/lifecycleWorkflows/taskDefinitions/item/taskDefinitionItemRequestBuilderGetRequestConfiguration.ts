import { type TaskDefinitionItemRequestBuilderGetQueryParameters } from './taskDefinitionItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TaskDefinitionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TaskDefinitionItemRequestBuilderGetQueryParameters | undefined;
}
