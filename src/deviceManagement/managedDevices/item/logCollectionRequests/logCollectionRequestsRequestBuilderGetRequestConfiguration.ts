import {LogCollectionRequestsRequestBuilderGetQueryParameters} from './logCollectionRequestsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
