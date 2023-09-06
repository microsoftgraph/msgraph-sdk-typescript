import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RecoverPasscodeRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
