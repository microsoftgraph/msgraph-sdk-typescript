import {CreatedObjectsRequestBuilderGetQueryParameters} from './createdObjectsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface CreatedObjectsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CreatedObjectsRequestBuilderGetQueryParameters | undefined;
}
