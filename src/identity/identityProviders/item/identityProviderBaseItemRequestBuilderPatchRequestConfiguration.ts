import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
