import {RequestOption} from '@microsoft/kiota-abstractions';

export interface StDev_PRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
