import {RejectedSendersRequestBuilderGetQueryParameters} from './rejectedSendersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RejectedSendersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RejectedSendersRequestBuilderGetQueryParameters | undefined;
}
