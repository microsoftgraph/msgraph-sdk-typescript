import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RefreshAllRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
