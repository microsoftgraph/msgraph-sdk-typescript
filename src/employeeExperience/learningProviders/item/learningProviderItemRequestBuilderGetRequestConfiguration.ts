import {LearningProviderItemRequestBuilderGetQueryParameters} from './learningProviderItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LearningProviderItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LearningProviderItemRequestBuilderGetQueryParameters | undefined;
}
