import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
