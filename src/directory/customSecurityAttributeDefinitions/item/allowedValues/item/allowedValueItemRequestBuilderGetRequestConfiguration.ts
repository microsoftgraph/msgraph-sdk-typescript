import {AllowedValueItemRequestBuilderGetQueryParameters} from './allowedValueItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedValueItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AllowedValueItemRequestBuilderGetQueryParameters | undefined;
}
