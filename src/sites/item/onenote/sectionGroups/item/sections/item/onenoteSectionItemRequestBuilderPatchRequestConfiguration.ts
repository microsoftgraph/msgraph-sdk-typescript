import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteSectionItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
