import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetMailTipsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
