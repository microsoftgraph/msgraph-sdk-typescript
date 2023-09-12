import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface T_Dist_RTRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
