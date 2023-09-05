import { type AcceptedSendersRequestBuilderGetQueryParameters } from './acceptedSendersRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AcceptedSendersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AcceptedSendersRequestBuilderGetQueryParameters | undefined;
}
