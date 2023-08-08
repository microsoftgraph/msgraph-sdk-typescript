import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnfavoriteRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
