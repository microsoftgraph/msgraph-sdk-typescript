import {SharedCookiesRequestBuilderGetQueryParameters} from './sharedCookiesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedCookiesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SharedCookiesRequestBuilderGetQueryParameters | undefined;
}
