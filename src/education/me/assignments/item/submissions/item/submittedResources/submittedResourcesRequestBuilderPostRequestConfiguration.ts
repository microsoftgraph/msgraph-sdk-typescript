import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SubmittedResourcesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
