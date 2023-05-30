import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalActivityItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
