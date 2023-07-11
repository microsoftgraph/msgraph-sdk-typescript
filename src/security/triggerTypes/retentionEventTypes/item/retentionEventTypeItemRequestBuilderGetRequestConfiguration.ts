import {RetentionEventTypeItemRequestBuilderGetQueryParameters} from './retentionEventTypeItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RetentionEventTypeItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RetentionEventTypeItemRequestBuilderGetQueryParameters | undefined;
}
