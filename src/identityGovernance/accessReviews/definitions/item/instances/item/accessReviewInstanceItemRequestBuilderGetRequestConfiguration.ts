import { type AccessReviewInstanceItemRequestBuilderGetQueryParameters } from './accessReviewInstanceItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessReviewInstanceItemRequestBuilderGetQueryParameters | undefined;
}
