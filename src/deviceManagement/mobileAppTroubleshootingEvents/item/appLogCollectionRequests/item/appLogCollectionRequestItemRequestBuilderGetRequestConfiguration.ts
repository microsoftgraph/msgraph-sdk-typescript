import {AppLogCollectionRequestItemRequestBuilderGetQueryParameters} from './appLogCollectionRequestItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppLogCollectionRequestItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AppLogCollectionRequestItemRequestBuilderGetQueryParameters | undefined;
}
