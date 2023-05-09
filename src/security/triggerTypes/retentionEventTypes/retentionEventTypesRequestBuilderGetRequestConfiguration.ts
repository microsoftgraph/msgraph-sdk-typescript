import {RetentionEventTypesRequestBuilderGetQueryParameters} from './retentionEventTypesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RetentionEventTypesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: RetentionEventTypesRequestBuilderGetQueryParameters | undefined;
}
