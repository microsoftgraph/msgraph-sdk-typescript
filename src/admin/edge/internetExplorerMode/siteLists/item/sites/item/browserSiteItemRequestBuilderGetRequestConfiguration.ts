import {BrowserSiteItemRequestBuilderGetQueryParameters} from './browserSiteItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BrowserSiteItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: BrowserSiteItemRequestBuilderGetQueryParameters | undefined;
}
