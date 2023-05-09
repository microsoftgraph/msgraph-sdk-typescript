import {PrintServiceEndpointItemRequestBuilderGetQueryParameters} from './printServiceEndpointItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpointItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PrintServiceEndpointItemRequestBuilderGetQueryParameters | undefined;
}
