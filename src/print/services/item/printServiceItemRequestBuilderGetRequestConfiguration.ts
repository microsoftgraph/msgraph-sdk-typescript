import {PrintServiceItemRequestBuilderGetQueryParameters} from './printServiceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintServiceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PrintServiceItemRequestBuilderGetQueryParameters | undefined;
}
