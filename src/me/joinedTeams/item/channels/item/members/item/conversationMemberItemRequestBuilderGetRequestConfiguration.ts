import {ConversationMemberItemRequestBuilderGetQueryParameters} from './conversationMemberItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConversationMemberItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConversationMemberItemRequestBuilderGetQueryParameters | undefined;
}
