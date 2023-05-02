import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CreateUploadSessionRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
