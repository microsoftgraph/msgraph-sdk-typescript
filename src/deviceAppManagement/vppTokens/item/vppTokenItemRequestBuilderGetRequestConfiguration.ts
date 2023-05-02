import {VppTokenItemRequestBuilderGetQueryParameters} from './vppTokenItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VppTokenItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: VppTokenItemRequestBuilderGetQueryParameters | undefined;
}
