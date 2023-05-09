import {ServiceHealthItemRequestBuilderGetQueryParameters} from './serviceHealthItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceHealthItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ServiceHealthItemRequestBuilderGetQueryParameters | undefined;
}
