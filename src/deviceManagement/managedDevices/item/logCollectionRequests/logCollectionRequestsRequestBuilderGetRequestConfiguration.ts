import { type LogCollectionRequestsRequestBuilderGetQueryParameters } from './logCollectionRequestsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface LogCollectionRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LogCollectionRequestsRequestBuilderGetQueryParameters | undefined;
}
