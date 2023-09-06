import { type TaskDefinitionsRequestBuilderGetQueryParameters } from './taskDefinitionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TaskDefinitionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TaskDefinitionsRequestBuilderGetQueryParameters | undefined;
}
