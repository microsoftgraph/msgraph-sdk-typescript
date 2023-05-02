import {OnlineMeetingItemRequestBuilderGetQueryParameters} from './onlineMeetingItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: OnlineMeetingItemRequestBuilderGetQueryParameters | undefined;
}
