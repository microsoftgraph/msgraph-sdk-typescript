import {TrendingItemRequestBuilderGetQueryParameters} from './trendingItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TrendingItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TrendingItemRequestBuilderGetQueryParameters | undefined;
}
