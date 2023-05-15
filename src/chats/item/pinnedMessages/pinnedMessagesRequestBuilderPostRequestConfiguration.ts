import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PinnedMessagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
