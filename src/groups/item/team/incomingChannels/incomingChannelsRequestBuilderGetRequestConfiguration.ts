import {IncomingChannelsRequestBuilderGetQueryParameters} from './incomingChannelsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface IncomingChannelsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IncomingChannelsRequestBuilderGetQueryParameters | undefined;
}
