import {SeriesAxisRequestBuilderGetQueryParameters} from './seriesAxisRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SeriesAxisRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SeriesAxisRequestBuilderGetQueryParameters | undefined;
}
