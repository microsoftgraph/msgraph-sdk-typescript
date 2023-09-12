import { type AccessReviewReviewerItemRequestBuilderGetQueryParameters } from './accessReviewReviewerItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewerItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessReviewReviewerItemRequestBuilderGetQueryParameters | undefined;
}
