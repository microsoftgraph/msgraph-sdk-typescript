import {SiteSourcesRequestBuilderGetQueryParameters} from './siteSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SiteSourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SiteSourcesRequestBuilderGetQueryParameters | undefined;
}
