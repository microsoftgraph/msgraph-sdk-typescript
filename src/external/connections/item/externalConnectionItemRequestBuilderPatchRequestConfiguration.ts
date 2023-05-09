import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalConnectionItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
