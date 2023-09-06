import { type DocumentSetVersionsRequestBuilderGetQueryParameters } from './documentSetVersionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DocumentSetVersionsRequestBuilderGetQueryParameters | undefined;
}
