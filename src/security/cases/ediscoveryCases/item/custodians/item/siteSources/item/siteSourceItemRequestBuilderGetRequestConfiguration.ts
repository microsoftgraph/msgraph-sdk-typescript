import {SiteSourceItemRequestBuilderGetQueryParameters} from './siteSourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SiteSourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SiteSourceItemRequestBuilderGetQueryParameters | undefined;
}
