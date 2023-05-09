import {RequestOption} from '@microsoft/kiota-abstractions';

export interface StDev_SRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
