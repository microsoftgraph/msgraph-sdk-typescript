import {RetentionEventItemRequestBuilderGetQueryParameters} from './retentionEventItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface RetentionEventItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: RetentionEventItemRequestBuilderGetQueryParameters | undefined;
}
