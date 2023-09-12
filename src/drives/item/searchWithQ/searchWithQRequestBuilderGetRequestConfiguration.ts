import { type SearchWithQRequestBuilderGetQueryParameters } from './searchWithQRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SearchWithQRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SearchWithQRequestBuilderGetQueryParameters | undefined;
}
