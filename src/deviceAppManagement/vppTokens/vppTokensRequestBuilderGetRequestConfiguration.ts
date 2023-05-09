import {VppTokensRequestBuilderGetQueryParameters} from './vppTokensRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VppTokensRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: VppTokensRequestBuilderGetQueryParameters | undefined;
}
