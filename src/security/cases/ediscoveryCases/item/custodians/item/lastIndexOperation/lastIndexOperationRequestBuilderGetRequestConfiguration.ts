import {LastIndexOperationRequestBuilderGetQueryParameters} from './lastIndexOperationRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastIndexOperationRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LastIndexOperationRequestBuilderGetQueryParameters | undefined;
}
