import {BrowserSiteListItemRequestBuilderGetQueryParameters} from './browserSiteListItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BrowserSiteListItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BrowserSiteListItemRequestBuilderGetQueryParameters | undefined;
}
