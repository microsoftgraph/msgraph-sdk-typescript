import {BrowserSharedCookieItemRequestBuilderGetQueryParameters} from './browserSharedCookieItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface BrowserSharedCookieItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BrowserSharedCookieItemRequestBuilderGetQueryParameters | undefined;
}
