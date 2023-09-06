import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperationItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
