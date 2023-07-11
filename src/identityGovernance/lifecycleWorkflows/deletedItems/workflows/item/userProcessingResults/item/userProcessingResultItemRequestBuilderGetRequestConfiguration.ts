import {UserProcessingResultItemRequestBuilderGetQueryParameters} from './userProcessingResultItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserProcessingResultItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserProcessingResultItemRequestBuilderGetQueryParameters | undefined;
}
