import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthoredNoteItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
