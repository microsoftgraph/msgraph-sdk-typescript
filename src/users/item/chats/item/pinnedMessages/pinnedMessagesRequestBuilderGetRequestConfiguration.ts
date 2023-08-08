import {PinnedMessagesRequestBuilderGetQueryParameters} from './pinnedMessagesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface PinnedMessagesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PinnedMessagesRequestBuilderGetQueryParameters | undefined;
}
