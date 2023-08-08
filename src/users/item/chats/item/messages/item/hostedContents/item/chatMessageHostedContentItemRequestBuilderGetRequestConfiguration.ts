import {ChatMessageHostedContentItemRequestBuilderGetQueryParameters} from './chatMessageHostedContentItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChatMessageHostedContentItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ChatMessageHostedContentItemRequestBuilderGetQueryParameters | undefined;
}
