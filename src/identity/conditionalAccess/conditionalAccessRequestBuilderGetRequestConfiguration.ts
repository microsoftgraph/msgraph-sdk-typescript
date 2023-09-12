import { type ConditionalAccessRequestBuilderGetQueryParameters } from './conditionalAccessRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConditionalAccessRequestBuilderGetQueryParameters | undefined;
}
