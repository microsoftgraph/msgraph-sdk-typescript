import { type ConversationThreadItemRequestBuilderGetQueryParameters } from './conversationThreadItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ConversationThreadItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConversationThreadItemRequestBuilderGetQueryParameters | undefined;
}
