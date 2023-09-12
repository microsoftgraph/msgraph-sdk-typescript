import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface OddFPriceRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
