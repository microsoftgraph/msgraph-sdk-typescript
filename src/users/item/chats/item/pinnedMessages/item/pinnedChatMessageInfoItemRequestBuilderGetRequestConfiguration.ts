import {PinnedChatMessageInfoItemRequestBuilderGetQueryParameters} from './pinnedChatMessageInfoItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfoItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PinnedChatMessageInfoItemRequestBuilderGetQueryParameters | undefined;
}
