import {AppLogCollectionRequestsRequestBuilderGetQueryParameters} from './appLogCollectionRequestsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppLogCollectionRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AppLogCollectionRequestsRequestBuilderGetQueryParameters | undefined;
}
