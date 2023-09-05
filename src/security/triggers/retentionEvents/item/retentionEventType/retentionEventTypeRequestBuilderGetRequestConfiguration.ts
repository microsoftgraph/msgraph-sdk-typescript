import { type RetentionEventTypeRequestBuilderGetQueryParameters } from './retentionEventTypeRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RetentionEventTypeRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RetentionEventTypeRequestBuilderGetQueryParameters | undefined;
}
